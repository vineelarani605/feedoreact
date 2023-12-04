import { configureStore } from "@reduxjs/toolkit"
import feedoSlice from "../components/slices/feedoSlice";
const store = configureStore({
    reducer: {
        feedo: feedoSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;