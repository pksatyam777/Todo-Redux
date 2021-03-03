import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
  <div>
    <marquee>
      Note: To indicate task is completed just click on the task
    </marquee>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
);

export default App;
