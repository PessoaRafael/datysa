import styles from './IndustriesSection.module.css';
import { ShoppingCart, Briefcase, Car, Heart, Utensils, Building2, TrendingUp, PieChart } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: <Briefcase size={36} className={styles.icon} />,
      title: 'Vendas',
      description: 'Funil de vendas, metas por vendedor, ticket médio, conversão por canal. Tudo num lugar só.',
    },
    {
      icon: <Car size={36} className={styles.icon} />,
      title: 'Logística',
      description: 'Rotas, entregas, custo por KM, performance de motoristas. Menos ligação pra saber onde está o caminhão.',
    },
    {
      icon: <Heart size={36} className={styles.icon} />,
      title: 'Saúde',
      description: 'Agendamentos, ocupação de leitos, produtividade por médico. Clínicas e hospitais que precisam de números claros.',
    },
    {
      icon: <Utensils size={36} className={styles.icon} />,
      title: 'Alimentação',
      description: 'Estoque, venda por item, desperdiço, horário de pico. Pra quem trabalha com perecivel e não pode errar.',
    },
    {
      icon: <TrendingUp size={36} className={styles.icon} />,
      title: 'Financeiro',
      description: 'Fluxo de caixa, DRE, margem por produto, contas a pagar e receber. Números que o seu contador vai adorar.',
    },
    {
      icon: <PieChart size={36} className={styles.icon} />,
      title: 'Medicina Veterinária',
      description: 'Consultas, procedimentos, receita por tutor, estoque de medicamentos. Pra clínicas vet que cresceram e precisam de controle.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Funciona pra qualquer setor</h2>
          <p className={styles.subtitle}>
            Se você tem dados, a gente faz um dashboard. Simples assim.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



