import { BUY_CAKE } from "./cakeTypes";

//action creator
export const buyCake = (quantity: number = 1) => {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};
