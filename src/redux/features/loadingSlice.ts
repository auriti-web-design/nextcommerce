import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Stato iniziale del caricamento: false (non in caricamento)
const initialState: boolean = false;

// Definizione dello slice del caricamento con createSlice
export const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        // Imposta lo stato di caricamento
        setLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
});

// Esporta l'azione del loadingSlice
export const { setLoading } = loadingSlice.actions;

// Esporta il reducer del loadingSlice
export default loadingSlice.reducer;
