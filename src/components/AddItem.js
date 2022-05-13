import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.props);
    
    var price =  Number(this.state.productPrice);
    this.props.addItem(this.state.productName,price);


  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={this.handleSubmit}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;