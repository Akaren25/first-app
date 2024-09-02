"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/app/gallery/gallery.module.css';

export default function DogGallery() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    // Usando a Dog API para buscar imagens de cachorros
    axios.get('https://api.thedogapi.com/v1/images/search?limit=12')  // Busca 12 imagens aleatórias
      .then(response => {
        setDogImages(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar imagens dos cachorros:", error);
      });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1>Galeria de Imagens de Cachorros</h1>
      
      <div className={styles.photoGrid}>
        {dogImages.length > 0 ? (
          dogImages.map((dog, index) => (
            <div key={index} className={styles.photoItem}>
              <img 
                src={dog.url} 
                alt={`Cachorro ${index + 1}`} 
                className={styles.photo}
                loading="lazy" // Adiciona carregamento lento para melhorar a performance
              />
            </div>
          ))
        ) : (
          <p>Nenhuma imagem disponível no momento.</p>
        )}
      </div>
    </div>
  );
}


