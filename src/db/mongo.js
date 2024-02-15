import SSH2Promise from 'ssh2-promise';
import { MONGODB_PASS } from '$env/static/public';
import { MongoClient } from 'mongodb';

// Fonction pour établir un tunnel SSH vers le serveur distant
async function createSSHTunnel() {
	const config = {
		host: '212.227.73.229',
		username: 'joao',
		password: MONGODB_PASS
		// dstHost: '127.0.0.1',
		// dstPort: 27017,
		// localHost: '127.0.0.1',
		// localPort: 5173
	};
	const ssh = new SSH2Promise(config);
	console.log({ ssh });

	try {
		await ssh.connect();
		console.log('Tunnel SSH établi avec succès');
	} catch (error) {
		console.error('Erreur lors de la création du tunnel SSH : ', error);
		throw error;
	}

	return ssh;
}

// Fonction pour se connecter à la base de données MongoDB via le tunnel SSH
export async function connectToMongoDB() {
	let ssh;

	try {
		// Etablir le tunnel SSH
		ssh = await createSSHTunnel();

		//TODO find a way to connect to mongodb with user and pass from database

		// Connexion à la base de données MongoDB
		const client = new MongoClient('mongodb://127.0.0.1:27017');
		await client.connect();

		console.log('Connecté à MongoDB avec succès');

		// Retourner le client MongoDB pour effectuer des opérations sur la base de données
		return client;
	} catch (error) {
		console.error('Erreur lors de la connexion à MongoDB via SSH : ', error);
		if (ssh) {
			ssh.dispose();
		}
		throw error;
	}
}
