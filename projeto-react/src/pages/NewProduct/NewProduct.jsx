import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './NewProduct.module.css';

// !!! COLOQUE A MESMA URL DO MOCKAPI AQUI !!!
const API_URL = 'https://690ca365a6d92d83e84ea2c3.mockapi.io';

const NewProduct = () => {
  const navigate = useNavigate();

  const [nome_produto, setNomeProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome_produto || !preco || !imagem) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      const newProduct = {
        nome_produto: nome_produto,
        preco: parseFloat(preco),
        imagem: imagem,
      };

      await axios.post(API_URL, newProduct);

      alert('Produto cadastrado com sucesso!');
      navigate('/');

    } catch (err) {
      setError('Ocorreu um erro ao cadastrar o produto.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        <div className={styles.formControl}>
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            value={nome_produto}
            onChange={(e) => setNomeProduto(e.target.value)}
            placeholder="Ex: Camiseta Básica Preta"
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="preco">Preço (R$):</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Ex: 79.90"
            step="0.01"
            min="0"
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="imagem">URL da Imagem:</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="Ex: https://.../imagem.jpg"
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Adicionar Produto'}
        </button>
      </form>
    </div>
  );
};

export default NewProduct;