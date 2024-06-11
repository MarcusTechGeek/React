import React, { Component } from "react"; // Importing necessary modules

class AddProduct extends Component {

    state = {
        productName: '', // State to hold the product name
        productPrice: 0 // State to hold the product price
    }

    // Handler for product name input change
    productNameChangedHandler = (event) =>{
        this.setState({productName: event.target.value}); // Updating productName state with input value
    }

    // Handler for product price input change
    productPriceChangedHandler = (event) =>{
        this.setState({productPrice: event.target.value}); // Updating productPrice state with input value
    }    

    render() {
        return (
            <div className="container">
                {/* Input field for product name */}
                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={this.productNameChangedHandler}
                    value={this.state.productName} // Binding input value to the state
                />
                {/* Input field for product price */}
                <input
                    type="number"
                    placeholder="Product Price"
                    onChange={this.productPriceChangedHandler}
                    value={this.state.productPrice} // Binding input value to the state
                />                
                {/* Button to add product */}
                <button className="buttons"
                    onClick={() => {
                        this.props.addProduct(this.state.productName,this.state.productPrice); // Calling addProduct function with product name and price as parameters                       
                    }}>Add Product</button>         
            </div>
        );
    }
};

export default AddProduct;
