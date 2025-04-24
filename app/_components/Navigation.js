import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 items-center">
        <li>
          <Link
            href="/cars"
            className="hover:text-accent-400 transition-colors block py-2 md:py-0"
          >
            خودرو ها
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors block py-2 md:py-0"
          >
            درباره ی ما
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors block py-2 md:py-0"
          >
            حساب کاربری
          </Link>
        </li>
      </ul>
    </nav>
  );
}
