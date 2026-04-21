import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css";

export const metadata: Metadata = {
  title: "L'Atelier Peruano | Joyería Artesanal en Plata 925 — Neuchâtel, Suiza",
  description: "L'Atelier Peruano de Yonatan Torres — creaciones únicas en plata 925 con piedras semipreciosas. Joyería artesanal inspirada en la cosmovisión andina, en Neuchâtel, Suiza.",
  keywords: ["joyería artesanal", "plata 925", "piedras semipreciosas", "Neuchâtel", "Suiza", "Yonatan Torres", "litoterapia", "amuletos andinos"],
  authors: [{ name: "Yonatan Torres" }],
  creator: "L'Atelier Peruano",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://latelierperuano.com",
    title: "L'Atelier Peruano | Joyería Artesanal en Plata 925",
    description: "Creaciones únicas en plata 925 con piedras semipreciosas. Arte mochica vivo en Neuchâtel, Suiza.",
    siteName: "L'Atelier Peruano",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "L'Atelier Peruano — Joyería Artesanal en Plata 925, Neuchâtel Suiza",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier Peruano | Joyería Artesanal en Plata 925",
    description: "Creaciones únicas en plata 925 con piedras semipreciosas. Arte mochica vivo en Neuchâtel, Suiza.",
    images: ["/og.jpg"],
  },
};


export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=Dancing+Script:wght@400;700&family=Cinzel:wght@400;700;900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
