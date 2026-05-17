import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivammahajan.dev"),
  title: {
    default: "Shivam Mahajan — Backend & GenAI Engineer",
    template: "%s — Shivam Mahajan",
  },
  description:
    "Backend and GenAI engineer at Coinbase, building LLM infrastructure, AI agents, and distributed systems that work at production scale.",
  openGraph: {
    title: "Shivam Mahajan — Backend & GenAI Engineer",
    description:
      "Backend and GenAI engineer at Coinbase, building LLM infrastructure, AI agents, and distributed systems that work at production scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Mahajan — Backend & GenAI Engineer",
    description:
      "Backend and GenAI engineer at Coinbase. Building LLM infrastructure, AI agents, and systems that scale.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
