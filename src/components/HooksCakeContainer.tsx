import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { RootState } from "../redux/rootReducer";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state: RootState) => state.cake.numOfCakes); //accepts a function as its argument which returns the state of the Redux store
  const dispatch = useDispatch(); //returns a reference to the dispatch function from the Redux store
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())} disabled={numOfCakes === 0}>
        Buy Cake
      </button>
    </div>
  );
};

export default HooksCakeContainer;
