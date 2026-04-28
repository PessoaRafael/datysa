import styles from './HowItWorksSection.module.css';
import { FileSpreadsheet, BarChart3, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <FileSpreadsheet size={32} className={styles.stepIcon} />,
    title: 'Você manda seus dados',
    description:
      'Excel, Google Sheets, banco de dados MySQL, PostgreSQL… pode mandar como vier. A gente leva a sério até aquela planilha com aba oculta.',
  },
  {
    number: '02',
    icon: <BarChart3 size={32} className={styles.stepIcon} />,
    title: 'A gente constrói no Power BI',
    description:
      'Montamos o dashboard com os números que importam pro seu negócio. Vendas, operações, financeiro, veterinário. Cada setor tem o seu painel.',

  },
  {
    number: '03',
    icon: <Rocket size={32} className={styles.stepIcon} />,
    title: 'Você usa e entende tudo',
    description:
      'Não precisa ser da TI. O painel é feito pra ser lido por qualquer pessoa do time, com filtros, gráficos e números que atualizam sozinhos.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Como funciona</span>
          <h2 className={styles.title}>3 passos. Sem enrolação.</h2>
          <p className={styles.subtitle}>
            Você não precisa entender de dados pra ter um bom dashboard.
            Esse é exatamente o nosso trabalho.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              {step.icon}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://wa.me/+5584994604608"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Quero meu dashboard
          </a>
        </div>
      </div>
    </section>
  );
}
