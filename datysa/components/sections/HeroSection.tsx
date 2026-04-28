
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>Power BI · Excel · Banco de dados</span>
            <h1 className={styles.title}>
              Sua planilha vira um <span>dashboard</span> de verdade.
            </h1>
            <p className={styles.subtitle}>
              Pode ser Excel, Google Sheets ou banco de dados.
              A gente transforma em painel no Power BI que qualquer pessoa do time consegue abrir e entender.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://wa.me/+5584994604608"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Falar no WhatsApp
              </a>
              <a href="#pricing" className={styles.secondaryButton}>
                Ver preços
              </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.dashboardPlaceholder}>
              <svg viewBox="0 0 520 300" className={styles.dashboardIcon} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3FA9F5" stopOpacity="0.35"/>
                    <stop offset="100%" stopColor="#3FA9F5" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="cs" x="-3%" y="-5%" width="108%" height="120%">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.1)"/>
                  </filter>
                </defs>

                {/* ── Sidebar ── */}
                <rect x="0" y="0" width="34" height="300" fill="#201F1E"/>
                <rect x="9" y="10" width="16" height="1.5" rx="0.75" fill="rgba(255,255,255,0.6)"/>
                <rect x="9" y="14.5" width="16" height="1.5" rx="0.75" fill="rgba(255,255,255,0.6)"/>
                <rect x="9" y="19" width="16" height="1.5" rx="0.75" fill="rgba(255,255,255,0.6)"/>
                <rect x="0" y="38" width="3" height="14" rx="1.5" fill="#F0B400"/>
                <rect x="8" y="38" width="18" height="14" rx="2" fill="rgba(255,255,255,0.18)"/>
                <rect x="8" y="59" width="18" height="10" rx="2" fill="rgba(255,255,255,0.08)"/>
                <rect x="8" y="75" width="18" height="10" rx="2" fill="rgba(255,255,255,0.08)"/>
                <rect x="8" y="91" width="18" height="10" rx="2" fill="rgba(255,255,255,0.08)"/>

                {/* ── Header ── */}
                <rect x="34" y="0" width="486" height="26" fill="white"/>
                <line x1="34" y1="26" x2="520" y2="26" stroke="#EDEBE9" strokeWidth="0.75"/>
                <text x="42" y="17" fontSize="7">
                  <tspan fill="#A19F9D">Meu workspace  ›  </tspan>
                  <tspan fontWeight="700" fill="#201F1E">Dashboard de Vendas</tspan>
                </text>
                <rect x="426" y="8" width="34" height="12" rx="3" fill="none" stroke="#8A8886" strokeWidth="0.75"/>
                <text x="443" y="17" fontSize="6" fill="#605E5C" textAnchor="middle">Filtros</text>
                <rect x="466" y="8" width="48" height="12" rx="3" fill="#0078D4"/>
                <text x="490" y="17" fontSize="6" fill="white" textAnchor="middle" fontWeight="600">Compartilhar</text>

                {/* ── Page tabs ── */}
                <rect x="34" y="26" width="486" height="16" fill="#F3F2F1"/>
                <rect x="44" y="26" width="64" height="16" fill="white"/>
                <rect x="44" y="40" width="64" height="2" fill="#0078D4"/>
                <text x="76" y="37" fontSize="7" fill="#201F1E" fontWeight="600" textAnchor="middle">Visão Geral</text>
                <text x="140" y="37" fontSize="7" fill="#605E5C" textAnchor="middle">Detalhe</text>
                <text x="192" y="37" fontSize="7" fill="#605E5C" textAnchor="middle">Relatório</text>

                {/* ── Canvas ── */}
                <rect x="34" y="42" width="486" height="258" fill="#F3F2F1"/>

                {/* ── KPI Card 1: Receita Total ── */}
                <rect x="42" y="48" width="150" height="54" rx="3" fill="white" filter="url(#cs)"/>
                <text x="50" y="61" fontSize="6" fill="#605E5C" fontWeight="600" letterSpacing="0.5">RECEITA TOTAL</text>
                <text x="50" y="82" fontSize="18" fontWeight="700" fill="#201F1E">R$ 847K</text>
                <text x="50" y="95" fontSize="6.5" fill="#107C10">▲ 12,4% vs mês ant.</text>

                {/* ── KPI Card 2: Clientes Ativos ── */}
                <rect x="198" y="48" width="150" height="54" rx="3" fill="white" filter="url(#cs)"/>
                <text x="206" y="61" fontSize="6" fill="#605E5C" fontWeight="600" letterSpacing="0.5">CLIENTES ATIVOS</text>
                <text x="206" y="82" fontSize="18" fontWeight="700" fill="#201F1E">1.284</text>
                <text x="206" y="95" fontSize="6.5" fill="#107C10">▲ 8,1% vs mês ant.</text>

                {/* ── KPI Card 3: Meta ── */}
                <rect x="354" y="48" width="150" height="54" rx="3" fill="white" filter="url(#cs)"/>
                <text x="362" y="61" fontSize="6" fill="#605E5C" fontWeight="600" letterSpacing="0.5">META ATINGIDA</text>
                <text x="362" y="82" fontSize="18" fontWeight="700" fill="#201F1E">94%</text>
                <rect x="362" y="87" width="130" height="5" rx="2.5" fill="#F3F2F1"/>
                <rect x="362" y="87" width="122" height="5" rx="2.5" fill="#F0B400"/>

                {/* ── Bar Chart card ── */}
                <rect x="42" y="110" width="216" height="180" rx="3" fill="white" filter="url(#cs)"/>
                <text x="52" y="124" fontSize="7.5" fontWeight="700" fill="#201F1E">Receita por Mês</text>
                <text x="246" y="124" fontSize="6" fill="#A19F9D" textAnchor="end">R$ mil</text>
                {/* grid */}
                <line x1="66" y1="270" x2="246" y2="270" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="66" y1="253" x2="246" y2="253" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="66" y1="236" x2="246" y2="236" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="66" y1="219" x2="246" y2="219" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="66" y1="202" x2="246" y2="202" stroke="#EDEBE9" strokeWidth="0.75"/>
                {/* y-axis */}
                <text x="64" y="272" fontSize="5.5" fill="#A19F9D" textAnchor="end">0</text>
                <text x="64" y="255" fontSize="5.5" fill="#A19F9D" textAnchor="end">20</text>
                <text x="64" y="238" fontSize="5.5" fill="#A19F9D" textAnchor="end">40</text>
                <text x="64" y="221" fontSize="5.5" fill="#A19F9D" textAnchor="end">60</text>
                <text x="64" y="204" fontSize="5.5" fill="#A19F9D" textAnchor="end">80</text>
                {/* bars: x = 66,96,126,156,186,216 width=22 */}
                <rect x="66" y="239" width="22" height="31" rx="1" fill="#0D3B66"/>
                <rect x="96" y="235" width="22" height="35" rx="1" fill="#0D3B66"/>
                <rect x="126" y="238" width="22" height="32" rx="1" fill="#0D3B66"/>
                <rect x="156" y="226" width="22" height="44" rx="1" fill="#2AC769"/>
                <rect x="186" y="233" width="22" height="37" rx="1" fill="#0D3B66"/>
                <rect x="216" y="221" width="22" height="49" rx="1" fill="#0D3B66"/>
                <text x="167" y="222" fontSize="6" fill="#2AC769" textAnchor="middle" fontWeight="700">R$61K</text>
                {/* x-axis labels */}
                <text x="77" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Jan</text>
                <text x="107" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Fev</text>
                <text x="137" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Mar</text>
                <text x="167" y="281" fontSize="5.5" fill="#2AC769" textAnchor="middle" fontWeight="600">Abr</text>
                <text x="197" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Mai</text>
                <text x="227" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Jun</text>

                {/* ── Area Chart card ── */}
                <rect x="264" y="110" width="248" height="180" rx="3" fill="white" filter="url(#cs)"/>
                <text x="274" y="124" fontSize="7.5" fontWeight="700" fill="#201F1E">Crescimento Acumulado</text>
                {/* legend */}
                <rect x="444" y="116" width="7" height="7" rx="1" fill="#0D3B66"/>
                <text x="453" y="122" fontSize="5.5" fill="#605E5C">Receita</text>
                <line x1="444" y1="131" x2="451" y2="131" stroke="#2AC769" strokeWidth="1.5" strokeDasharray="2.5 2"/>
                <text x="453" y="134" fontSize="5.5" fill="#605E5C">Meta</text>
                {/* grid */}
                <line x1="286" y1="270" x2="500" y2="270" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="286" y1="253" x2="500" y2="253" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="286" y1="236" x2="500" y2="236" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="286" y1="219" x2="500" y2="219" stroke="#EDEBE9" strokeWidth="0.75"/>
                <line x1="286" y1="202" x2="500" y2="202" stroke="#EDEBE9" strokeWidth="0.75"/>
                {/* y-axis */}
                <text x="284" y="272" fontSize="5.5" fill="#A19F9D" textAnchor="end">0</text>
                <text x="284" y="255" fontSize="5.5" fill="#A19F9D" textAnchor="end">200K</text>
                <text x="284" y="238" fontSize="5.5" fill="#A19F9D" textAnchor="end">400K</text>
                <text x="284" y="221" fontSize="5.5" fill="#A19F9D" textAnchor="end">600K</text>
                <text x="284" y="204" fontSize="5.5" fill="#A19F9D" textAnchor="end">800K</text>
                {/* area fill — points: x 290,325,360,395,430,465,500 */}
                <path d="M290,262 L325,254 L360,258 L395,244 L430,237 L465,227 L500,218 L500,270 L290,270 Z" fill="url(#areaFill)"/>
                <polyline points="290,262 325,254 360,258 395,244 430,237 465,227 500,218"
                          fill="none" stroke="#0D3B66" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                {/* target dashed line */}
                <line x1="290" y1="259" x2="500" y2="224" stroke="#2AC769" strokeWidth="1.25" strokeDasharray="4 3"/>
                {/* data points */}
                <circle cx="290" cy="262" r="2.5" fill="#0D3B66"/>
                <circle cx="360" cy="258" r="2.5" fill="#0D3B66"/>
                <circle cx="430" cy="237" r="2.5" fill="#0D3B66"/>
                <circle cx="500" cy="218" r="4" fill="white" stroke="#0D3B66" strokeWidth="2"/>
                {/* tooltip */}
                <rect x="468" y="200" width="50" height="16" rx="3" fill="#201F1E"/>
                <text x="493" y="211" fontSize="6.5" fill="white" textAnchor="middle" fontWeight="700">R$ 847K</text>
                <polygon points="488,216 498,216 493,221" fill="#201F1E"/>
                {/* x-axis labels */}
                <text x="290" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Jan</text>
                <text x="325" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Fev</text>
                <text x="360" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Mar</text>
                <text x="395" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Abr</text>
                <text x="430" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Mai</text>
                <text x="465" y="281" fontSize="5.5" fill="#A19F9D" textAnchor="middle">Jun</text>
                <text x="500" y="281" fontSize="5.5" fill="#201F1E" textAnchor="middle" fontWeight="600">Jul</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}