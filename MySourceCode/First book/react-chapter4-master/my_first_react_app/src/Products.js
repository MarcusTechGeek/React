// Importing necessary modules from React
import React, { Component } from 'react';
import Product from './Product'; // Importing the Product component

// Defining a class component called Products
class Products extends Component {

    // Declaration of products array
    products;

    constructor(props){
      super(props);
      // Initialize products array with data fetched from getProducts method
      this.products = this.getProducts();
    }

    // Method to fetch and return the list of products
    getProducts() {
      return [
      { 
          imageUrl: "http://loremflickr.com/150/150?random=1",
          productName: "Product 1",
          releasedDate: "May 31, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 4,
          numOfReviews: 2
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=2",
          productName: "Product 2",
          releasedDate: "October 31, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 2,
          numOfReviews: 12          
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=3",
          productName: "Product 3",
          releasedDate: "July 30, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 5,
          numOfReviews: 2
      }];
    }    
    
    // Render method to render the component
    render() {    
      // Mapping through products array to create Product components
      const listProducts = this.products.map((product) => 
          <Product key={product.productName} data={product} />
      );

      // Rendering the list of Product components
      return (
        <div>
          <ul>{listProducts}</ul>     
        </div>
      );
    }
}

// Exporting the Products component
export default Products;
