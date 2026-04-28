import styles from "./SolutionsSection.module.css";
import { BarChart3, Database, FileSpreadsheet, Presentation, RefreshCw, Layers } from "lucide-react";

const solutions = [
  {
    icon: <BarChart3 size={36} className={styles.icon} />,
    title: "Dashboards no Power BI",
    description:
      "Dashboards interativos com KPIs e filtros. Os dados atualizam sozinhos, sem precisar refazer nada na mão.",
    tag: "Principal",
  },
  {
    icon: <FileSpreadsheet size={36} className={styles.icon} />,
    title: "De Planilha para Dashboard",
    description:
      "Você tem uma planilha no Excel ou Google Sheets? A gente transforma em um dashboard que qualquer pessoa da sua equipe consegue ler.",
    tag: null,
  },
  {
    icon: <Database size={36} className={styles.icon} />,
    title: "Integração com Banco de Dados",
    description:
      "Conectamos seu banco de dados (MySQL, PostgreSQL, SQL Server, etc.) diretamente ao Power BI para relatórios em tempo real.",
    tag: null,
  },
  {
    icon: <RefreshCw size={36} className={styles.icon} />,
    title: "Atualização Automática",
    description:
      "Você define de quanto em quanto tempo os dados atualizam. Daí pra frente é automático, sem precisar abrir planilha nenhuma.",
    tag: null,
  },
  {
    icon: <Layers size={36} className={styles.icon} />,
    title: "Relatórios Executivos",
    description:
      "Relatórios visuais pra mostrar resultado pra sócios e clientes. Bonito, direto e fácil de ler.",
    tag: null,
  },
  {
    icon: <Presentation size={36} className={styles.icon} />,
    title: "Treinamento e Suporte",
    description:
      "A gente passa o dashboard, explica cada parte e fica disponível pra dúvidas. Ninguém vai precisar chamar alguém pra abrir um gráfico.",
    tag: null,
  },
];

export default function SolutionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>O que a gente faz</h2>
        <p className={styles.subtitle}>
          De planilha bagunçada a banco de dados complexo. Dashboards que qualquer pessoa do time consegue usar.
        </p>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={`${styles.solutionCard} ${solution.tag ? styles.featured : ''}`}>
              {solution.tag && <span className={styles.tag}>{solution.tag}</span>}
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
