import { combineReducers } from "redux";
import { descriptionReducer } from "./description";

export const rootReducer = combineReducers({
    descriptions: descriptionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
