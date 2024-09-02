import styles from '@/app/about/about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>
            <p className={styles.description}>
                Somos uma equipe dedicada a compartilhar informações e recursos sobre doguinhos. Nosso objetivo é promover o bem-estar do animal e fornecer um espaço para os amantes de cachorro encontrarem tudo o que precisam sobre seus amigos peludos.
            </p>
            <img
                src="https://place.dog/800/400"
                alt="Cachorro adorável"
                className={styles.image}
            />
            <h2 className={styles.contactTitle}>Informações de Contato</h2>
            <p className={styles.contactInfo}>
                <strong>Email:</strong> dogscontato@email.com<br />
                <strong>Endereço:</strong> Rua das Pedras 14
            </p>
        </div>
    );
}
