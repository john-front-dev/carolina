import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Carolina",
  description:
    "Каролина - Качественная и натуральная косметика для ухода за кожей и волосами. Широкий выбор средств для красоты и здоровья, проверенные бренды и выгодные цены.",
  keywords:
    "косметика, натуральная косметика, уход за кожей, уход за волосами, средства для красоты, косметические продукты, макияж, уход за лицом, органическая косметика, бьюти-продукты, косметика для женщин, косметика для мужчин, уход за телом, уход за ногтями, парфюмерия, косметические бренды, онлайн-магазин косметики, купить косметику онлайн",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
