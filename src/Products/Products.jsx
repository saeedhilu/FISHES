import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Products = () => {
  const [liked, setLiked] = useState([false, false]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const buyButton = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const styles = {
    navbar: {
      backgroundColor: '#f2f2f2',
      color: '#222',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2, 
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
      padding: '100px 20px 20px 20px',
    },
    card: {
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '310px',
      margin: '20px',
      backgroundColor: '#f5f5f5',
      transition: 'transform 0.3s',
      textAlign: 'center',
      fontFamily: 'serif',
      height: '100%',
      padding:'20px',
      overflow: 'hidden',
    },
    imageContainer: {
      position: 'relative',
      padding: '15px',
      height: '200px',
      zIndex: 1, 
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
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
      zIndex: 1, 
    }),
    productName: {
      fontWeight: 'bold',
      fontSize: '20px',
      margin: '15px 0',
      color: '#333',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 3,
      textAlign: 'center',
      color:'Green  '
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2,
    },
  };

  const products = [
    {
      name: 'Albino Full Red Guppy Fish',
      oldPrice: 'Rs.300/-',
      newPrice: 'Rs.200/-',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsLNPdXSCzhtlFpXPbVMU3YLzKPltYNs7JA&usqp=CAU',
    },
    {
      name: 'Fancy Marble Rosetail Halfmoon Betta Fish',
      oldPrice: 'Rs.600/-',
      newPrice: 'Rs.500/-',
      imageUrl:
        'https://www.aquastore.in/image/cache/catalog/aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/2.betta/fancy/Fancy-Marble-Rosetail-Halfmoon-Betta-Fish-600x600.jpg',
    },
    {
      name: 'Zebra Babaulti Fresh Water Shrimp Fish',
      oldPrice: 'Rs.500/-',
      newPrice: 'Rs.700/-',
      imageUrl:
        'https://www.aquastore.in/image/cache/catalog/aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/7.shrimp/Zebra-Babaulti-600x600.jpg',
    },
    {
      name: 'Milky White Crowntail Betta Fish',
      oldPrice: 'Rs.500/-',
      newPrice: 'Rs.300/-',
      imageUrl:
        'https://www.aquastore.in/image/cache/catalog//aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/2.betta/full_white_crowntail-600x600.jpg',
    },
    {
      name: 'Assorted Full Moon Betta Fish (Wholesale) - 5 Nos',
      oldPrice: 'Rs.750/-',
      newPrice: 'Rs.450/-',
      imageUrl:
        'https://www.aquastore.in/image/cache/catalog//aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/2.betta/assorted-betta-600x600.jpg',
    },
    {
      name: 'Deep Red Betta Fish',
      oldPrice: 'Rs.750/-',
      newPrice: 'Rs.450/-',
      imageUrl:
        'https://www.aquastore.in/image/cache/catalog/aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/2.betta/fancy/betta/red/Super-RED-Rose-Tail-betta-fish-600x600.jpg',
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
            <div key={index} style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  style={{ ...styles.image }}
                  src={product.imageUrl}
                  alt={product.name}
                />
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
                    <p>Carted <i className="fas fa-check-circle"></i></p>
                  </div>
                ) : (
                  <div>
                    <p>cart <i className="fas fa-plus-circle"></i></p>
                  </div>
                )}
              </div>
              <div
                style={{
                  background: 'black',
                  width: '50px',
                  height: '30px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 'auto',
                  
                }}
                className='buy-btn'
              >
                <button type='button' onClick={buyButton}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.footer}>Footer</div>

      {isModalOpen && (
        <>
          <div style={styles.overlay} onClick={closeModal}></div>
          <div style={styles.modal}>
            <h2>Purchase Successful</h2>
            <p>Thank you for your purchase!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

