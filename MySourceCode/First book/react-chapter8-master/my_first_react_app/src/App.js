import React, { Component } from 'react'; // Importing React and Component from 'react' module
import GitHub from './GitHub'; // Importing GitHub component from './GitHub' file
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Importing BrowserRouter, Route, and Switch components from 'react-router-dom' module
import { Nav, Navbar } from 'react-bootstrap'; // Importing Nav and Navbar components from 'react-bootstrap' module
import GitHubUser from './GitHubUser'; // Importing GitHubUser component from './GitHubUser' file

class App extends Component {
  render() {
    return (
      <div>
        <Header /> {/* Rendering Header component */}
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter> {/* Router component to manage routing */}
        <div>
          {/* Navbar for navigation */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> {/* Navbar brand */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link> {/* Navigation link for Home page */}
                <Nav.Link href="/github">GitHub</Nav.Link> {/* Navigation link for GitHub page */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Switch component to render only the first matching route */}
          <Switch>
            {/* Route for displaying GitHubUser component */}
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            {/* Route for displaying GitHub component */}
            <Route path="/github" component={GitHub} />
            {/* Route for displaying Home component */}
            <Route exact path="/" component={Home} />
            {/* Route for handling all other paths */}
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div> 
  }
}
