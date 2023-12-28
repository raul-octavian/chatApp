import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({ weight: ['100', '200', '400', '600', '800'], subsets: ['latin'], style:['italic', 'normal'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'The next chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
