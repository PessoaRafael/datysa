import styles from './IndustriesSection.module.css';
import { ShoppingCart, Briefcase, Car, Heart, Utensils, Building2, TrendingUp, PieChart } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: <Briefcase size={36} className={styles.icon} />,
      title: 'Vendas & Marketing',
      description: 'Analise funil de vendas, performance de campanhas, ROI por canal e otimize seu mix de produtos com dados em tempo real.',
      metrics: ['ROI de marketing aumentado em 340%', 'Redução de custo de aquisição em 42%', 'Aumento de receita recorrente']
    },
    {
      icon: <Car size={36} className={styles.icon} />,
      title: 'Logística & Transporte',
      description: 'Monitore rotas, otimize frotas, acompanhe entregas e reduza custos operacionais com análises preditivas.',
      metrics: ['Redução de custo logístico em 28%', 'Otimização de rotas em tempo real', 'Melhoria na satisfação do cliente']
    },
    {
      icon: <Heart size={36} className={styles.icon} />,
      title: 'Saúde & Bem-estar',
      description: 'Analise indicadores de saúde, desempenho de clínicas, agendamentos e otimize operações com dashboards dedicados.',
      metrics: ['Redução de absenteísmo em 15%', 'Aumento de eficiência operacional', 'Melhoria na experiência do paciente']
    },
    {
      icon: <Utensils size={36} className={styles.icon} />,
      title: 'Food & Beverage',
      description: 'Controle estoque perecível, monitore demandas sazonais, otimize cardápio e maximize margem com análises precisas.',
      metrics: ['Redução de desperdício em 32%', 'Aumento de ticket médio em 18%', 'Melhoria na rotação de estoque']
    },
    {
      icon: <TrendingUp size={36} className={styles.icon} />,
      title: 'Serviços Financeiros',
      description: 'Analise fluxo de caixa, performance de investimentos, KPIs financeiros e tome decisões estratégicas baseadas em dados.',
      metrics: ['Melhoria na gestão de risco', 'Aumento de rentabilidade em 25%', 'Otimização de custos operacionais']
    },
    {
      icon: <PieChart size={36} className={styles.icon} />,
      title: 'Educação',
      description: 'Monitore performance de alunos, taxas de conclusão, eficácia de cursos e otimize estratégias educacionais.',
      metrics: ['Melhoria na retenção de alunos', 'Aumento de satisfação em 35%', 'Otimização de recursos educacionais']
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Para Todas as Áreas</h2>
          <p className={styles.subtitle}>
            Nossas soluções se adaptam a qualquer setor. Transforme dados em vantagem competitiva para seu negócio.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {industry.icon}
              </div>
              <h3 className={styles.cardTitle}>{industry.title}</h3>
              <p className={styles.cardDescription}>{industry.description}</p>
              <div className={styles.metricsContainer}>
                {industry.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metric}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



