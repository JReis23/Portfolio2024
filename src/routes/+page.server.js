import { connectToMongoDB } from '$lib/db/mongo.js';
import { contactFormSchema } from '$lib/contactFormValidation.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load({ params }) {
	const form = await superValidate(zod(contactFormSchema));

	try {
		// Connexion à la base de données MongoDB
		const db = await connectToMongoDB('portfolio');

		// Accéder à la collection et effectuer des opération
		let filter = {}; //le filtre a faire pour rechercher a l'interieur de mongodb l'info qu'on veut. Exemple {_id: 0, name: 1}
		const collection = db.collection('contact').find().project(filter);
		const data = await collection.toArray();
		const serializedData = data.map((item) =>
			JSON.parse(
				JSON.stringify(item, (key, value) => (key === '_id' ? value.toString(value) : value))
			)
		);
		// Retourner les données pour être utilisées dans le composant de la page
		return {
			serializedData,
			form
		};
	} catch (e) {
		console.log('Error:', e);
	}
}

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const form = await superValidate(data, zod(contactFormSchema));

			let filter;
			let dataForm;

			if (!form.valid) {
				return fail(400, { form });
			}

			const email = data.get('email');
			const name = data.get('name');
			const message = data.get('message');

			const db = await connectToMongoDB('portfolio');
			const contact = db.collection('contact');

			if (db) {
				filter = { _id: 1, email: 1 };
				const emailContact = contact.find().project(filter);
				const emailArray = await emailContact.toArray();
				const mappedEmail = emailArray.map((i) => i.email);
				if (mappedEmail.includes(email)) {
					const pipeline = [{ $match: { email: email } }, { $project: { _id: 1 } }];
					const aggregation = await contact.aggregate(pipeline).toArray();
					const contactId = aggregation[0]._id;
					const messages = db.collection('messages');
					dataForm = { contactId: contactId, message };
					messages.insertOne(dataForm);
				} else {
					dataForm = {
						email,
						name
					};
					const dataSent = await contact.insertOne(dataForm);
					const idFromDataSent = dataSent.insertedId;
					const messages = db.collection('messages');
					dataForm = { contactId: idFromDataSent, message };
					messages.insertOne(dataForm);
				}
			}
			return { form };
		} catch (error) {
			console.log(error);
		}
	}
};
