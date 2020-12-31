import React  from 'react';
import OrderList from "./OrderList";
import './orders.css'
import Header from "../header/Header";

const OrdersPage = (props) => {
  return (
    <div>
      <Header { ...props } />
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-2">
                  <h2>Orders</h2>
                </div>
                <div className="col-sm-4" />
                <div className="col-sm-6">
                  <a href="http://localhost:3000" className="btn btn-success" data-toggle="modal">
                    <span>Add Order</span>
                  </a>
                </div>
              </div>
            </div>
            <OrderList {...props} />
          </div>
        </div>
      </div>
    </div>
)
}

export default OrdersPage;
