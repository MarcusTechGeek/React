import React, { Component } from 'react'; // Importing React and Component from 'react' module
import { Button } from 'react-bootstrap'; // Importing Button component from 'react-bootstrap' module

class GitHubUser extends Component {

  constructor(props){ 
      super(props); // Calling the constructor of the parent class (Component) with props
      this.handleClick = this.handleClick.bind(this); // Binding the handleClick method to the component instance                                      
  }

  // Method to handle button click event
  handleClick(e) {
    this.props.history.push("/github"); // Redirecting to the GitHub page  
  }

  render() { 
    return (
      <div>                
        {/* Displaying user login and id */}
        <h1>User Login: { this.props.match.params.login }</h1>
        <h2>User Id: { this.props.match.params.id }</h2>

        {/* Button to navigate back to GitHub page */}
        <Button variant="primary" onClick={this.handleClick}>
          Go to GitHub Users
        </Button>      
      </div>
    );
  }
}

export default GitHubUser; // Exporting GitHubUser as the default export
