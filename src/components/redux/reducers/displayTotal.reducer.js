const displayTotal = (state = false, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return action.payload;
    case 'CLEAR_INFO':
          return []
    default:
      return state;
  }
}

export default displayTotal;
