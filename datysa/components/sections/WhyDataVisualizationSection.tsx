import styles from './WhyDataVisualizationSection.module.css';
import {
  BarChartHorizontalBig, // Novo: Representa "dados" vs "achismo"
  GaugeCircle,           // Novo: Representa "velocidade" nas decisões
  Zap,                   // Mantido: Perfeito para "automação"
  Target,                // Mantido: Perfeito para "foco"
  Telescope,           // Novo: Representa "previsão do futuro"
  BadgeCheck,            // Novo: Representa "confiável" / "verificado"
} from 'lucide-react';

export default function WhyDataVisualizationSection() {
  const benefits = [
    {
      icon: <BarChartHorizontalBig size={40} className={styles.icon} />, // Trocado
      title: 'Elimine o "Achismo"',
      description: 'Planilhas confusas escondem a verdade. Nossos dashboards revelam a saúde do seu negócio em tempo real, sem filtros.',
      detail: 'KPIs que qualquer um entende. Da diretoria ao operacional.'
    },
    {
      icon: <GaugeCircle size={40} className={styles.icon} />, // Trocado
      title: 'Decisões em Minutos, Não em Semanas',
      description: 'Identifique gargalos, oportunidades de crescimento e riscos *antes* que eles virem problemas. Aja com base em fatos, não em intuição.',
      detail: 'Seu concorrente já está analisando. Você também deveria.'
    },
    {
      icon: <Zap size={40} className={styles.icon} />, // Mantido
      title: 'Pare de Gastar Horas com Relatórios',
      description: 'Sua equipe gasta mais tempo compilando dados do que analisando? Automatizamos 100% dos seus relatórios para que sua equipe foque no que importa: crescer.',
      detail: 'Dados atualizados 24/7. O fim das planilhas V2_final_agora_vai.xlsx.'
    },
    {
      icon: <Target size={40} className={styles.icon} />, // Mantido
      title: 'Métricas que Geram Ação',
      description: 'Informação demais é o mesmo que informação de menos. Criamos dashboards que filtram o ruído e mostram *exatamente* o que você precisa ver.',
      detail: 'Foco absoluto nas KPIs que impactam diretamente seu faturamento.'
    },
    {
      icon: <Telescope size={40} className={styles.icon} />, // Trocado
      title: 'Antecipe o Futuro',
      description: 'Não apenas olhe para o que aconteceu. Use seus próprios dados para prever o que *vai* acontecer. Saia na frente do mercado.',
      detail: 'Usamos IA e Machine Learning para transformar seus dados em uma vantagem competitiva real.'
    },
    {
      icon: <BadgeCheck size={40} className={styles.icon} />, // Trocado
      title: 'Dados Confiáveis = Decisões Confiáveis',
      description: 'Decisões ruins vêm de dados ruins. Garantimos uma "Fonte Única da Verdade" (SSOT), com dados limpos, seguros e governados.',
      detail: 'Seus dados, suas regras, nossa organização. O primeiro passo para a governança.'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Seus dados são um caos? Transforme-os em lucro.</h2>
          <p className={styles.subtitle}>
            Dados desorganizados são custos ocultos e oportunidades perdidas. Dashboards não são relatórios bonitos; 
            são o painel de controle para decisões que geram receita.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
              <p className={styles.cardDetail}>{benefit.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>90%</div>
            <div className={styles.statLabel}>Mais rápido na detecção de tendências</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>75%</div>
            <div className={styles.statLabel}>Melhor performance em decisões estratégicas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>80%</div>
            <div className={styles.statLabel}>Menos tempo gasto com relatórios manuais</div>
          </div>
        </div>
      </div>
    </section>
  );
}