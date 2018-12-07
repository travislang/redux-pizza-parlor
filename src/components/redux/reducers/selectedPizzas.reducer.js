const selectedPizzas = ( state = [], action ) => {
    switch( action.type ) {
        case 'SELECT_PIZZA':
            return [...state, action];
        default:
            return state;
    }
}

export default selectedPizzas;