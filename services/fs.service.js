const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(process.cwd(), 'db', 'users.json');

const read = async () => {
	try {
		const fileData =  await fs.readFile(filePath, 'utf-8');

		return fileData ? JSON.parse(fileData) : [];
	} catch (e) {
		console.log('Error:', e.message);
	}
};

const write = async (users) => {
	try {
		await fs.writeFile(filePath, JSON.stringify(users));
	} catch (e) {
		console.log('Error:', e.message);
	}
};

module.exports = { read, write };