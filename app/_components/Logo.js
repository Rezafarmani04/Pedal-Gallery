import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 md:gap-4 z-10">
      <Image
        src="/Icon.png"
        height={50}
        width={50}
        alt="پدال گالری"
        className="w-8 h-8 md:w-12 md:h-12"
      />
      <span className="text-lg md:text-xl font-semibold text-primary-100">
        پدال گالری
      </span>
    </Link>
  );
}

export default Logo;
