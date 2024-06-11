import React, { Component } from 'react'; // Importing React and Component from 'react' module
import axios from 'axios'; // Importing axios for making HTTP requests
import ReactLoading from 'react-loading'; // Importing ReactLoading component from 'react-loading' module
import { Media, Form, Button } from 'react-bootstrap'; // Importing Media, Form, and Button components from 'react-bootstrap' module

class GitHub extends Component { // Defining a class-based component named GitHub    
    
    constructor(){
        super();  
        this.state = {
            data: [], // State variable to hold GitHub user data
            searchTerm:'', // State variable to hold search term entered by the user
            isLoading : false // State variable to indicate whether data is loading or not           
        }; 

        // Binding event handler methods to the component instance
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    componentDidMount(){
        // Code to execute after the component mounts goes here
    }	

    // Method to fetch GitHub user data based on the search term
    getGitHubData(_searchTerm){                
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => {   
                this.setState({
                    isLoading : false, // Setting isLoading state to false when data is loaded
                    data: res.data.items // Updating state with fetched GitHub user data                                  
                })  
                console.log(res.data.items); // Logging fetched data to the console
            });             
    }          

    render() { 
        // Mapping through fetched GitHub user data and rendering Media components for each user
        const listUsers = this.state.data.map(user =>             
            <Media key={user.id}>
                <a href={user.html_url}>    
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: { user.id }</p>
                </Media.Body>
            </Media>                     
        );        

        return (
        <div>
            {/* Form for entering search term */}
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Group controlId="formInlineName">                                    
                    <Form.Control 
                        type="text" 
                        value={this.state.searchTerm} 
                        placeholder="Enter Search Term" 
                        onChange={this.handleChange}
                    />
                </Form.Group>                            
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>                 

            {/* Heading for GitHub user results */}
            <h3>GitHub Users Results</h3>
            {/* Loading spinner when data is being fetched */}
            { this.state.isLoading &&                                             
                <ReactLoading type="spinningBubbles" color="#444" /> 
            }  
            {/* Rendered list of GitHub users */}
            {listUsers}                                                                                            
        </div>
        );
    }
    
    // Event handler method for form submission
    handleSubmit(e) {
        e.preventDefault();    
        this.setState({
            isLoading : true // Setting isLoading state to true when form is submitted          
        })                
        this.getGitHubData(this.state.searchTerm); // Fetching GitHub user data based on the search term        
    }

    // Event handler method for input field change
    handleChange(e) {
        this.setState({ searchTerm: e.target.value }); // Updating searchTerm state with input field value        
    }   
}

export default GitHub; // Exporting GitHub as the default export
