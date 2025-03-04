const asyncFS = require('node:fs/promises');
const notAsyncFS = require('node:fs');
const readLine = require('node:readline/promises');
const path = require('node:path');

const start = async () => {
	const allEmailsFile = path.join('emails-data', 'emails.txt');
	const gmailEmailsFile = path.join('emails-data', 'gmailEmails.txt');
	const ukrnetEmailsFile = path.join('emails-data', 'ukrnetEmails.txt');

	const fileStream = notAsyncFS.createReadStream(allEmailsFile, 'utf-8');
	const rl = readLine.createInterface({ input:fileStream	})

	try {
		let gmailNumber = 1;
		let ukrnetNumber = 1;

		for await (const line of rl) {
			const email = line.slice(35);

			if (line.endsWith('@gmail.com')) {
				await asyncFS.appendFile(gmailEmailsFile, `${gmailNumber}: ${email}\n`);
				gmailNumber++;
			} else if (line.endsWith('@ukr.net')) {
				await asyncFS.appendFile(ukrnetEmailsFile, `${ukrnetNumber}: ${email}\n`);
				ukrnetNumber++;
			}
		}
	} finally {
		await rl.close();
	}
}

start();
