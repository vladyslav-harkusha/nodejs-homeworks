const { read, write} = require("../services/fs.service");

class UserRepository {
	async getAll() {
		return read();
	}

	async create({ name, surname, age }) {
		const users = await read();
		const newUser = {
			id: users.length ? users[users.length - 1].id + 1 : 1,
			name,
			surname,
			age
		};

		users.push(newUser);
		await write(users);

		return newUser;
	}
}

const userRepository = new UserRepository();
module.exports = { userRepository };