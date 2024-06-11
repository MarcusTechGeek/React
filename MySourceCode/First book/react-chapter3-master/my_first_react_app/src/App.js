import './App.css'; // Importing CSS styles
import React, { Component } from 'react'; // Importing React and Component from react library
import Products from './Products'; // Importing Products component
import Rating from './Rating'; // Importing Rating component
import { Button } from 'react-bootstrap'; // Importing Button component from react-bootstrap

class App extends Component {
  render() {
    const isValid = true; // Declaring a variable isValid as true

    return (
      <div>
        <h1>My First React App</h1> {/* Heading */}
        <Products /> {/* Rendering Products component */}
        {/* Rendering Rating component with different ratings */}
        <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>
        {/* Rendering Button component with variant outline-success, and disabled based on isValid */}
        <Button variant="outline-success" disabled={!isValid}>
          Default
        </Button>
      </div>
    );
  }
}

export default App; // Exporting App component
