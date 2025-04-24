import { CalendarIcon, TruckIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

function CarCard({ car }) {
  const { id, name, kmNumber, price, image, madeYear } = car;

  return (
    <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 flex flex-col md:flex-row border-2 border-primary-700 group hover:border-accent-500 transition-colors duration-300 hover:shadow-lg hover:shadow-accent-500/20">
      <div className="relative w-full h-48 md:h-auto md:flex-1">
        <Image
          src={image}
          fill
          alt={`${name}`}
          className="object-cover md:border-r-2 border-primary-800 group-hover:border-accent-500 transition-colors duration-300"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950 group-hover:bg-primary-900 transition-colors duration-300">
          <h3 className="text-accent-200 font-semibold text-xl md:text-2xl mb-3 group-hover:text-accent-300 transition-colors duration-300">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2 group-hover:text-primary-100 transition-colors duration-300">
            <TruckIcon className="h-5 w-5 text-primary-600 group-hover:text-accent-400 transition-colors duration-300" />
            <p className="text-base md:text-lg text-primary-200">
              کارکرد <span className="font-bold">{kmNumber}</span> کیلومتر
            </p>
          </div>

          <div className="flex gap-3 items-center mb-2 group-hover:text-primary-100 transition-colors duration-300">
            <CalendarIcon className="h-5 w-5 text-primary-600 group-hover:text-accent-400 transition-colors duration-300" />
            <p className="text-base md:text-lg text-primary-200">
              مدل <span className="font-bold">{madeYear}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline group-hover:text-accent-300 transition-colors duration-300">
            <span className="text-2xl md:text-3xl font-[350]">
              {price} تومان
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t-2 border-t-primary-800 text-right group-hover:bg-primary-900 transition-colors duration-300">
          <Link
            href={`/cars/${id}`}
            className="border-l-0 md:border-l-2 border-primary-800 py-3 md:py-4 px-4 md:px-8 hover:bg-accent-600 transition-all duration-300 hover:text-primary-900 group-hover:border-accent-500 flex items-center  gap-2 w-full"
          >
            <span>اطلاعات بیشتر</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
