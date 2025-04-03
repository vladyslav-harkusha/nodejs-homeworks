import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../enums/status-codes.enum";
import { IPizzaCreateDTO } from "../interfaces/pizza.interface";
import { pizzaService } from "../services/pizza.service";

class PizzaController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const pizzas = await pizzaService.getAll();

            res.status(StatusCodesEnum.OK).json(pizzas);
        } catch (e) {
            next(e);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newPizzaDTO = req.body as IPizzaCreateDTO;
            const newPizza = await pizzaService.create(newPizzaDTO);

            res.status(StatusCodesEnum.OK).json(newPizza);
        } catch (e) {
            next(e);
        }
    }
}

export const pizzaController = new PizzaController();
