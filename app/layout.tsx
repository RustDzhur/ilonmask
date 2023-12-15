import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/fonts.css'

export const metadata: Metadata = {
  title: 'SpaceX',
  description: 'Colonization of Mars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
