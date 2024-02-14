import tunnel from 'tunnel-ssh';
import { readFileSync } from 'fs';

async function establishSSHTunnel() {
	const config = {
		username: 'joao',
		host: '212.227.73.229',
		privateKey: readFileSync('/home/joao/.ssh/id_rsa'),
		port: 22,
		dstHost: '127.0.0.1',
		dstPort: 27017,
		localHost: '127.0.0.1',
		localPort: 27017
	};

	return new Promise((resolve, reject) => {
		tunnel(config, (error, server) => {
			if (error) {
				reject(error);
			} else {
				resolve(server);
			}
		});
	});
}

export default establishSSHTunnel;
