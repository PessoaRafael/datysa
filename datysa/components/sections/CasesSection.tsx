import styles from './CasesSection.module.css';

function DashVendas() {
  return (
    <svg viewBox="0 0 480 220" className={styles.dashSvg} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D3B66" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0D3B66" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="vg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2AC769" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#2AC769" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      {/* bg */}
      <rect width="480" height="220" fill="#F3F2F1"/>
      {/* sidebar */}
      <rect width="28" height="220" fill="#201F1E"/>
      <rect x="0" y="32" width="3" height="12" rx="1.5" fill="#F0B400"/>
      <rect x="6" y="32" width="16" height="12" rx="2" fill="rgba(255,255,255,0.18)"/>
      <rect x="6" y="50" width="16" height="8" rx="2" fill="rgba(255,255,255,0.07)"/>
      <rect x="6" y="63" width="16" height="8" rx="2" fill="rgba(255,255,255,0.07)"/>
      {/* header */}
      <rect x="28" width="452" height="22" fill="white"/>
      <line x1="28" y1="22" x2="480" y2="22" stroke="#EDEBE9" strokeWidth="0.75"/>
      <text x="36" y="15" fontSize="7" fill="#323130" fontFamily="Segoe UI, sans-serif">Dashboard de Vendas</text>
      <rect x="390" y="5" width="42" height="12" rx="2" fill="#0078D4"/>
      <text x="401" y="14" fontSize="6" fill="white" fontFamily="Segoe UI, sans-serif">Compartilhar</text>
      {/* tabs */}
      <rect x="28" y="22" width="452" height="16" fill="#FAF9F8"/>
      <rect x="36" y="22" width="54" height="16" fill="white"/>
      <line x1="36" y1="38" x2="90" y2="38" stroke="#0078D4" strokeWidth="1.5"/>
      <text x="42" y="33" fontSize="6.5" fill="#323130" fontWeight="600" fontFamily="Segoe UI, sans-serif">Visão Geral</text>
      <text x="98" y="33" fontSize="6.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">Metas</text>
      <text x="135" y="33" fontSize="6.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">Detalhes</text>
      {/* KPI cards */}
      {/* Receita */}
      <rect x="36" y="46" width="120" height="44" rx="3" fill="white" filter="url(#cs2)"/>
      <text x="44" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">RECEITA TOTAL</text>
      <text x="44" y="74" fontSize="14" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">R$124K</text>
      <text x="100" y="74" fontSize="8" fill="#2AC769" fontFamily="Segoe UI, sans-serif">▲18%</text>
      {/* Pedidos */}
      <rect x="164" y="46" width="120" height="44" rx="3" fill="white"/>
      <text x="172" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">PEDIDOS</text>
      <text x="172" y="74" fontSize="14" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">843</text>
      <text x="200" y="74" fontSize="8" fill="#2AC769" fontFamily="Segoe UI, sans-serif">▲22%</text>
      {/* Ticket */}
      <rect x="292" y="46" width="120" height="44" rx="3" fill="white"/>
      <text x="300" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">TICKET MÉDIO</text>
      <text x="300" y="74" fontSize="14" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">R$147</text>
      <text x="346" y="74" fontSize="8" fill="#C00" fontFamily="Segoe UI, sans-serif">▼3%</text>
      {/* Bar chart */}
      <rect x="36" y="98" width="216" height="112" rx="3" fill="white"/>
      <text x="44" y="112" fontSize="7" fontWeight="600" fill="#323130" fontFamily="Segoe UI, sans-serif">Receita por Canal</text>
      {/* bars */}
      {[
        { x: 52,  h: 52, label: 'Site',    color: '#0D3B66' },
        { x: 92,  h: 35, label: 'App',     color: '#0D3B66' },
        { x: 132, h: 64, label: 'Loja',    color: '#2AC769' },
        { x: 172, h: 28, label: 'Revendas',color: '#0D3B66' },
        { x: 212, h: 42, label: 'WhatsApp',color: '#0D3B66' },
      ].map(b => (
        <g key={b.label}>
          <rect x={b.x} y={190 - b.h} width="22" height={b.h} rx="2" fill={b.color}/>
          <text x={b.x + 11} y={198} fontSize="5.5" fill="#605E5C" textAnchor="middle" fontFamily="Segoe UI, sans-serif">{b.label}</text>
        </g>
      ))}
      {/* Donut */}
      <rect x="260" y="98" width="152" height="112" rx="3" fill="white"/>
      <text x="268" y="112" fontSize="7" fontWeight="600" fill="#323130" fontFamily="Segoe UI, sans-serif">Conversão por Etapa</text>
      <circle cx="336" cy="162" r="30" fill="none" stroke="#EDEBE9" strokeWidth="14"/>
      <circle cx="336" cy="162" r="30" fill="none" stroke="#0D3B66" strokeWidth="14"
        strokeDasharray="94 94" strokeDashoffset="0" strokeLinecap="butt"
        transform="rotate(-90 336 162)"/>
      <circle cx="336" cy="162" r="30" fill="none" stroke="#2AC769" strokeWidth="14"
        strokeDasharray="47 141" strokeDashoffset="-94" strokeLinecap="butt"
        transform="rotate(-90 336 162)"/>
      <circle cx="336" cy="162" r="30" fill="none" stroke="#F0B400" strokeWidth="14"
        strokeDasharray="35 153" strokeDashoffset="-141" strokeLinecap="butt"
        transform="rotate(-90 336 162)"/>
      <text x="336" y="167" fontSize="10" fontWeight="700" fill="#0D3B66" textAnchor="middle" fontFamily="Segoe UI, sans-serif">64%</text>
      <g transform="translate(268,148)">
        <rect width="6" height="6" rx="1" fill="#0D3B66"/>
        <text x="9" y="6" fontSize="5.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">Visitantes</text>
        <rect y="12" width="6" height="6" rx="1" fill="#2AC769"/>
        <text x="9" y="18" fontSize="5.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">Carrinho</text>
        <rect y="24" width="6" height="6" rx="1" fill="#F0B400"/>
        <text x="9" y="30" fontSize="5.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">Comprou</text>
      </g>
    </svg>
  );
}

function DashEstoque() {
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun'];
  const ruptura = [12, 10, 9, 7, 5, 4];
  const maxH = 60;
  const maxVal = 14;
  return (
    <svg viewBox="0 0 480 220" className={styles.dashSvg} xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="220" fill="#F3F2F1"/>
      <rect width="28" height="220" fill="#201F1E"/>
      <rect x="0" y="32" width="3" height="12" rx="1.5" fill="#F0B400"/>
      <rect x="6" y="32" width="16" height="12" rx="2" fill="rgba(255,255,255,0.18)"/>
      <rect x="6" y="50" width="16" height="8" rx="2" fill="rgba(255,255,255,0.07)"/>
      <rect x="28" width="452" height="22" fill="white"/>
      <line x1="28" y1="22" x2="480" y2="22" stroke="#EDEBE9" strokeWidth="0.75"/>
      <text x="36" y="15" fontSize="7" fill="#323130" fontFamily="Segoe UI, sans-serif">Gestão de Estoque</text>
      <rect x="390" y="5" width="42" height="12" rx="2" fill="#0078D4"/>
      <text x="401" y="14" fontSize="6" fill="white" fontFamily="Segoe UI, sans-serif">Compartilhar</text>
      <rect x="28" y="22" width="452" height="16" fill="#FAF9F8"/>
      <rect x="36" y="22" width="62" height="16" fill="white"/>
      <line x1="36" y1="38" x2="98" y2="38" stroke="#0078D4" strokeWidth="1.5"/>
      <text x="42" y="33" fontSize="6.5" fill="#323130" fontWeight="600" fontFamily="Segoe UI, sans-serif">Visão Geral</text>
      {/* KPIs */}
      <rect x="36" y="46" width="110" height="44" rx="3" fill="white"/>
      <text x="44" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">RUPTURA ATUAL</text>
      <text x="44" y="74" fontSize="14" fontWeight="700" fill="#2AC769" fontFamily="Segoe UI, sans-serif">4%</text>
      <text x="76" y="74" fontSize="8" fill="#2AC769" fontFamily="Segoe UI, sans-serif">▼67%</text>
      <rect x="154" y="46" width="110" height="44" rx="3" fill="white"/>
      <text x="162" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">SKUs CRÍTICOS</text>
      <text x="162" y="74" fontSize="14" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">3</text>
      <text x="182" y="74" fontSize="8" fill="#2AC769" fontFamily="Segoe UI, sans-serif">vs 18 antes</text>
      <rect x="272" y="46" width="140" height="44" rx="3" fill="white"/>
      <text x="280" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">COBERTURA MÉDIA</text>
      <text x="280" y="74" fontSize="14" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">28 dias</text>
      {/* Line chart ruptura */}
      <rect x="36" y="98" width="400" height="112" rx="3" fill="white"/>
      <text x="44" y="112" fontSize="7" fontWeight="600" fill="#323130" fontFamily="Segoe UI, sans-serif">% de Ruptura ao longo do tempo</text>
      {/* y-axis labels */}
      {[0,5,10].map((v,i) => (
        <g key={v}>
          <text x={50} y={190 - (v/maxVal)*maxH} fontSize="5.5" fill="#A19F9D" textAnchor="end" fontFamily="Segoe UI, sans-serif">{v}%</text>
          <line x1={54} y1={190 - (v/maxVal)*maxH} x2={420} y2={190 - (v/maxVal)*maxH} stroke="#EDEBE9" strokeWidth="0.5"/>
        </g>
      ))}
      {/* area */}
      <defs>
        <linearGradient id="ruptArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C00" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#C00" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon
        points={[
          ...meses.map((_, i) => `${68 + i*60},${190 - (ruptura[i]/maxVal)*maxH}`),
          `${68 + 5*60},190`,
          `68,190`,
        ].join(' ')}
        fill="url(#ruptArea)"
      />
      <polyline
        points={meses.map((_, i) => `${68 + i*60},${190 - (ruptura[i]/maxVal)*maxH}`).join(' ')}
        fill="none" stroke="#C00" strokeWidth="1.5" strokeLinejoin="round"
      />
      {meses.map((m, i) => (
        <g key={m}>
          <circle cx={68 + i*60} cy={190 - (ruptura[i]/maxVal)*maxH} r="3" fill="white" stroke="#C00" strokeWidth="1.5"/>
          <text x={68 + i*60} y={204} fontSize="5.5" fill="#605E5C" textAnchor="middle" fontFamily="Segoe UI, sans-serif">{m}</text>
          {i === 5 && (
            <>
              <rect x={68 + i*60 - 16} y={190 - (ruptura[i]/maxVal)*maxH - 16} width="32" height="12" rx="2" fill="#2AC769"/>
              <text x={68 + i*60} y={190 - (ruptura[i]/maxVal)*maxH - 7} fontSize="6" fill="white" textAnchor="middle" fontFamily="Segoe UI, sans-serif">4% agora</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

function DashFinanceiro() {
  return (
    <svg viewBox="0 0 480 220" className={styles.dashSvg} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mrrArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3FA9F5" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#3FA9F5" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="480" height="220" fill="#F3F2F1"/>
      <rect width="28" height="220" fill="#201F1E"/>
      <rect x="0" y="32" width="3" height="12" rx="1.5" fill="#F0B400"/>
      <rect x="6" y="32" width="16" height="12" rx="2" fill="rgba(255,255,255,0.18)"/>
      <rect x="6" y="50" width="16" height="8" rx="2" fill="rgba(255,255,255,0.07)"/>
      <rect x="28" width="452" height="22" fill="white"/>
      <line x1="28" y1="22" x2="480" y2="22" stroke="#EDEBE9" strokeWidth="0.75"/>
      <text x="36" y="15" fontSize="7" fill="#323130" fontFamily="Segoe UI, sans-serif">Financeiro — Fluxo de Caixa</text>
      <rect x="390" y="5" width="42" height="12" rx="2" fill="#0078D4"/>
      <text x="401" y="14" fontSize="6" fill="white" fontFamily="Segoe UI, sans-serif">Compartilhar</text>
      <rect x="28" y="22" width="452" height="16" fill="#FAF9F8"/>
      <rect x="36" y="22" width="50" height="16" fill="white"/>
      <line x1="36" y1="38" x2="86" y2="38" stroke="#0078D4" strokeWidth="1.5"/>
      <text x="42" y="33" fontSize="6.5" fill="#323130" fontWeight="600" fontFamily="Segoe UI, sans-serif">Resumo</text>
      {/* KPIs */}
      <rect x="36" y="46" width="110" height="44" rx="3" fill="white"/>
      <text x="44" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">RECEITA MENSAL</text>
      <text x="44" y="74" fontSize="13" fontWeight="700" fill="#0D3B66" fontFamily="Segoe UI, sans-serif">R$89K</text>
      <text x="96" y="74" fontSize="8" fill="#2AC769" fontFamily="Segoe UI, sans-serif">▲14%</text>
      <rect x="154" y="46" width="110" height="44" rx="3" fill="white"/>
      <text x="162" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">DESPESAS</text>
      <text x="162" y="74" fontSize="13" fontWeight="700" fill="#C00" fontFamily="Segoe UI, sans-serif">R$51K</text>
      <text x="207" y="74" fontSize="8" fill="#C00" fontFamily="Segoe UI, sans-serif">▲4%</text>
      <rect x="272" y="46" width="140" height="44" rx="3" fill="white"/>
      <text x="280" y="59" fontSize="6" fill="#605E5C" fontFamily="Segoe UI, sans-serif">MARGEM LÍQUIDA</text>
      <text x="280" y="74" fontSize="13" fontWeight="700" fill="#2AC769" fontFamily="Segoe UI, sans-serif">42.7%</text>
      {/* Area chart MRR */}
      <rect x="36" y="98" width="260" height="112" rx="3" fill="white"/>
      <text x="44" y="112" fontSize="7" fontWeight="600" fill="#323130" fontFamily="Segoe UI, sans-serif">Receita Acumulada</text>
      {(() => {
        const pts = [38,52,48,61,67,75,89];
        const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul'];
        const maxV = 95; const chartH = 60; const startX = 46; const gap = 36;
        const coords = pts.map((v,i) => `${startX + i*gap},${190 - (v/maxV)*chartH}`);
        return (
          <>
            <polygon points={[...coords, `${startX+6*gap},190`, `${startX},190`].join(' ')} fill="url(#mrrArea)"/>
            <polyline points={coords.join(' ')} fill="none" stroke="#0D3B66" strokeWidth="1.5" strokeLinejoin="round"/>
            {pts.map((v,i) => (
              <g key={i}>
                <circle cx={startX + i*gap} cy={190 - (v/maxV)*chartH} r="2.5" fill="white" stroke="#0D3B66" strokeWidth="1.2"/>
                <text x={startX + i*gap} y={202} fontSize="5.5" fill="#605E5C" textAnchor="middle" fontFamily="Segoe UI, sans-serif">{meses[i]}</text>
              </g>
            ))}
          </>
        );
      })()}
      {/* DRE waterfall */}
      <rect x="304" y="98" width="108" height="112" rx="3" fill="white"/>
      <text x="312" y="112" fontSize="7" fontWeight="600" fill="#323130" fontFamily="Segoe UI, sans-serif">DRE Simplificado</text>
      {[
        { label: 'Receita',   val: 'R$89K', color: '#0D3B66', barW: 80 },
        { label: 'CMV',       val: '(R$28K)', color: '#C00',   barW: 25 },
        { label: 'Desp. Op.', val: '(R$22K)', color: '#C00',   barW: 20 },
        { label: 'Lucro',     val: 'R$38K', color: '#2AC769', barW: 34 },
      ].map((row, i) => (
        <g key={row.label} transform={`translate(312, ${122 + i*20})`}>
          <text y="8" fontSize="5.5" fill="#605E5C" fontFamily="Segoe UI, sans-serif">{row.label}</text>
          <rect x="42" y="1" width={row.barW} height="8" rx="1.5" fill={row.color} opacity="0.85"/>
          <text x="126" y="8" fontSize="5.5" fill={row.color} textAnchor="end" fontFamily="Segoe UI, sans-serif" fontWeight="600">{row.val}</text>
        </g>
      ))}
    </svg>
  );
}

export default function CasesSection() {
  const cases = [
    {
      id: 'ecom',
      title: 'Distribuidora de alimentos',
      subtitle: 'Dashboard de vendas por canal e vendedor',
      before: 'Decisões no achismo',
      after: 'Receita +18% em 3 meses',
      description:
        'Tinham planilha, mas ninguém olhava. Montamos um painel com receita por canal, ticket médio e funil de conversão. Hoje o dono abre todo dia no celular.',
      svg: <DashVendas />,
    },
    {
      id: 'retail',
      title: 'Rede de varejo regional',
      subtitle: 'Gestão de estoque e ruptura de gôndola',
      before: 'Ruptura média 12%',
      after: 'Ruptura caiu pra 4%',
      description:
        'A equipe descobria ruptura quando o cliente reclamava. Com o painel, passou a ver os SKUs críticos com 3 dias de antecedência.',
      svg: <DashEstoque />,
    },
    {
      id: 'financeiro',
      title: 'Empresa de serviços',
      subtitle: 'Painel financeiro com DRE e fluxo de caixa',
      before: 'Fechamento levava 4 dias',
      after: 'Fechamento em tempo real',
      description:
        'O financeiro vivia no Excel. Conectamos o sistema de gestão deles e agora receita, despesa e margem atualizam sozinhos todo dia.',
      svg: <DashFinanceiro />,
    },
  ];

  return (
    <section id="projetos" className={styles.section} aria-labelledby="cases-title" style={{ scrollMarginTop: '80px' }}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Cases</span>
        <h2 id="cases-title" className={styles.title}>
          Projetos que a gente fez
        </h2>

        <p className={styles.lead}>
          Não tem print de cliente aqui porque são dados reais de empresa. Mas os dashboards abaixo representam o tipo de coisa que a gente entrega.
        </p>

        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.cardMedia}>
                {c.svg}
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