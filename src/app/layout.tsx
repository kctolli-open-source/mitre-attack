import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const app = 'Security Attack';

export const metadata: Metadata = {
  title: app,
  description: 'Mitre Attack Framework Checklist',
};

/**
 * Render the root layout component.
 *
 * @param {React.ReactNode} props.children - The child components to render.
 * @return {React.ReactElement} The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/8460/8460433.png" />
      </head>
      <body className={inter.className}>
        <header>
          <h1>{app}</h1>
          <hr/>
        </header>
        {children}
      </body>
    </html>
  );
}
