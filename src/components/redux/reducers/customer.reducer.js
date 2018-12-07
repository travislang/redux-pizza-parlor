const customer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CUSTOMER':
      return [...state, action];
    case 'CLEAR_INFO':
        return []
    default:
      return state;
  }
} 

export default customer;