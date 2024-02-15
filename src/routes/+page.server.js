import { connectToMongoDB } from '../db/mongo.js';

export async function load({ fetch }) {
	try {
		const client = await connectToMongoDB();
		// Vous pouvez utiliser 'client' pour effectuer des opérations sur la base de données MongoDB
		// Par exemple, fetch des données ou enregistrer des données dans la base de données
		return { data: client };
	} catch (error) {
		console.error('Erreur lors de la connexion à MongoDB : ', error);
	}
}
