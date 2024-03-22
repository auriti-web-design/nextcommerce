import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// Hook personalizzato per dispatch dell'azione
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook personalizzato per la selezione dello stato con tipizzazione
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
