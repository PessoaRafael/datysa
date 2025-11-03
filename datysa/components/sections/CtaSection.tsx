import Link from 'next/link';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      {/* Bolhas decorativas */}
      <div className={`${styles.ctaBubble} ${styles.bubble1}`}></div>
      <div className={`${styles.ctaBubble} ${styles.bubble2}`}></div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>Pronto para transformar seus dados?</h2>
        <p className={styles.subtitle}>
          Agende uma consulta gratuita para discutir suas necessidades de dados.
        </p>
        <Link href="/contact" className={styles.button}>
          Entre em contato conosco
        </Link>
      </div>
    </section>
  );
}