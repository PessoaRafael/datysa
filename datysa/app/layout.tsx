import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { ThemeProvider } from '@/components/shared/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Datysa | Dashboards em Power BI e Análise de Dados para Empresas',
  description: 'Transformamos suas planilhas e bancos de dados em dashboards profissionais no Power BI. Atendemos vendas, veterinária, saúde, logística e mais. Agende uma consultoria gratuita.',
  keywords: 'dashboard power bi, análise de dados, visualização de dados, dashboard personalizado, consultoria de dados, planilha para dashboard, business intelligence, BI para empresas',
  authors: [{ name: 'Datysa' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Datysa | Dashboards em Power BI e Análise de Dados',
    description: 'Transformamos suas planilhas e bancos de dados em dashboards profissionais. Insights claros para decisões rápidas.',
    url: 'https://datysa.com.br',
    siteName: 'Datysa',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Datysa | Dashboards em Power BI',
    description: 'Transformamos suas planilhas em dashboards profissionais no Power BI.',
  },
  icons: {
    icon: '/images/Screenshot_178.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Datysa',
              description: 'Criação de dashboards em Power BI a partir de planilhas e bancos de dados para empresas de todos os setores.',
              url: 'https://datysa.com.br',
              areaServed: 'BR',
              serviceType: ['Dashboard Power BI', 'Análise de Dados', 'Business Intelligence', 'Visualização de Dados'],
              inLanguage: 'pt-BR',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
