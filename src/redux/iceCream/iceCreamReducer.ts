import { BUY_ICECREAM } from "./iceCreamTypes";

interface ActionType {
  type: string;
  payload?: any;
}

interface IceCreamState {
  numOfIceCreams: number;
}

const initialState: IceCreamState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
