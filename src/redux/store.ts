import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";
import { thunk } from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppDispatch = typeof store.dispatch; //The AppDispatch type is defined as the type of the dispatch function from the Redux store. This type is used to ensure that the dispatch function is correctly typed when used in components.
export const useAppDispatch = () => useDispatch<AppDispatch>(); //The useAppDispatch hook is a custom hook that returns a reference to the dispatch function from the Redux store. This hook is used in components to dispatch actions to the Redux store. The type of the dispatch function is specified as AppDispatch, which ensures that the dispatch function is correctly typed when used in components.
