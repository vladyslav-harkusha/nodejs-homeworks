import { IRes } from "../types/respType";
import { IPizza } from "../interfaces/IPizza";
import { apiService } from "./apiService";
import { urls } from "../constants/urls";

const pizzaService = {
    getAll(): IRes<IPizza[]> {
        return apiService.get(urls.pizzas)
    },

    create(data: IPizza): IRes<IPizza> {
        return apiService.post<IPizza>(urls.pizzas, data);
    }
};

export { pizzaService };