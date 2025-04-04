import { SubmitHandler, useForm } from "react-hook-form";
import { IPizzaDTO } from "../../interfaces/IPizza";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { pizzaActions } from "../../redux/slices/pizzaSlice";

const PizzaCreate = () => {
    const { register, handleSubmit, reset } = useForm<IPizzaDTO>();
    const dispatch = useAppDispatch();

    const save: SubmitHandler<IPizzaDTO> = async (pizza) => {
        dispatch(pizzaActions.create({ pizza } ));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} { ...register('name') } required />
            <input type="text" placeholder={'price'} { ...register('price') } required />
            <input type="text" placeholder={'diameter'} { ...register('diameter') } required />
            <button>Save</button>
        </form>
    );
};

export { PizzaCreate };