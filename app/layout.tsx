
import { Metadata } from 'next';
// import { useEffect, } from 'react';
import { SITE } from '~/config.js';

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
<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Outline Designs is a premier construction company offering exceptional building design and construction services. Transforming architectural visions into reality with industry best practices, sustainability, and innovation." />
    <meta name="keywords" content="Outline Designs, construction company, building design, construction services, sustainability, jenga, kenya, architectural firm , innovation" />
    <meta name="author" content="Outline Designs" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
    <meta name="language" content="English" />
    <meta name="og:title" content="Outline Designs - Premier Construction Company" />
    <meta name="og:description" content="Outline Designs is a  construction company offering exceptional building design and construction services. Transforming architectural visions into reality with industry best practices, sustainability, and innovation." />
    <meta name="og:image" content="https://example.com/path-to-image.jpg" />
    <meta name="og:url" content="https://example.com" />
    <meta name="og:type" content="website" />
    <meta name="twitter:title" content="Outline Designs - Premier Construction Company" />
    <meta name="twitter:description" content="Outline Designs is a premier construction company offering exceptional building design and construction services. Transforming architectural visions into reality with industry best practices, sustainability, and innovation." />
    <meta name="twitter:image" content="https://example.com/path-to-image.jpg" />
     {/* Logo */}
     {/* <Image
          src={LogoIcon} // Replace '/path-to-logo-image.png' with the actual path of your logo image in the 'public' directory
          alt="Outline Designs Logo"
          width={40} // Set the desired width of your logo
          height={40} // Set the desired height of your logo
        /> */}
         {/* <link rel="icon" href="../src/assets/images/Logo.png" type="image/x-icon" /> */}
         {/* <meta name="icon" content="../src/assets/images/Logo.png" /> */}
         <meta name="icon" content="https://th.bing.com/th/id/OIP.FZPgAaD8sslxc2lklYRZ0wHaE0?pid=ImgDet&rs=1" />
         <link rel="shortcut icon" href={favicon.src} />

    <title>Outline Designs - Premier Construction Company</title>
</head>

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
