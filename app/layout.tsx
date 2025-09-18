import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'VIPLane - Plataforma Premium de Cursos',
  description: 'Descubra cursos premium de Marketing Digital, Programação e Empreendedorismo. Transforme sua carreira com conteúdo VIP de alta qualidade.',
  keywords: 'cursos online, marketing digital, programação, empreendedorismo, VIP, premium',
  authors: [{ name: 'Jonathan - VIPLane' }],
  openGraph: {
    title: 'VIPLane - Plataforma Premium de Cursos',
    description: 'Transforme sua carreira com cursos VIP de alta qualidade',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "VIPLane",
              "description": "Plataforma Premium de Cursos Online",
              "url": "https://viplane.com",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}