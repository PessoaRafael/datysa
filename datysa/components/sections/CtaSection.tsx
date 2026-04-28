import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tá deixando dinheiro na planilha?</h2>
        <p className={styles.subtitle}>
          A gente bate um papo de 15 minutos, entende o que você tem e te mostra como ficaria o seu dashboard. Sem compromisso.
        </p>
        <a
          href="https://wa.me/+5584994604608?text=Ol%C3%A1!%20Gostaria%20de%20um%20dashboard%20para%20meu%20neg%C3%B3cio."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}