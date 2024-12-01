// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders correctly with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i, { selector: "button" });
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
