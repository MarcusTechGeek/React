import { connect } from "react-redux"; // Importing connect function from react-redux
import Cart from "./Cart"; // Importing Cart component

// Mapping state to props
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost, // Assigning totalCost from state to prop
    productCart: state.productCart // Assigning productCart from state to prop
  }
}

// Mapping dispatch to props
function mapDispatchToProps(dispatch) {
  return {
    // Dispatching action to add product
    onAddProduct: (productName, productPrice) => dispatch({ 
        type: "addProduct", 
        productData: {
            productName: productName, 
            productPrice: productPrice
        }
    }),
    // Dispatching action to delete product
    onDeleteProduct: (productData) => dispatch({ 
        type: "deleteProduct", 
        productData: productData 
    })
  }
}

// Connecting Cart component with Redux store
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent; // Exporting connected component
