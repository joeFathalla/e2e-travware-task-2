import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/store/Provider";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E2E Travware Shopping App",
  description: "E2E Travware Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <main className="w-full h-full max-w-7xl mx-auto p-4 m-5">
            <Header />
            <div className="w-full mx-auto">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
