import { connectToMongoDB } from '$lib/db/mongo.js';

console.log(connectToMongoDB());

export const contact = connectToMongoDB.collection('contact');
