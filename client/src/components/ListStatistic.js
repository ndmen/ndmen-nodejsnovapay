import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);


  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/orders");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Address</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.order_id}>
              <td>{todo.order_id}</td>
              <td>{todo.created_at}</td>
              <td>{todo.first_name} {todo.last_name}</td>
              <td>{todo.phone}</td>
              <td>{todo.order_status}</td>
              <td>{todo.order_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};


export default ListStatistic;