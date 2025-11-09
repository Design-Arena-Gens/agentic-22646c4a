import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intelliwave - Agence d\'Automatisation AI & Chatbots sur Mesure',
  description: 'Spécialiste en création de chatbots intelligents et automatisation avec n8n. Transformez votre entreprise avec l\'IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
