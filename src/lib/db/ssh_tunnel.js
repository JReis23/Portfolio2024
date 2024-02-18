import SSH2Promise from 'ssh2-promise';
import { MONGODB_PASS, SERVER_PASS, MONGODB_USERNAME } from '$env/static/private';
import { MongoClient } from 'mongodb';

// Fonction pour établir un tunnel SSH vers le serveur distant
async function createSSHTunnel() {
	const config = {
		host: '212.227.73.229',
		username: 'joao',
		password: SERVER_PASS
	};
	const ssh = new SSH2Promise(config);

	ssh.setMaxListeners(15);

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
		const username = MONGODB_USERNAME;
		const password = MONGODB_PASS;
		const database = 'portfolio'; // Replace 'your_database_name' with your actual database name
		const hostname = 'localhost';
		const port = '27018';
		// const mongoURI = `mongodb://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${hostname}:${port}/`;

		const mongoURI =
			'mongodb://adminJoao:stE!%232d%23D5ZpQ7%25zLiy%23Nv5oUbKWPeH*kVyUBqwV%26Z!AP8@212.227.73.229:27017/';

		const client = new MongoClient(mongoURI);
		console.log('>>>>>>>>>>>>>>>', { client });
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

connectToMongoDB();
