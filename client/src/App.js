import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import ListStatistic from "./components/ListStatistic";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
        <ListStatistic />
      </div>
    </Fragment>
  );
}

export default App;