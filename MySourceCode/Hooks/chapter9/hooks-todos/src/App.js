import React, { useReducer } from 'react';
import ToDoList from './ToDoList';

// Initial state for todos
const todosInitialState = {
  todos: []
};

// Create a context for todos
export const TodosContext = React.createContext();

// Main component of the application
function App() {
  // UseReducer hook to manage state with a reducer function
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {/* Render the ToDoList component */}
      <ToDoList />
    </TodosContext.Provider>
  );
}

// Reducer function to manage state changes
function todosReducer(state, action) {
  switch (action.type) {
    // Action to get todos from server or any other source
    case 'get':
      return { ...state, todos: action.payload };
    // Action to add a new todo
    case 'add':
      const addedToDos = [...state.todos, action.payload];
      return { ...state, todos: addedToDos };
    // Action to delete a todo
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
      return { ...state, todos: filteredTodoState };
    // Action to edit a todo
    case 'edit':
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos };
    // Default action returns initial state
    default:
      return todosInitialState;
  }
}

export default App;
