import React, { Component } from 'react';
import axios from 'axios';
import Product from '../product/Product';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      inventoryList: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get('/api/inventory').then((response) => {
      this.setState({
        inventoryList: response.data,
      });
    });
  };

  removeProduct = (id) => {
    const { getProducts } = this;

    axios.delete(`/api/product/${id}`).then((response) => {
      getProducts();
    });
  };

  render() {
    const mappedInvList = this.state.inventoryList.map((product, index) => {
      return (
        <Product
          key={product.id}
          product={product}
          removeProduct={this.removeProduct}
        />
      );
    });

    return <div>{mappedInvList}</div>;
  }
}

export default Dashboard;
