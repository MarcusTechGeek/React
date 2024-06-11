// Importing necessary modules from React and react-bootstrap
import React, { Component } from 'react';
import Rating from './Rating'; // Importing the Rating component
import { Media } from 'react-bootstrap'; // Importing the Media component from react-bootstrap

// Defining a class component called Product
class Product extends Component {

  constructor(props){
    super(props);    
  }

  // Render method to render the component
  render() { 
    return (
      <div>                
        {/* Media component to display product details */}
        <Media>
            {/* Image of the product */}
            <img 
                width={64} 
                height={64} 
                className="mr-3"
                src={this.props.data.imageUrl} 
                alt="Image"
            />
            <Media.Body>
                {/* Product name */}
                <h5>{this.props.data.productName}</h5>
                {/* Release date of the product */}
                { this.props.data.releasedDate }
                {/* Displaying the rating of the product using the Rating component */}
                <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
                {/* Description of the product */}
                <p>{this.props.data.description}</p>
            </Media.Body>
        </Media>                                                                                                                                   
      </div>
    );
  }
}

// Exporting the Product component
export default Product;
