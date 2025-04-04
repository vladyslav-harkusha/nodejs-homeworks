import React, { FC } from "react";
import { IPizza } from "../../interfaces/IPizza";

interface IProps {
    pizza: IPizza;
}

const Pizza: FC<IProps> = ({ pizza }) => {
    const { name, price, diameter } = pizza;

    return (
        <div>
            <h3>{name}</h3>
            <p>Diameter: {diameter}, Price: {price} UAH</p>
        </div>
    );
};

export { Pizza };