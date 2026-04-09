import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Odd Academia',
  description: 'A platform for academic discussions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
