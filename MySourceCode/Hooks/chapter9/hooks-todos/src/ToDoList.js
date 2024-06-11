import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App'; // Importing TodosContext from App
import { Table, Form, Button } from 'react-bootstrap';
import useAPI from './useAPI'; // Custom hook to fetch data from API
import axios from 'axios'; // HTTP client library
import { v4 as uuidv4 } from 'uuid'; // Library to generate UUIDs

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext); // Accessing state and dispatch function from context
  const [todoText, setTodoText] = useState(""); // State for input field value
  const [editMode, setEditMode] = useState(false); // State to manage edit mode
  const [editTodo, setEditTodo] = useState(null); // State to store todo being edited
  const buttonTitle = editMode ? "Edit" : "Add"; // Dynamic button title based on edit mode

  const endpoint = "http://localhost:3000/todos/"; // API endpoint for todos

  const savedTodos = useAPI(endpoint); // Fetching todos from API using custom hook

  useEffect(() => {
    dispatch({ type: "get", payload: savedTodos }); // Dispatching action to update todos on mount and when savedTodos changes
  }, [savedTodos]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Preventing default form submission behavior
    if (editMode) {
      // Editing existing todo
      await axios.patch(endpoint + editTodo.id, { text: todoText }); // Sending patch request to update todo
      dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } }); // Dispatching action to update todo in state
      setEditMode(false); // Exiting edit mode
      setEditTodo(null); // Clearing edit todo
    } else {
      // Adding new todo
      const newToDo = { id: uuidv4(), text: todoText }; // Creating new todo object with UUID
      await axios.post(endpoint, newToDo); // Sending post request to add new todo
      dispatch({ type: 'add', payload: newToDo }); // Dispatching action to add new todo to state
    }
    setTodoText(""); // Clearing input field after submission
  };

  const handleDelete = async (todoId) => {
    const todoToDelete = state.todos.find((todo) => todo.id === todoId); // Finding todo to delete
    if (todoToDelete) {
      // Deleting todo
      await axios.delete(endpoint + todoId); // Sending delete request to remove todo
      dispatch({ type: 'delete', payload: todoToDelete }); // Dispatching action to delete todo from state
    }
  };

  return (
    <div>
      {/* Form for adding or editing todos */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={(event) => setTodoText(event.target.value)} // Handling input change
            value={todoText} // Setting input value
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle} {/* Rendering dynamic button title */}
        </Button>
      </Form>

      {/* Table to display todos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through todos to render table rows */}
          {state.todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <tr>
                <td>{todo.text}</td>
                {/* Edit button */}
                <td
                  onClick={() => {
                    setTodoText(todo.text); // Setting input value for editing
                    setEditMode(true); // Entering edit mode
                    setEditTodo(todo); // Setting todo being edited
                  }}
                >
                  <Button variant="link">Edit</Button>
                </td>
                {/* Delete button */}
                <td onClick={() => handleDelete(todo.id)}>
                  <Button variant="link">Delete</Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ToDoList;
