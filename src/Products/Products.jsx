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
    navbar: {
      backgroundColor: '#f2f2f2',
      color: '#222',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%', // Set navbar width to 100%
    },
    navbarTitle: {
      fontSize: '32px',
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    searchInput: {
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      marginRight: '15px',
      outline: 'none',
      boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    navOptions: {
      display: 'flex',
      alignItems: 'center',
    },
    navOption: {
      marginLeft: '30px',
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#222',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    card: {
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '250px',
      margin: '20px',
      backgroundColor: '#f5f5f5',
      transition: 'transform 0.3s',
      textAlign: 'center',
      fontFamily: 'serif',
    },
    cardHover: {
      transform: 'scale(1.02)',
    },
    imageContainer: {
      position: 'relative',
      padding: '15px',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '200px',
      borderRadius: '10px',
    },
    heartIcon: (liked) => ({
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      color: liked ? 'crimson' : '#ddd',
      cursor: 'pointer',
      transition: 'transform 0.3s, color 0.3s',
      transform: liked ? 'scale(1.2)' : 'scale(1)',
    }),
    productName: {
      fontWeight: 'bold',
      fontSize: '20px',
      margin: '15px 0',
      color: '#333',
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#999',
      fontSize: '16px',
      fontStyle: 'italic',
    },
    newPrice: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#b33737',
      margin: '10px 0',
    },
    cartIcon: (inCart) => ({
      margin: '15px 0',
      cursor: 'pointer',
      transition: 'transform 0.3s, color 0.3s',
      transform: inCart ? 'scale(1.2)' : 'scale(1)',
      color: inCart ? 'green' : '#222',
      fontSize: '24px',
    }),
    cartCount: {
      fontSize: '24px',
      margin: '10px 0',
      color: '#222',
    },
    productsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    footer: {
      backgroundColor: '#f2f2f2',
      color: '#888',
      padding: '20px',
      textAlign: 'center',
    },
  };
  
  const products = [
    {
      name: 'ARTFX DC UNIVERSE Batman Package',
      oldPrice: '$9,999',
      newPrice: '$9,999',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbF-ZZwfEyKM1UqZj9C38Kh4QeVbBWgVGEw&usqp=CAU',
    },
    {
      name: 'ARTFX DC UNIVERSE Superman Package',
      oldPrice: '$8,999',
      newPrice: '$8,999',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbF-ZZwfEyKM1UqZj9C38Kh4QeVbBWgVGEw&usqp=CAU',
    },
  ];
  
  return (
    <div>
      <div style={styles.navbar}>
        <div style={styles.navbarTitle}>Fish</div>
        <div style={styles.navOptions}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <div style={styles.navOption}>Home</div>
          <div style={styles.navOption}>Products</div>
          <div style={styles.navOption}>About</div>
          <div style={styles.navOption}>Contact</div>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.cartCount}>Cart: {cart.length} items</div>
        <div style={styles.productsContainer}>
          {products.map((product, index) => (
            <div key={index} style={styles.card} onMouseOver={() => console.log('Hovering', product.name)} onMouseLeave={() => console.log('Leaving', product.name)}>
              <div style={styles.imageContainer}>
                <img style={styles.image} src={product.imageUrl} alt={product.name} />
                <span onClick={() => toggleLike(index)} style={styles.heartIcon(liked[index])}>
                  ♥
                </span>
              </div>
              <div style={styles.productName}>{product.name}</div>
              <div style={styles.oldPrice}>{product.oldPrice}</div>
              <div style={styles.newPrice}>{product.newPrice}</div>
              <div style={styles.cartIcon(isProductInCart(product))} onClick={() => toggleCart(product)}>
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
      <div style={styles.footer}>Footer</div>
    </div>
  );
};

export default Products;

       
