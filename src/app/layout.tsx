import PaymentModal from "@/components/payment-modal/PaymentModal";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

const fontDM = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: "variable",
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Fitness • Pilates • LFK",
  description:
    "Program of training with preventive physical culture and pilates for an active life.",
  keywords: [
    "Massage in Minsk private",
    "Massage in Minsk private ads",
    "Massage at home in Minsk",
    "Massage on the spine in Minsk",
    "Relaxing massage in Minsk",
    "Massage of the cervical zone in Minsk",
    "Massage of the cervical-thoracic zone in Minsk",
    "Massage in the district of Minsk",
  ],
  openGraph: {
    title: "Fitness • Pilates • LFK",
    description:
      "Program of training with preventive physical culture and pilates for an active life.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness • Pilates • LFK",
    description:
      "Program of training with preventive physical culture and pilates for an active life.",
    site: "@polovtsevfit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="PolovtsevFit" />

        <Script defer
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(105538684, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true,
          trackHash:true,
          deferEvents: true
        });
      `,
          }}
        />
      </head>
      <body
        className={`${fontDM.variable} ${fontInter.variable}`}
      >

        {children}
        <PaymentModal />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
