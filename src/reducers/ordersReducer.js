const initialState = {
  orders: [],
  order: {},
  error: {}
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDERS':
      return { ...state, orders: action.payload.filter(order => order.uid !== undefined) };
    case 'ORDERS_ERRORS':
      return { ...state, error: action.payload };
    case 'ADD_ORDER':
      return { ...state, order: action.payload };
    default:
      return state;
  }
}

export default ordersReducer;
