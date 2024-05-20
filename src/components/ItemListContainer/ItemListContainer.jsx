import React from 'react';

const ItemListContainer = ({ title }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <p>¡Bienvenidos a nuestra tienda! Navega por nuestro catálogo para descubrir productos increíbles.</p>

    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center'
  }
};

export default ItemListContainer;
