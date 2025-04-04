export interface IPizza {
    _id: string;
    name: string;
    price: number;
    diameter: number;
}

export type IPizzaDTO = Pick<IPizza, "name" | "price" | "diameter">