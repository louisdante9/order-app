import React, { useEffect }  from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import moment from 'moment';
import { getOrder } from '../../actions/ordersAction'
import './orderDetails.css'
import OrderModal from "./OrderModal";
import Header from "../header/Header";

const OrderDetailsPage = (props) => {
  const order = useSelector(({ ordersReducer }) => ordersReducer.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = props.history.location;
    dispatch(getOrder(pathname.split('/').pop()));
  }, []);

  return (
    <div>
      <Header { ...props } />
      <div className="container">
        <div className="container emp-order">
          <form method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="order-head">
                  <h5>
                    {order.title}
                  </h5>
                  <p className="proile-rating">BOOKING DATE : <span>{ moment.unix(order.bookingDate / 1000).format('YYYY/MM/DD') }</span></p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist"/>
                </div>
              </div>
              <div className="col-md-2 btn" data-toggle="modal" data-target="#editModal">
                <p className="order-edit-btn">Edit order</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="order-work">
                  <p>CUSTOMER:</p>
                  <span><b>NAME:</b> {order.customer?.name}</span><br/>
                  <span><b>EMAIL:</b> {order.customer?.email}</span><br/>
                  <span><b>PHONE:</b> {order.customer?.phone}</span>
                  <p>ADDRESS</p>
                  <span><b>STREET:</b> {order.address?.street}</span><br/>
                  <span><b>CITY:</b> {order.address?.city}</span><br/>
                  <span><b>COUNTRY:</b> {order.address?.country}</span>
                </div>
              </div>
            </div>
          </form>
          <OrderModal order={order} />
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsPage;
