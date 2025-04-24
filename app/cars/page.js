import CarCard from '../_components/CarCard';
import { getCars } from '../_lib/data-service';
import Pagination from '../_components/Pagination';
import SearchBar from '../_components/SearchBar';
import FilterButton from '../_components/FilterButton';

export const metadata = {
  title: 'خودرو ها',
};

export default async function Page({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 6;
  const searchTerm = searchParams.search || '';
  const filters = {
    minPrice: searchParams.minPrice || '',
    maxPrice: searchParams.maxPrice || '',
    minYear: searchParams.minYear || '',
    maxYear: searchParams.maxYear || '',
    minKm: searchParams.minKm || '',
    maxKm: searchParams.maxKm || '',
  };

  const { cars, totalCount } = await getCars(
    currentPage,
    pageSize,
    searchTerm,
    filters
  );

  return (
    <div className="px-4 md:px-0 ">
      <div className="mb-5 md:mb-10">
        <h1 className="text-3xl md:text-4xl text-accent-400 font-medium">
          خودرو ها
        </h1>
        <p className="text-lg  md:text-xl text-primary-200 mt-3 md:mt-0">
          به قیمت ترین خودرو های بازار! اینجا هر خودرویی بخوای یا موجود هست یا
          به زودی موجود میشه! با افتخار بزرگترین گالری خودرو فعال در ایران
          هستیم. اینجا علاوه بر قیمت مناسب از سالم بودن و واقعیت خودرویی که
          میخوای بخری هم خیالت راحته.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6 w-full max-w-2xl mx-auto">
        <div className="w-full md:w-[300px] md:mr-36">
          <SearchBar />
        </div>
        <div className="w-full md:w-auto md:mr-16 md:mb-7">
          <FilterButton />
        </div>
      </div>

      {cars.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-14">
            {cars.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>

          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalItems={totalCount}
              pageSize={pageSize}
            />
          </div>
        </>
      ) : (
        <p className="text-center py-10 text-lg">
          {searchTerm
            ? 'هیچ خودرویی با مشخصات جستجو یافت نشد'
            : 'هیچ خودرویی یافت نشد'}
        </p>
      )}
    </div>
  );
}
