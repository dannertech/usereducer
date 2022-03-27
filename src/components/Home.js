import React, {useReducer} from 'react';
import { reducer } from '../reducers.js/MainReducer';

const initialState = 0;


const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function increase(value){
        dispatch({type: "ADD", payload: value});
    };
    function decrease(value){
        dispatch({type: "SUBTRACT", payload: value});
    };

    return(
        <div>
            <h1>This is the Home screen!</h1>
            <button onClick={() => increase(5)}>Increase</button>
            <button onClick={() => decrease(5)}>Decrease</button>
            <h1>{state}</h1>
        </div>
    )
};

export default Home;