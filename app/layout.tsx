'use client';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import '../styles/footer.scss'
import '../styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}