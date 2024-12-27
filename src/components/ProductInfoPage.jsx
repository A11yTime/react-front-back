import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductInfoPage.css';  // Import the CSS file

const ProductInfoPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-run when the `id` changes

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-info-page">
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>

        <div className="category">
          <span><strong>Category:</strong></span>
          <span>{product.category}</span>
        </div>

        <div className="rating">
          <span><strong>Rating:</strong></span>
          <span>{product.rating?.rate} ({product.rating?.count} reviews)</span>
        </div>

        <div className="stock">
          <span><strong>Stock:</strong></span>
          <span>{product.stock}</span>
        </div>

        <div className="manufacturer">
          <span><strong>Manufacturer:</strong></span>
          <span>{product.manufacturer || 'Unknown'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
