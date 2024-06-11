import React, { Component } from 'react'; // Importing React and Component from 'react' module
import Product from './Product'; // Importing Product component from './Product' file

class Products extends Component { // Defining a class-based component named Products

  products; // Declaring a variable to hold product data

  constructor(props) {
    super(props);
    this.products = this.getProducts(); // Initializing products with data from getProducts() method
  }

  // Method to return an array of product data
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
      }
    ];
  }

  render() {
    // Mapping through products array to generate Product components
    const listProducts = this.products.map((product) =>
      <Product key={product.productName} data={product} />
    );

    return (
      <div>
        {/* Rendering list of products if there are any, otherwise displaying a message */}
        {listProducts.length > 0 &&
          <ul>{listProducts}</ul>
        }
        {listProducts.length === 0 &&
          <ul>No Products to display</ul>
        }
      </div>
    );
  }
}

export default Products; // Exporting Products as the default export
