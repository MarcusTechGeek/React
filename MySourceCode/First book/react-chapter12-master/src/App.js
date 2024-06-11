import React, { useState, useEffect } from 'react'; // Importing necessary modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Button, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import useFetch from './useFetch'; // Importing custom hook
import Users from './Users'; // Importing Users component

const App = () => {

  // URLs for API requests
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";

  // State to track which URL is requested
  const [requested, setRequested] = useState(postsUrl);

  // Fetching data using custom hook
  const data = useFetch(requested);

  return (
    <div>
      {/* Rendering Users component */}
      <Users />

      {/* Button to request posts */}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>

      {/* Button to request todos */}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />

      {/* Displaying requested URL */}
      Requested: { requested }

      {/* Displaying fetched data */}
      <ul>
        {data.map(el =>(
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
