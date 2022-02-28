import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [first_name, setFirstName] = useState(todo.first_name);
  const [last_name, setLastName] = useState(todo.last_name);
  const [phone, setPhone] = useState(todo.phone);
  const [order_status, setOrderStatus] = useState(todo.order_status);
  const [order_address, setOrderAddress] = useState(todo.order_address);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { first_name, last_name, phone, order_status, order_address };
      const response = await fetch(
        `http://localhost:4000/orders/${todo.order_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.order_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${todo.order_id}`}
        onClick={() => setFirstName(todo.first_name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Order</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setFirstName(todo.first_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last Name"
              />
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone"
              />
              <input
                type="text"
                className="form-control"
                value={order_status}
                onChange={e => setOrderStatus(e.target.value)}
                placeholder="Status"
              />
              <input
                type="text"
                className="form-control"
                value={order_address}
                onChange={e => setOrderAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFirstName(todo.first_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;