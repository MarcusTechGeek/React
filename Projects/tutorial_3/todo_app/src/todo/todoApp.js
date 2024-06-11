import React from "react";
import TodoList from "./todoList";

class TodoApp extends React.Component {
  constructor() {
    super();
    // Initializing state with inputData for input value and todoItems for storing todo list
    this.state = {
      inputData: "",
      todoItems: []
    }
  }

  // Function to handle change in input value
  changeTodoInput = (event) => {
    this.setState({ inputData: event.target.value })
  }

  // Function to add new todo item
  addTodo = (event) => {
    if (this.state.inputData !== '') {
      // Adding new todo item to todoItems array
      let newTodoItems = [...this.state.todoItems, this.state.inputData];
      // Updating state with new todo list and resetting input value
      this.setState({ todoItems: newTodoItems, inputData: "" })
    }
  }

  // Function to delete a todo item
  deleteTodo = (index) => {
    // Creating a copy of todoItems array
    let todoItems = [...this.state.todoItems];
    // Filtering out the todo item to be deleted based on index
    let newTodoItems = todoItems.filter((value, key) => {
      return index !== key
    })
    // Updating state with new todo list without the deleted item
    this.setState({ todoItems: newTodoItems })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {/* Heading for the todo app */}
            <h3 className="text-center">React Todo App</h3>
            {/* Input field for adding new todo */}
            <div className="input-group">
              <input type="text" placeholder="Enter Something" className="form-control" onChange={this.changeTodoInput} value={this.state.inputData} />
              {/* Button to add new todo */}
              <div className="input-group-append">
                <span className="btn btn-success " onClick={this.addTodo}>Add</span>
              </div>
            </div>
            {/* Rendering TodoList component with todo items and deleteTodo function */}
            <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>

    );
  }
}

export default TodoApp;
