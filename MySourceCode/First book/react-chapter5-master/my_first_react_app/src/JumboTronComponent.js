import React, { Component } from 'react'; // Importing React and Component from 'react' module
import { Jumbotron, Button } from 'react-bootstrap'; // Importing Jumbotron and Button components from 'react-bootstrap' module

class JumboTronComponent extends Component { // Defining a class-based component named JumboTronComponent

  constructor(props){
    super(props); // Calling the constructor of the parent class (Component) with props
  }

  render() { 
    return (
      <div>                
        <Jumbotron> {/* Jumbotron component from react-bootstrap */}
            <h1>Hello, world!</h1> {/* Heading inside the Jumbotron */}
            <p>{this.props.children}</p> {/* Displaying child components passed to JumboTronComponent */}
            <p><Button bsStyle="primary">Learn more</Button></p> {/* Button component with primary style */}
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

export default JumboTronComponent; // Exporting JumboTronComponent as the default export
