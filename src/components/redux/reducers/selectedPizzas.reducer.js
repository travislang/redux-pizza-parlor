const selectedPizzas = ( state = [], action ) => {
    switch( action.type ) {
        case 'SELECT_PIZZA':
            for (let pizza of state) {
                if(action.payload.id === pizza.id) {
                    alert('you can only have one of the same kind of pizza per order');
                    return state;
                }
            }
            return [...state, action.payload];
        case 'DELETE_PIZZA':
            return state.filter( (item) => {return item.id !== action.payload.id 
            })
        case 'CLEAR_INFO':
            return []
        default:
            return state;
    }
}

export default selectedPizzas;