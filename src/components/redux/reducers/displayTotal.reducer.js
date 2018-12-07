const displayTotal = (state = false, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return action.payload
    default:
      return false
  }
}

export default displayTotal;
