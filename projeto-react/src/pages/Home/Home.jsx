import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';


const API_URL = 'https://690ca365a6d92d83e84ea2c3.mockapi.io/users';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(API_URL);
        setProdutos(response.data.reverse()); 
      } catch (err) {
        setError('Não foi possível carregar os produtos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return <p className={styles.message}>Carregando coleção...</p>;
  }

  if (error) {
    return <p className={styles.messageError}>{error}</p>;
  }

  return (
    <div className={styles.homeContainer}>
      <h1>Nossa Coleção</h1>
      <div className={styles.productGrid}>
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))
        ) : (
          <p className={styles.message}>Nenhum produto cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Home;