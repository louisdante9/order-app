import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/ordersAction'
import './orders.css'

const OrderList = (props) => {
  const dispatch = useDispatch();
  const { orders } = useSelector(({ ordersReducer }) => ordersReducer );
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect( () => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th><span className="custom-checkbox">#</span></th>
          <th>Title</th>
          <th>Booking Date</th>
          <th>Address</th>
          <th>Customer</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        { orders.length > 0 && orders.slice((currentPage - 1) * perPage, perPage * (currentPage))
          .map((order, index) => (<tr key={index}>
          <td>{ (index + 1) + ((currentPage - 1) * perPage)}</td>
          <td>{ order.title }</td>
          <td>{ order.bookingDate }</td>
          <td>{ order.customer.name }</td>
          <td>{ order.address.street }</td>
          <td>
            <a href="http://localhost:3000" className="edit" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="http://localhost:3000" className="delete" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
          </td>
        </tr>))}
        </tbody>
      </table>
      <div className="clearfix">
        <div className="hint-text">Showing <b>{ perPage > orders.length ? orders.length : perPage }</b> out of <b>{orders.length}</b> entries</div>
        <ul className="pagination">
          <li className="page-item">
            <a href="http://localhost:3000" className="page-link" onClick={ (e) => {
            e.preventDefault();
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
          } }>Previous</a></li>
          {/* eslint-disable-next-line no-array-constructor */}
          { Array(Math.max(Math.ceil(orders.length / perPage), 1)).fill(0)
            .map((number, index) => (<li className={`page-item ${(index + 1) === currentPage ? "active" : ""}` } key={index}>
              <a href="http://localhost:3000" className="page-link" onClick={ (e) => {
              e.preventDefault();
              setCurrentPage(index + 1);
            }}>{index + 1}</a>
            </li>)) }
          <li className="page-item">
            <a href="http://localhost:3000" className="page-link" onClick={ (e) => {
            e.preventDefault();
            setCurrentPage(currentPage === Math.max(Math.ceil(orders.length / perPage)) ? currentPage : currentPage + 1);
          } }>Next</a></li>
        </ul>
      </div>
    </div>
  )
}

export default OrderList;
