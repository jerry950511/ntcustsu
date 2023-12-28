import { Figtree } from 'next/font/google'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: '學校場地租借系統',
  description: '學校場地租借系統',
  auth: 'Rex, Jerry'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
