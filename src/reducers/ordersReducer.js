const initialState = {
  orders: [],
  order: {},
  error: {}
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDERS':
      return { ...state, orders: action.payload };
    case 'ORDERS_ERRORS':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default ordersReducer;
