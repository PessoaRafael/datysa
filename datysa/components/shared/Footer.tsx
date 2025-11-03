import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Bolhas decorativas */}
      <div className={`${styles.footerBubble} ${styles.bubble1}`}></div>
      <div className={`${styles.footerBubble} ${styles.bubble2}`}></div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.companyInfo}>
            <h3 className={styles.companyTitle}>Datysa</h3>
            <p className={styles.companyDescription}>
              Transformando dados em insights acionáveis para impulsionar seu negócio.
            </p>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/" className={styles.link}>Início</Link></li>
              <li><Link href="/services" className={styles.link}>Serviços</Link></li>
              <li><Link href="/about" className={styles.link}>Sobre</Link></li>
              <li><Link href="/contact" className={styles.link}>Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <ul className={styles.linksList}>
              <li><Link href="/privacy" className={styles.link}>Política de Privacidade</Link></li>
              <li><Link href="/terms" className={styles.link}>Termos de Serviço</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Datysa. Todos os direitos reservados.
          </p>
          <div className={styles.socialLinks}>
        <Link href="https://github.com/PessoaRafael" className={styles.socialLink} aria-label="GitHub">
  <svg className={styles.socialIcon} viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.62-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.826.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
</Link>
            <Link href="https://www.linkedin.com/in/rafael-pessoa-4210a31b8/" className={styles.socialLink} aria-label="LinkedIn">
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/rpessoab/" className={styles.socialLink} aria-label="Instagram">
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}