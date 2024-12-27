import React, { useEffect, useState } from 'react';

const ProductList = () => {
  // State to hold the fetched data and loading state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch the products
    const fetchProducts = async () => {
      try {
        // Make the API request to Fake Store API
        const response = await fetch('https://fakestoreapi.com/products');
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Update the state with the fetched products
        setProducts(data);
      } catch (err) {
        // Handle errors and update the state
        setError(err.message);
      } finally {
        // Set loading to false once the data is fetched
        setLoading(false);
      }
    };

    // Call the function to fetch products
    fetchProducts();
  }, []); // Empty dependency array means this will run once on component mount

  // Render loading, error, or product list
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
