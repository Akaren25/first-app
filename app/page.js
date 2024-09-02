import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Seja bem-vindo</h1>
      <img 
        src="https://i.pinimg.com/736x/b0/f3/ce/b0f3ce5ad5f82cafa7a2e05041ae3189.jpg" // Substitua pelo caminho da sua imagem
        alt="Imagem de boas-vindas" 
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <p className={styles.subtitle}>Explore nosso conteúdo e conheça mais sobre o que oferecemos!</p>
    </div>
  );
}
