import { BUY_CAKE } from "./cakeTypes";

interface actionType {
  type: string;
  payload?: any;
}

export interface CakeState {
  numOfCakes: number;
}

const initialState: CakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
