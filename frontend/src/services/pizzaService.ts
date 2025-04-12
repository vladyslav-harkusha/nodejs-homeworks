import { IRes } from "../types/respType";
import { IPizza, IPizzaDTO } from "../interfaces/IPizza";
import { apiService } from "./apiService";
import { urls } from "../constants/urls";
import { IDataResponse } from "../interfaces/IDataResponse";

const pizzaService = {
    getAll(): IRes<IDataResponse<IPizza>> {
        return apiService.get(urls.pizzas);
    },

    create(data: IPizzaDTO): IRes<IPizza> {
        return apiService.post<IPizza>(urls.pizzas, data);
    }
};

export { pizzaService };