import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {

    constructor(props) {
        super(props);
        // Initialize state with the rating passed as props
        this.state = { rating: this.props.rating };
    }

    // Function to handle click on star icons
    handleClick(ratingValue) {    
        // Update state with the new rating value
        this.setState({ rating: ratingValue });
    } 

    render() {
        return (
            <div>
                {/* Display the current rating */}
                <h1>Rating: {this.state.rating}</h1>
                {/* Render star icons based on rating value */}
                {/* If the rating is greater than or equal to 1, render a filled star icon; otherwise, render an outline star icon */}
                {this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
                )}
                {/* Render other star icons similarly */}
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

export default Rating;
