import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ninza7: Rohit Kumar Thakur",
  description:
    "Software developer, content creator, and the mind behind the YouTube channel Bug Ninza and Instagram page Bug Ninza.",
  keywords:
    "Rohit Kumar Thakur, portfolio, web developer, programmer, software engineer, content creator, Bug Ninza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-black/50 backdrop-blur-sm">
          <nav className="flex items-center justify-between h-16">
            {" "}
            {/* Add a fixed height */}
            <div className="text-2xl font-bold">
              <a href="#">Ninza7</a>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Insights
                </a>
              </li>
              <li>
                <a href="#connect" className="hover:text-blue-500">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen pt-20">{children}</main>
        <footer className="py-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Rohit Kumar Thakur. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
