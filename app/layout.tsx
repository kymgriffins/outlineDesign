
import { Metadata } from 'next';
// import { useEffect, } from 'react';
import { SITE } from '~/config.js';
import Head from 'next/head'; // Import the Head component
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import { Analytics } from '@vercel/analytics/react';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import Logo from '~/components/atoms/Logo';
import favicon from '~/assets/images/Logo.png'
import Image from 'next/image';
// import ReactGA from 'react-ga';
const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};
// const TRACKING_ID = "G-KNZS361QQP"; // OUR_TRACKING_ID
//   ReactGA.initialize(TRACKING_ID);

export default function RootLayout({ children }: LayoutProps) {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  console.log("FAVICON",favicon.src)
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
 <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Title */}
        <title>Outline Designs - Premier Construction Company | Bringing Architectural Visions to Life</title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
        <meta
          name="keywords"
          content="Outline Designs, construction company, building design, construction services, sustainability, jenga, kenya, architectural firm, innovation"
        />
        <meta name="author" content="Outline Designs" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Outline Designs - Premier Construction Company" />
        <meta
          property="og:description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
        <meta property="og:image" content="https://example.com/path-to-image.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://outlinedesigns.co.ke" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Outline Designs - Premier Construction Company" />
        <meta
          name="twitter:description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
        <meta name="twitter:image" content="https://example.com/path-to-image.jpg" /> {/* Replace with actual image URL */}

        {/* Favicon */}
        <link rel="shortcut icon" href={favicon.src} />

        {/* Logo */}
        <link rel="icon" href={favicon.src} />
      </Head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
        <Analytics />
          {/* <Announcement /> */}
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
