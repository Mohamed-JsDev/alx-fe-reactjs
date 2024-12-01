import TodoList from "./TodoList";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Adjust the path if necessary
const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
