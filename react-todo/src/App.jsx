import TodoList from "./TodoList";
import { render, screen, fireEvent } from "@testing-library/react";
const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
