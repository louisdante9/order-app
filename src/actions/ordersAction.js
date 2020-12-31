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
 * @description A function to dispatch an action set an order
 *
 * @param {object} order object
 *
 * @return {Object} action dispatch by the action creator
 */
export const setOrder = (order) => {
  return {
    type: 'ADD_ORDER',
    payload: order
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

/**
 * @description A function to get order from the api
 *
 * @return {Object} action dispatch by the action creator
 */
export const getOrder = (orderId) => {
  return async (dispatch) => {
    const baseApiUrl = process.env.REACT_APP_BASE_API_ROUTE;
    try {
      const { data } = await axios.get(`${baseApiUrl}/orders/${orderId}`, getAuthHeader())

      return dispatch(setOrder(data));
    } catch (error) {
      return dispatch(ordersError(error));
    }
  }
}

/**
 * @description A function to update an order
 *
 * @return {Object} action dispatch by the action creator
 */
export const updateOrder = (order) => {
  return async (dispatch) => {
    const baseApiUrl = process.env.REACT_APP_BASE_API_ROUTE;
    try {
      const { data } = await axios.put(`${baseApiUrl}/orders/${order.uid}`, order, getAuthHeader())

      return dispatch(setOrder(data));
    } catch (error) {
      return dispatch(ordersError(error));
    }
  }
}
