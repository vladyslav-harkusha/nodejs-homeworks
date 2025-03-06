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

	async getById(id) {
		const users = await read();
		const foundUser = users.find(user => user.id === Number(id));

		return foundUser;
	}

	async updateById(id, updatedUser ) {
		const users = await read();
		const foundIndex = users.findIndex(user => user.id === Number(id));

		users[foundIndex] = updatedUser;
		await write(users);

		return updatedUser;
	}

	async updatePartialById(id, newFields ) {
		const users = await read();
		const foundIndex = users.findIndex(user => user.id === Number(id));

		const updatedUser = { ...users[foundIndex], ...newFields };
		users[foundIndex] = updatedUser;
		await write(users);

		return updatedUser;
	}

	async deleteById(id) {
		const users = await read();
		const foundIndex = users.findIndex(user => user.id === Number(id));

		let deletedUser;
		if (foundIndex !== -1) {
			deletedUser = users.splice(foundIndex, 1);
			await write(users);
		}

		return deletedUser;
	}
}

const userRepository = new UserRepository();
module.exports = { userRepository };