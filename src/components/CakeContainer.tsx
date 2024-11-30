import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface CakeContainerProps {
  numOfCakes: number;
  buyCake: () => void;
}

const cakeContainer = ({ numOfCakes, buyCake }: CakeContainerProps) => {
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={buyCake} disabled={numOfCakes === 0}>
        Buy cake
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
