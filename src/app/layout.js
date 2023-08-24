
"use client"
import { AuthProvider } from '@/context/authContext'
import './globals.css'
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BloodBond-network',
  description: 'A patient can find a blood donor through this website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>

          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>

        </AuthProvider>


      </body>
    </html>
  )
}
