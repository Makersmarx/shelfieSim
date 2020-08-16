import React, { Component } from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      image_url: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getProduct(id);
  }

  handlePriceChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleImageChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  resetState = () => {
    this.setState({
      name: '',
      price: '',
      image_url: '',
    });
  };

  getProduct = (id) => {
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        console.log(res);
        const { name, price, image_url } = res.data;
        this.setState({
          name: name,
          price: price,
          image_url: image_url,
        });
      })
      .catch((err) => console.log(err));
  };

  creatProduct = () => {
    const { name, price, image_url } = this.state;

    const product = {
      name: name,
      price: price,
      image_url: image_url,
    };
    axios
      .get('/api/product', product)
      .then((res) => {})
      .catch((err) => console.log(err));
    this.resetState();
  };

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.image_url}
            alt="Nothing to see here"
            onError={() => {
              this.setState({
                image_url:
                  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsisterhoodofstyle.com%2Fno-image-placeholder%2F&psig=AOvVaw2qhLzZFoMBuVfNMiTl5_6z&ust=1596976845894000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDgqLXQi-sCFQAAAAAdAAAAABAO',
              });
            }}
          />
          <input
            type="text"
            placeholder="name"
            onChange={(event) => this.handleNameChange(event)}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(event) => this.handlePriceChange(event)}
          />
          <input
            type="text"
            placeholder="image_url"
            onChange={(event) => this.handleImageChange(event)}
          />
          <button onClick={() => this.createProduct()}>Add Inv</button>
          <button onClick={() => this.resetState()}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Form;
