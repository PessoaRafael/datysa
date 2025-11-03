

import { 
  BarChart3, 
  LineChart, 
  Brain, 
  Presentation, 
  Database, 
  TrendingUp 
} from 'lucide-react';
import styles from './page.module.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <BarChart3 size={48} className={styles.icon} />,
    title: 'Relatórios Personalizados',
    description:
      'Criação de relatórios personalizados e dinâmicos que traduzem seus dados em informações acessíveis e úteis para tomada de decisão.',
    features: [
      'Relatórios executivos e operacionais',
      'Automação de geração de relatórios',
      'Integração com múltiplas fontes de dados',
      'Customização conforme suas necessidades',
    ],
  },
  {
    icon: <LineChart size={48} className={styles.icon} />,
    title: 'Gráficos e Dashboards',
    description:
      'Visualizações interativas e painéis intuitivos para monitorar o desempenho do seu negócio em tempo real.',
    features: [
      'Dashboards interativos em tempo real',
      'Gráficos personalizados e informativos',
      'Alertas automáticos',
      'Acesso de qualquer dispositivo',
    ],
  },
  {
    icon: <Brain size={48} className={styles.icon} />,
    title: 'Modelos Preditivos e Estatísticos',
    description:
      'Modelagem de dados com técnicas estatísticas e machine learning para prever cenários e otimizar resultados.',
    features: [
      'Análise estatística avançada',
      'Machine Learning aplicado',
      'Previsões de demanda e tendências',
      'Otimização de processos',
    ],
  },
  {
    icon: <Presentation size={48} className={styles.icon} />,
    title: 'Apresentações com Insights',
    description:
      'Transformamos dados em narrativas visuais que facilitam a comunicação de resultados e estratégias.',
    features: [
      'Storytelling com dados',
      'Infográficos impactantes',
      'Apresentações executivas',
      'Visualizações para reuniões',
    ],
  },
  {
    icon: <Database size={48} className={styles.icon} />,
    title: 'Integração de Dados',
    description:
      'Conectamos e organizamos dados de diferentes fontes para criar uma visão unificada do seu negócio.',
    features: [
      'Conectores para múltiplas plataformas',
      'ETL e transformação de dados',
      'Data warehouse personalizado',
      'Governança de dados',
    ],
  },
  {
    icon: <TrendingUp size={48} className={styles.icon} />,
    title: 'Análise de Performance',
    description:
      'Avaliação completa do desempenho do seu negócio com métricas-chave e indicadores personalizados.',
    features: [
      'KPIs personalizados',
      'Benchmarking e comparações',
      'Análise de tendências',
      'Recomendações estratégicas',
    ],
  },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Nossos Serviços</h1>
            <p className={styles.heroSubtitle}>
              Oferecemos soluções completas em análise de dados para impulsionar o crescimento do seu negócio — da coleta de dados à apresentação de insights acionáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Pronto para transformar seus dados?
            </h2>
            <p className={styles.ctaSubtitle}>
              Entre em contato conosco e descubra como podemos ajudar seu negócio a tomar decisões baseadas em dados.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>
                Falar com Especialista
              </a>
              <a
                href="https://calendly.com/datysa/30min"
                className={styles.secondaryButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Reunião
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
