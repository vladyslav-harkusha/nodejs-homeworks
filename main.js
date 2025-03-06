const express = require('express');
const {userService} = require("./services/user.service");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
	const searchParams = req.query;

	let data;
	if (Object.keys(searchParams).length) {
		data = await userService.filterByQueryParams(searchParams);
	} else {
		data = await userService.getAll();
	}

	res.json(data);
});

app.get('/users/:userId', async (req, res) => {
	const { userId } = req.params;
	const data = await userService.getById(userId);
	res.json(data);
});

app.post('/users', async (req, res) => {
	const user = req.body;
	const data = await userService.create(user);
	res.json(data);
});

app.put('/users/:userId', async (req, res) => {
	const { userId } = req.params;
	const updatedUser = req.body;
	const data = await userService.updateById(userId, updatedUser);

	res.json(data);
});

app.patch('/users/:userId', async (req, res) => {
	const { userId } = req.params;
	const fieldsToUpdate = req.body;
	const data = await userService.updatePartialById(userId, fieldsToUpdate);

	res.json(data);
});

app.delete('/users/:userId', async (req, res) => {
	const { userId } = req.params;
	const data = await userService.deleteById(userId);

	res.json(data);
});


app.listen(5000, () => {
	console.log('server is running on port 5000');
});