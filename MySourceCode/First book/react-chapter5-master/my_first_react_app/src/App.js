import React, { Component } from 'react'; // Importing React and Component from 'react' module
// import Products from './Products'; // Importing Products component from './Products' file
import JumboTronComponent from './JumboTronComponent'; // Importing JumboTronComponent component from './JumboTronComponent' file

class App extends Component { // Defining a class-based component named App
  render() {
    return (
      <div>
        <JumboTronComponent>
          {/* Passing children to JumboTronComponent */}
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>
      </div>
    );
  }
}
export default App; // Exporting App as the default export
