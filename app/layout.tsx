import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/organisms/Header";
import { LanguageProvider } from "@/hooks/LanguageContext";

const display = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ui = Roboto({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karaağaç — Duvarların Dili Olsa",
  description:
    "Edirne Karaağaç Tren Garı'nın kolektif hafızasını, binanın kendi ağzından anlatan interaktif bir deneyim.",
  openGraph: {
    title: "Karaağaç — Duvarların Dili Olsa",
    description:
      "Binanın kendi ağzından bir yolculuk: Edirne Karaağaç Tren Garı.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${display.variable} ${ui.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <LanguageProvider>
          <Header />
          <div className="relative z-10 pt-16">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
