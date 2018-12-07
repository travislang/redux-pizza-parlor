const customer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CUSTOMER':
      return [...state, action.payload];
    default:
      return state;
  }
} 

export default customer;