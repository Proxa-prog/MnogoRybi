import { RootState } from "app/store/reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelectors: TypedUseSelectorHook<RootState> = useSelector;
