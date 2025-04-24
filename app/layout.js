import Header from './_components/Header';
import '@/app/_styles/globals.css';
import { Lalezar } from 'next/font/google';

const font = Lalezar({
  subsets: ['arabic'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: {
    template: '%s/ پدال گالری',
    default: 'پدال گالری',
  },
  description: 'به قیمت ترین خودرو های بازار',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        dir="rtl"
        className={`${font.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
