import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

// const mongoURI = MONGODB_URI;

// export async function connectToMongoDB() {
// 	const client = new MongoClient(mongoURI);
// 	try {
// 		console.log('Connecté à MongoDB avec succès :: ');
// 		return await client.connect();
// 	} catch (error) {
// 		console.error('Erreur lors de la connexion à MongoDB via SSH : ', error);
// 		throw error;
// 	}
// }

export async function connectToMongoDB(db) {
	const uri = MONGODB_URI;
	const client = new MongoClient(uri);

	try {
		await client.connect();
		console.log('Connecté à MongoDB'); // Retourne la référence à la base de données
		return client.db(db);
	} catch (error) {
		console.error('Erreur de connexion à MongoDB', error);
		throw error;
	}
}
