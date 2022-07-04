/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product, addToCartHandler }) {
  const dynamicProduct = () => {
    if (product.category === 'subscription') {
      return null;
    } else {
      return (
        <div className="card">
          <Link href={`/product/${product.slug}`}>
            <a>
              <img
                src={product.image}
                alt={product.name}
                className="rounded shadow"
              />
            </a>
          </Link>

          <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product/${product.slug}`}>
              <a>
                <h2 className="text-lg"> {product.name}</h2>
              </a>
            </Link>
            <p className="mb-2">{product.price}</p>
            <p className="mb-2">{product.description}</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    }
  };
  return <div>{dynamicProduct()}</div>;
}
