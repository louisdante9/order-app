const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, user: action.payload };
    case 'USER_LOGGEDIN':
      return { ...state, isLoggedIn: action.payload };
    case 'LOGIN_ERRORS':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;
