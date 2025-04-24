import LoginMessage from '@/app/_components/LoginMessage';
import TextExpander from '@/app/_components/TextExpander';
import { auth } from '@/app/_lib/auth';
import { getCar } from '@/app/_lib/data-service';
import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaMoneyBillWave, FaPaintRoller } from 'react-icons/fa';

export default async function Page({ params }) {
  const car = await getCar(params.carId);
  const { id, name, paintedParts, price, image, description, kind } = car;
  const session = await auth();

  return (
    <div className="max-w-6xl mx-auto mt-4 md:mt-8 px-4 md:px-0">
      <div className="flex flex-col md:grid md:grid-cols-[3fr_4fr] gap-8 md:gap-20 border border-primary-800 py-4 md:py-3 px-4 md:px-10 mb-12 md:mb-24">
        <div className="relative h-64 md:h-[400px] w-full md:w-auto overflow-hidden">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`${name}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="md:py-4">
          <h3 className="text-accent-100 font-black text-3xl md:text-7xl mb-6 md:mb-16 bg-primary-950 p-4 md:p-6 md:pb-1 w-full text-right">
            {name}
          </h3>

          <p className="text-base md:text-lg text-primary-300 mb-6 md:mb-10 text-right">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-3 md:gap-4 mb-5 md:mb-7">
            <li className="flex gap-2 md:gap-3 items-center">
              <FaCar className="h-5 w-5 text-primary-600" />
              <span className="text-base md:text-lg">
                نوع: <span className="font-bold">{kind}</span>
              </span>
            </li>
            <li className="flex gap-2 md:gap-3 items-center">
              <FaMoneyBillWave className="h-5 w-5 text-primary-600" />
              <span className="text-base md:text-lg">
                قیمت: <span className="font-bold">{price}</span> تومان
              </span>
            </li>
            <li className="flex gap-2 md:gap-3 items-center">
              <FaPaintRoller className="h-5 w-5 text-primary-600" />
              <span className="text-base md:text-lg">
                رنگ شدگی در <span className="font-bold">{paintedParts}</span>{' '}
                ناحیه
              </span>
            </li>
          </ul>
        </div>
      </div>

      {session?.user ? (
        <div className="text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-5xl font-semibold">
            شماره تماس کارشناسان برای بازدید:
          </h2>
          <p className="mt-3 md:mt-5 text-xl md:text-3xl font-medium">
            0912666764
          </p>
          <p className="mt-2 md:mt-3 text-base md:text-lg text-primary-300">
            آیا مایل به معاوضه یا فروش خودروی خود هستید؟{' '}
            <Link
              href="/account/sells"
              className="text-accent-400 hover:underline"
            >
              کلیک کنید
            </Link>
          </p>
        </div>
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
