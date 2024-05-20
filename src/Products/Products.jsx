import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Products = () => {
  const [liked, setLiked] = useState([false, false]);
  const [cart, setCart] = useState([]);

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const toggleCart = (product) => {
    const isInCart = isProductInCart(product);
    if (isInCart) {
      setCart(cart.filter((item) => item.name !== product.name));
    } else {
      setCart([...cart, product]);
    }
  };

  const isProductInCart = (product) => {
    return cart.some((item) => item.name === product.name);
  };

  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '200px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    imageContainer: {
      position: 'relative',
      backgroundColor: '#d32f2f',
      padding: '10px'
    },
    image: {
      maxWidth: '100%',
      maxHeight: '150px'
    },
    heartIcon: (liked) => ({
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      color: liked ? 'red' : '#fff',
      cursor: 'pointer',
      transition: 'transform 0.3s, color 0.3s',
      transform: liked ? 'scale(1.2)' : 'scale(1)'
    }),
    productName: {
      fontWeight: 'bold',
      margin: '10px 0'
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#888',
      fontSize: '14px'
    },
    newPrice: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#d32f2f',
      margin: '5px 0'
    },
    cartIcon: (inCart) => ({
      margin: '10px 0',
      cursor: 'pointer',
      transition: 'transform 0.3s, color 0.3s',
      transform: inCart ? 'scale(1.2)' : 'scale(1)',
      color: inCart ? 'green' : '#000',
      fontSize: '24px'
    }),
    cartCount: {
      fontSize: '24px',
      margin: '10px 0',
      color: '#000'
    },
    productsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  };

  const products = [
    {
      name: 'ARTFX DC UNIVERSE Batman Package',
      oldPrice: '$9,999',
      newPrice: '$9,999',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbF-ZZwfEyKM1UqZj9C38Kh4QeVbBWgVGEw&usqp=CAU'
    },
    {
      name: 'ARTFX DC UNIVERSE Superman Package',
      oldPrice: '$8,999',
      newPrice: '$8,999',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbF-ZZwfEyKM1UqZj9C38Kh4QeVbBWgVGEw&usqp=CAU'
    }
  ];

  return (
    <div>
      <div style={styles.cartCount}>Cart: {cart.length} items</div>
      <div style={styles.productsContainer}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                style={styles.image}
                src={product.imageUrl}
                alt={product.name}
              />
              <span
                onClick={() => toggleLike(index)}
                style={styles.heartIcon(liked[index])}
              >
                ♥
              </span>
            </div>
            <div style={styles.productName}>{product.name}</div>
            <div style={styles.oldPrice}>{product.oldPrice}</div>
            <div style={styles.newPrice}>{product.newPrice}</div>
            <div
              style={styles.cartIcon(isProductInCart(product))}
              onClick={() => toggleCart(product)}
            >
              {isProductInCart(product) ? (
                <div>
                  <p>Carted</p>
                  <i className="fas fa-check-circle"></i>
                </div>
               
                
              ) : (
                <div>
                  <p>Add to cart</p>
                    <i className="fas fa-plus-circle"></i>
                </div>
              
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
