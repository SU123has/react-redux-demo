import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// The ReturnType utility type is used to extract the return type of a function type. In this case, we are using it to extract the type of the rootReducer function. The resulting type is assigned to the RootState type, which represents the type of the root state of the Redux store.
export default rootReducer;
// In the above code, we have combined the cakeReducer and iceCreamReducer using the combineReducers function from the redux library. The combineReducers function accepts an object as an argument where the keys are the slice names and the values are the reducer functions. The resulting rootReducer can be used to create the Redux store.
