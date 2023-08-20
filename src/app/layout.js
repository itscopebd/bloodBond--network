import { AuthProvider } from '@/context/authContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar></Navbar>
        <AuthProvider>
          {children} 
        </AuthProvider>
          <Footer></Footer>
       
        
        </body>
    </html>
  )
}
