const customer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CUSTOMER':
          return action.payload;;
    case 'CLEAR_INFO':
        return []
    default:
      return state;
  }
} 

export default customer;