import axios from 'axios';
import { getAuthHeader } from "../helpers/auth";

/**
 * @description A function to dispatch an action set orders
 *
 * @param {object} orders object
 *
 * @return {Object} action dispatch by the action creator
 */
export const setOrders = (orders) => {
  return {
    type: 'ADD_ORDERS',
    payload: orders
  }
};

/**
 * @description A function to dispatch an action on orders error
 *
 * @param {array} error
 *
 * @return {Object} action dispatch by the action creator
 */
export const ordersError = (error) => {
  return {
    type: 'ORDERS_ERRORS',
    payload: error
  }
};

/**
 * @description A function to get orders
 *
 * @param history
 *
 * @return {Object} action dispatch by the action creator
 */
export const getOrders = () => {
  return async (dispatch) => {
    const baseApiUrl = process.env.REACT_APP_BASE_API_ROUTE;
    try {
      const { data } = await axios.get(`${baseApiUrl}/orders`, getAuthHeader())

      return dispatch(setOrders(data.data));
    } catch (error) {
      return dispatch(ordersError(error));
    }
  }
}
