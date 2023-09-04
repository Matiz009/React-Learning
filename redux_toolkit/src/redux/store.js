import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counter/index";

export const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);