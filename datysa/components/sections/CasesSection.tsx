import Image from 'next/image';
import styles from './CasesSection.module.css';

export default function CasesSection() {
  const cases = [
    {
      id: 'ecom',
      title: 'E‑commerce — aumento de conversão',
      subtitle: 'Dashboard de performance de funil e cross‑sell',
      before: 'Taxa de conversão 1.8%',
      after: 'Taxa de conversão 3.2% (+78%)',
      description:
        'Implementamos ETL diário, métricas padronizadas e um dashboard com segmentação por campanha e landing. Resultado: otimização das campanhas com foco em canais de maior ROI.',
      img: '/images/case-ecom.svg',
    },
    {
      id: 'retail',
      title: 'Varejo regional',
      subtitle: 'Inventário e previsão de demanda',
      before: 'Ruptura média 12%',
      after: 'Ruptura média 4% (-67%)',
      description:
        'Modelos simples de agregação por SKU + alertas e dashboard operativo para equipes de loja reduziram rupturas e melhoraram disponibilidade.',
      img: '/images/rupturas.svg',
    },
    {
      id: 'saas',
      title: 'SaaS, Retenção e MRR',
      subtitle: 'Análise de churn e cohort',
      before: 'Churn mensal 6.5%',
      after: 'Churn mensal 4.1% (-37%)',
      description:
        'Pipeline de eventos, métricas de engajamento e dashboard de cohorts permitiram intervenções direcionadas em clientes de alto valor.',
      img: '/images/mrr.svg',
    },
  ];

  return (
    <section id="projetos" className={styles.section} aria-labelledby="cases-title" style={{ scrollMarginTop: '80px' }}>
      <div className={styles.container}>
        <h2 id="cases-title" className={styles.title}>
          Cases de resultados
        </h2>

        <p className={styles.lead}>
          Exemplos reais de entregas onde visualização e governança de dados transformaram decisões e resultado financeiro.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.cardMedia}>
                {/* Substitua pelas imagens reais. Use <img> para SVGs locais para evitar problemas de otimização */}
                {c.img.endsWith('.svg') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.img} alt={c.title} className={styles.image} />
                ) : (
                  <Image src={c.img} alt={c.title} width={520} height={260} className={styles.image} />
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardSubtitle}>{c.subtitle}</p>

                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Antes</span>
                    <span className={styles.metricValue}>{c.before}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Depois</span>
                    <span className={styles.metricValueAfter}>{c.after}</span>
                  </div>
                </div>

                <p className={styles.description}>{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}