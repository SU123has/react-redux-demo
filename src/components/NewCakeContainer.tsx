import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useState } from "react";

interface NewCakeContainerProps {
  numOfCakes: number;
  buyCake: (quantity: number) => void;
}

const NewCakeContainer = ({ numOfCakes, buyCake }: NewCakeContainerProps) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <div className="input-container">
        <label htmlFor="enterCakeNumber">Enter Number of cakes: </label>
        <input
          id="enterCakeNumber"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <button
        onClick={() => buyCake(number)}
        disabled={numOfCakes - number < 0}
      >
        Buy {number} cake
      </button>
    </div>
  );
};

//takes in redux state and returns an object
// this function maps the Redux state to the component props.
const mapStateToProps = (state: RootState) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//takes in redux dispatch method and returns an object
//this function maps the dispatch of an action creator to a prop in the component
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: (quantity: number) => dispatch(buyCake(quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
