import Foot from './Components/Foot'
import Menu from './Components/Menu'
import './globals.css'

export const metadata = {
  title: 'Kisu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu/>
        {children}
        <Foot/>
        </body>
    </html>
  )
}
