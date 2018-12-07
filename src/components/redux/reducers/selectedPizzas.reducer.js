const selectedPizzas = ( state = [], action ) => {
    switch( action.type ) {
        case 'SELECT_PIZZA':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default selectedPizzas;