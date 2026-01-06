import { Manrope } from 'next/font/google'
import { Syne } from 'next/font/google'
import './styles.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable + ' ' + syne.variable}>
        {children}
      </body>
    </html>
  )
}