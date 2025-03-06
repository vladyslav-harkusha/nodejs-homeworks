const express = require('express');
const {userService} = require("./services/user.service");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
	const data = await userService.getAll();
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

app.listen(5000, () => {
	console.log('server is running on port 5000');
});