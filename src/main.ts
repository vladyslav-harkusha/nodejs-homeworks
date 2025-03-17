import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import {userService} from "./services/user.service";
import {IUserDTO} from "./interfaces/user.interface";
import {config} from "./configs/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req: Request, res: Response) => {
    const data = await userService.getAll();
    res.json(data);
});

app.post('/users', async (req: Request, res: Response) => {
    const newUser = req.body as IUserDTO;
    const data = await userService.create(newUser);
    res.json(data);
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await userService.getById(id);
    res.json(data);
});

const dbConnection = async () => {
    let dbCon = false;

    while (!dbCon) {
        try {
            console.log('Connecting to DB...');
            await mongoose.connect(config.MONGO_URI);
            dbCon = true;
            console.log('Database available!!!')
        } catch (e) {
            console.log('Database unavaliable, wait 3 seconds');
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
    }
};

const start = async () => {
    try {
        await dbConnection();
        app.listen(config.PORT, () => {
            console.log(`Server is listening on ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();