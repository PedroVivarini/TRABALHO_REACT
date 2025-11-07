import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ produto }) => {
  
  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className={styles.card}>
      <img 
        src={produto.imagem} 
        alt={produto.nome_produto} 
        className={styles.cardImage} 
      />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{produto.nome_produto}</h3>
        <p className={styles.price}>{formatPrice(produto.preco)}</p>
      </div>
    </div>
  );
};

export default ProductCard;