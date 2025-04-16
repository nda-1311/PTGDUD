import { useReducer } from "react";

const initialState = {
    count: 0
};

const ReducerTangGiam = (state = initialState, action) => {
    switch (action.type){
        case "Tang":
            return {count: state.count + 1};
        case "Giam":
            return {count: state.count -1 };
        default:
            return state;
    }
}


export default ReducerTangGiam