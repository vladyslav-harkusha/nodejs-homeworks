const { userRepository} = require("../repositories/user.repository");

class UserService {
	async getAll() {
		return await userRepository.getAll()
	}

	async create(user) {
		return await userRepository.create(user);
	}

	async getById(id) {
		return await userRepository.getById(id);
	}

	async updateById(id, updatedUser) {
		return await userRepository.updateById(id, updatedUser)
	}

	async updatePartialById(id, newFields) {
		return await userRepository.updatePartialById(id, newFields)
	}

	async deleteById(id) {
		return await userRepository.deleteById(id);
	}

	async filterByQueryParams(filterParams) {
		return await userRepository.filterByQueryParams(filterParams);
	}
}

const userService = new UserService();
module.exports = { userService };