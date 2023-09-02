import "../actions/index.js";
const initialState = 0;
const changeState = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return state + 5;
        case "DEC":
            return state - 5;
        default:
            return state;
    }
};
export default changeState;