import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [order_status, setOrderStatus] = useState("");
  const [order_address, setOrderAddress] = useState("");


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { first_name, last_name, phone, order_status, order_address };
      const response = await fetch("http://localhost:4000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Novapay Orders</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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
          type="select"
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

        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;