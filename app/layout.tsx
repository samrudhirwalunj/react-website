'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.scss'; // global styles

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