// import axios from 'axios';
import auth from '../config/firebase'

/**
 * @description A function to dispatch an action on user sigin success
 *
 * @param {object} user user object
 *
 * @return {Object} action dispatch by the action creator
 */
export const userLogin = (user) => {
  return {
    type: 'USER_LOGIN',
    payload: user
  }
};

/**
 * @description A function to dispatch an action on user loggedIn
 *
 * @param {boolean} isLoggedIn
 *
 * @return {Object} action dispatch by the action creator
 */
export const userLoggedIn = (isLoggedIn) => {
  return {
    type: 'USER_LOGGEDIN',
    payload: isLoggedIn
  }
};

/**
 * @description A function to dispatch an action on user signin error
 *
 * @param {array} error
 *
 * @return {Object} action dispatch by the action creator
 */
export const loginError = (error) => {
  return {
    type: 'LOGIN_ERRORS',
    payload: error
  }
};

/**
 * @description A function to logout a user
 *
 * @param {object} history
 *
 * @return {Object} action dispatch by the action creator
 */
export const logOut = (history) => {
  return dispatch => {
    window.localStorage.removeItem('token');
    dispatch(userLoggedIn(false));
    history.push('/login');
  }
}

/**
 * @description A function to login a user
 *
 * @param {object} userInfo
 * @param history
 *
 * @return {Object} action dispatch by the action creator
 */
export const login = ({ email, password }, history) => {
  return async (dispatch) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      localStorage.setItem('token', await user.getIdToken())

      dispatch(userLoggedIn(true));
      dispatch(userLogin(user));

      history.push('/anywhere');
      } catch (error) {
          dispatch(loginError(error));
      }
  }
}
