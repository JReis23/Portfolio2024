import establishSSHTunnel from '../db/mongo.js';

export async function load({ params }) {
	try {
		// Establish SSH tunnel
		const server = await establishSSHTunnel();
		console.log('SSH tunnel established');
		// Once tunnel is established, connect to MongoDB
		const client = await MongoClient.connect('mongodb://localhost:27017', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		const db = client.db('portfolio');
		console.log('Connected to MongoDB');
		console.log('Connected to MongoDB', db);

		// Do whatever you need with the MongoDB connection here...

		// Close the connection when done
		await client.close();
		console.log('MongoDB connection closed');
	} catch (error) {
		console.error('Error:', error);
	}

	// Additional SSR logic...
}
