import React, { createRef, useEffect, useState } from 'react';
import moment from "moment";
import {useDispatch} from "react-redux";
import { updateOrder } from '../../actions/ordersAction'

const OrderModal = ({ order }) => {
  const [date, setDate] = useState();
  const title = createRef()
  const bookingDate = createRef()
  const dispatch = useDispatch();

  useEffect(() => {
    setDate(moment.unix(order.bookingDate / 1000).format('YYYY-MM-DD'))
  }, [order.bookingDate]);

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      title: title.current.value,
      bookingDate: bookingDate.current.value,
    });

    dispatch(updateOrder({
      uid: order.uid,
      title: title.current.value,
      bookingDate: moment(bookingDate.current.value).format('x')
    }));
  }

  return (
    <div>
      <div className="modal" tabIndex="-1" role="dialog" id="editModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Order</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Order Title</label>
                  <input
                    ref={title}
                    type="text"
                    className="form-control"
                    id="title"
                    defaultValue={ order.title } />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="bookingDate"
                  >Booking Data
                  </label>
                  <input
                    ref={bookingDate}
                    type="date"
                    className="form-control"
                    id="bookingDate"
                    defaultValue={ date } />
                </div><br />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={ (event) => {
                      handleSubmit(event) }
                    }>Save changes</button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal;
