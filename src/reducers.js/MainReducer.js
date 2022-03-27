export function reducer(state, action){
    switch(action.type){
        case "ADD":
            var currentValue = state;
            return currentValue += action.payload;
        case "SUBTRACT":
            var currentValue = state;
            return currentValue -= action.payload;
        default:
            return state;
    }
};