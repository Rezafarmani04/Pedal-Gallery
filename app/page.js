import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top blur-sm"
        alt="خودرو در جاده"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-primary-50 mb-6 md:mb-10 tracking-tight font-normal">
          ارزان و مطمئن
        </h1>
        <Link
          href="/cars"
          className="bg-accent-500 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-primary-800 text-base sm:text-lg md:text-xl font-semibold hover:bg-accent-600 transition-all"
        >
          بررسی خودرو ها
        </Link>
      </div>
    </main>
  );
}
