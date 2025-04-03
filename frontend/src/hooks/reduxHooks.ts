import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: TypedUseSelectorHook<AppDispatch> = () => useDispatch;

export { useAppSelector, useAppDispatch };