import styles from "./SolutionsSection.module.css";
import { BarChart3, LineChart, Brain, Presentation } from "lucide-react";

const solutions = [
  {
    icon: <BarChart3 size={36} className={styles.icon} />,
    title: "Relatórios",
    description:
      "Criação de relatórios personalizados e dinâmicos que traduzem seus dados em informações acessíveis e úteis para tomada de decisão.",
  },
  {
    icon: <LineChart size={36} className={styles.icon} />,
    title: "Gráficos e Dashboards",
    description:
      "Visualizações interativas e painéis intuitivos para monitorar o desempenho do seu negócio em tempo real.",
  },
  {
    icon: <Brain size={36} className={styles.icon} />,
    title: "Modelos Preditivos e Estatísticos",
    description:
      "Modelagem de dados com técnicas estatísticas e machine learning para prever cenários e otimizar resultados.",
  },
  {
    icon: <Presentation size={36} className={styles.icon} />,
    title: "Apresentações com Insights",
    description:
      "Transformamos dados em narrativas visuais que facilitam a comunicação de resultados e estratégias.",
  },
];

export default function SolutionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossas Soluções</h2>
        <p className={styles.subtitle}>
          Da coleta à apresentação, oferecemos soluções completas para transformar dados em decisões inteligentes.
        </p>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.iconWrapper}>{solution.icon}</div>
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionDescription}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
