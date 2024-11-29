import '@/styles/globals.css';
import { actay, chakrapetch, jersey10 } from '@/styles/fonts';
import Navbar from '@/components/ui/Navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${actay.variable} ${chakrapetch.variable} ${jersey10.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
