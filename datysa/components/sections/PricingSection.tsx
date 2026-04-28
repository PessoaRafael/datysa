import styles from './PricingSection.module.css';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 349',
    priceNote: 'pagamento único',
    description: 'Ideal pra quem tem uma planilha bagunçada e quer enxergar os dados de forma clara pela primeira vez.',
    features: [
      '1 dashboard no Power BI',
      'Até 2 fontes (planilha ou banco de dados)',
      'Até 6 indicadores/KPIs',
      'Entrega em até 5 dias úteis',
      '1 rodada de ajustes',
      'Suporte via WhatsApp por 7 dias',
    ],
    cta: 'Começar agora',
    ctaHref: 'https://wa.me/+5584994604608?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Starter.',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'R$ 549',
    priceNote: 'pagamento único',
    description: 'Pra quem quer um painel completo com dados atualizando automático — sem precisar mexer em nada.',
    features: [
      '1 dashboard completo no Power BI',
      'Até 4 fontes de dados',
      'Indicadores ilimitados',
      'Atualização automática dos dados',
      'Entrega em até 10 dias úteis',
      '3 rodadas de ajustes',
      'Suporte via WhatsApp por 30 dias',
      'Treinamento de uso com seu time',
    ],
    cta: 'Quero o Pro',
    ctaHref: 'https://wa.me/+5584994604608?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Pro.',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    priceNote: 'projeto sob medida',
    description: 'Múltiplos dashboards, integrações com sistemas e suporte contínuo. A gente senta junto e monta o que fizer sentido.',
    features: [
      'Vários dashboards e relatórios',
      'Integração com ERP, CRM ou API',
      'Relatórios executivos',
      'Manutenção e suporte mensal',
      'Reuniões de acompanhamento',
      'SLA definido em contrato',
    ],
    cta: 'Falar com a gente',
    ctaHref: 'https://wa.me/+5584994604608?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20Enterprise.',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Preços</span>
          <h2 className={styles.title}>Simples e direto</h2>
          <p className={styles.subtitle}>
            Sem taxa de surpresa, sem pacote mínimo de 6 meses.
            Você escolhe o que precisa e a gente entrega.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <span className={styles.popularBadge}>Mais escolhido</span>}

              <p className={styles.planName}>{plan.name}</p>
              <p className={styles.price}>{plan.price}</p>
              <p className={styles.priceNote}>{plan.priceNote}</p>
              <p className={styles.description}>{plan.description}</p>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.check}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${plan.popular ? styles.ctaPrimary : styles.ctaOutline}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Tem um projeto fora do padrão?{' '}
          <a
            href="https://wa.me/+5584994604608"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.noteLink}
          >
            Fale com a gente
          </a>{' '}
          e montamos um orçamento sob medida.
        </p>
      </div>
    </section>
  );
}
