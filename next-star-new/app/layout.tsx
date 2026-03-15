import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'; 

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Next Star',
  description: 'Where the next generation of stars rise',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}