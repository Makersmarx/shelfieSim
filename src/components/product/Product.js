import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { removeProduct, product } = props;

  return (
    <div>
      <Link to={`/edit/${product.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => removeProduct(product.id)}>Delete</button>
    </div>
  );
}

export default Product;
