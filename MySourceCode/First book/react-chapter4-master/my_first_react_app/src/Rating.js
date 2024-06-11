// Importing necessary modules from React and react-icons
import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

// Defining a class component called Rating
class Rating extends Component {

    constructor(props) {
        super(props);
        // Initializing state with the rating received from props
        this.state = { rating: this.props.rating };
    }

    // Function to handle click event on stars
    handleClick(ratingValue) {
        // Update the rating in the state with the clicked value
        this.setState({ rating: ratingValue });
    }

    // Render method to render the component
    render() {
        return (
            <div style={styles.starStyle}>
                {/* Displaying the current rating */}
                <h1>Rating: {this.state.rating}</h1>
                {/* Rendering stars based on the current rating */}
                {this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
                )}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 2)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 4)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
                )}
            </div>
        );
    }
}

// Exporting the Rating component
export default Rating;

// Styling for the stars
const styles = {
    starStyle: {
        color: 'blue'
    }
}
