export default function(state, action) {
    let newState = Object.assign(state);
    switch(action.type) {
        case "CHANGE_CHANNEL":
            newState = { ...state, activeChannel: action.payload.channel };
            break;
        case "FETCH_MESSAGES":
            newState = { ...state, messages: action.payload };
            break;
        // To-Do: error handling
        // case "FETCH_ERROR":
        //     state = { ...state};
        //     break;
        dafault:
            newState = { ...state };
            break;
    }
    return newState;
}