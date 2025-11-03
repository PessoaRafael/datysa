

import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.container}>
        <h2 id="about-title" className={styles.title}>
          Sobre a Datysa
        </h2>

        <div className={styles.grid}>
          {/* Cartão de perfil / foto */}
          <aside className={styles.profileCard} aria-label="Perfil do fundador">
            <div className={styles.photoWrap}>
              {/* Substitua /images/5H8A2490.jpg pela sua foto */}
              <Image
                src="/images/5H8A2490.jpg"
                alt="Foto de Rafael Pessoa"
                width={420}
                height={420}
                className={styles.photo}
                priority
              />
            </div>

            <div className={styles.profileMeta}>
              <h3 className={styles.name}>Rafael Pessoa</h3>
              <p className={styles.role}>Fundador & Engenheiro de Visualização de Dados</p>
              <p className={styles.metaSmall}>25 anos — Formado em Análise e Desenvolvimento de Sistemas</p>

              <div className={styles.badges}>
                <span className={styles.badge}>Dashboards</span>
                <span className={styles.badge}>BI & ETL</span>
                <span className={styles.badge}>React / D3</span>
              </div>
            </div>
          </aside>

          {/* Conteúdo descritivo */}
          <div className={styles.content}>
            <p className={styles.paragraph}>
              A Datysa nasceu para transformar dados em decisões. Eu sou Rafael Pessoa — tenho 25 anos e sou formado
              em Análise e Desenvolvimento de Sistemas. Criei a Datysa para levar clareza e contexto ao dia a dia
              das empresas por meio de visualizações que realmente ajudam na tomada de decisão.
            </p>

            <p className={styles.paragraph}>
              Acreditamos que a diferença entre relatórios que confundem e dashboards que impulsionam ações está na
              organização e qualidade dos dados. Dados bem estruturados permitem:
            </p>

            <ul className={styles.list}>
              <li>Medir com precisão indicadores estratégicos (KPIs) e operacionais;</li>
              <li>Detectar tendências e anomalias mais cedo, reduzindo riscos;</li>
              <li>Fazer comparações consistentes entre períodos, canais e unidades;</li>
              <li>Automatizar relatórios e liberar tempo da equipe para análise de valor.</li>
            </ul>

            <p className={styles.paragraph}>
              Nosso fluxo combina investigação de negócios, modelagem de dados e design de interfaces:
              primeiro entendemos as decisões que precisam ser tomadas; depois modelamos os dados para suportar
              essas decisões; por fim entregamos visualizações com hierarquia visual clara, filtros úteis e
              documentação que facilita a governança.
            </p>

            <p className={styles.paragraph}>
              Exemplos práticos: um dashboard de vendas bem construído ajuda a identificar produtos com margem
              decrescente, regiões com queda de conversão e clientes com churn em risco, tudo isso com poucas
              interações. O resultado é menos suposições, decisões mais rápidas e retorno sobre o investimento
              em tecnologia e pessoas.
            </p>

            <p className={styles.paragraph}>
              Além da entrega técnica, priorizamos boas práticas como catalogação de métricas, pipelines de ingestão
              repetíveis e testes de qualidade dos dados. Isso reduz retrabalho, aumenta confiança nas análises e
              possibilita escalabilidade conforme o negócio cresce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}