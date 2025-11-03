
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Bolhas decorativas */}
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Transforme seus dados em <span>insights acionáveis</span>
            </h1>
            <p className={styles.subtitle}>
              Datysa oferece soluções de dados personalizadas para impulsionar o crescimento do seu negócio.
            </p>
            <div className={styles.buttons}>
              <a href="#contact" className={styles.primaryButton}>
                Converse com nossos especialistas
              </a>
              <a href="#cases" className={styles.secondaryButton}>
                Ver cases de sucesso
              </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.dashboardPlaceholder}>
              {/* Dashboard ilustração */}
              <svg viewBox="0 0 420 240" className={styles.dashboardIcon}>
                <defs>
                  <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3FA9F5" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#0D3B66" stopOpacity="0.95"/>
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2AC769" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#1e9f5a" stopOpacity="0.95"/>
                  </linearGradient>
                </defs>
                
                {/* Título */}
                <rect x="20" y="20" width="380" height="40" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <text x="35" y="45" fontSize="14" fontWeight="600" fill="#ffffff" letterSpacing="0.5">Dashboard de Vendas</text>
                <circle cx="340" cy="40" r="3" fill="#2AC769" className={styles.liveIndicator}/>
                <text x="350" y="43" fontSize="11" fill="rgba(255,255,255,0.7)">Ao vivo</text>
                
                {/* Cards de Métricas */}
                <rect x="30" y="75" width="105" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="82.5" y="96" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Receita</text>
                <text x="82.5" y="118" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">R$ 24,5K</text>
                
                <rect x="155" y="75" width="105" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="207.5" y="96" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Crescimento</text>
                <text x="207.5" y="118" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">+12,5%</text>
                
                <rect x="280" y="75" width="105" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="332.5" y="96" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Pedidos</text>
                <text x="332.5" y="118" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">1.847</text>
                
                {/* Área do Gráfico */}
                <rect x="30" y="165" width="380" height="50" rx="4" fill="rgba(255,255,255,0.04)"/>
                
                {/* Grid lines */}
                <line x1="40" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="40" y1="175" x2="400" y2="175" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="40" y1="215" x2="400" y2="215" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                
                {/* Barras do Gráfico */}
                <rect x="55" y="165" width="28" height="35" rx="2" fill="url(#barGradient1)"/>
                <rect x="100" y="155" width="28" height="45" rx="2" fill="url(#barGradient1)"/>
                <rect x="145" y="160" width="28" height="40" rx="2" fill="url(#barGradient1)"/>
                <rect x="190" y="145" width="28" height="55" rx="2" fill="url(#barGradient2)"/>
                <rect x="235" y="180" width="28" height="30" rx="2" fill="url(#barGradient1)"/>
                <rect x="280" y="162" width="28" height="48" rx="2" fill="url(#barGradient1)"/>
                <rect x="325" y="168" width="28" height="42" rx="2" fill="url(#barGradient1)"/>
                
                {/* Linha de Tendência */}
                <polyline points="69,200 114,192 159,197 204,178 249,205 294,190 339,194" 
                          fill="none" 
                          stroke="#2AC769" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                
                {/* Pontos de Dados - Centro das barras */}
                <circle cx="69" cy="200" r="4" fill="#ffffff"/>
                <circle cx="114" cy="192" r="4" fill="#ffffff"/>
                <circle cx="159" cy="197" r="4" fill="#ffffff"/>
                <circle cx="204" cy="178" r="5" fill="#2AC769"/>
                <circle cx="249" cy="205" r="4" fill="#ffffff"/>
                <circle cx="294" cy="190" r="4" fill="#ffffff"/>
                <circle cx="339" cy="194" r="4" fill="#ffffff"/>
                
                {/* Rótulos dos Dias - Centralizados nas barras */}
                <text x="69" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Seg</text>
                <text x="114" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Ter</text>
                <text x="159" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Qua</text>
                <text x="204" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Qui</text>
                <text x="249" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Sex</text>
                <text x="294" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Sáb</text>
                <text x="339" y="228" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">Dom</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}