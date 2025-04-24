'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    minKm: '',
    maxKm: '',
  });

  function applyFilters() {
    const params = new URLSearchParams(searchParams);

    params.delete('minPrice');
    params.delete('maxPrice');
    params.delete('minYear');
    params.delete('maxYear');
    params.delete('minKm');
    params.delete('maxKm');

    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.minYear) params.set('minYear', filters.minYear);
    if (filters.maxYear) params.set('maxYear', filters.maxYear);
    if (filters.minKm) params.set('minKm', filters.minKm);
    if (filters.maxKm) params.set('maxKm', filters.maxKm);

    params.set('page', '1');
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  }

  function resetFilters() {
    setFilters({
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      minKm: '',
      maxKm: '',
    });
    const params = new URLSearchParams(searchParams);
    ['minPrice', 'maxPrice', 'minYear', 'maxYear', 'minKm', 'maxKm'].forEach(
      (param) => params.delete(param)
    );
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-primary-700 rounded-lg hover:bg-accent-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        فیلترها
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-primary-800 rounded-lg shadow-lg z-10 p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-200 mb-1">
                محدوده قیمت (مثلا از 2 تا 5)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="از"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, minPrice: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
                <input
                  type="number"
                  placeholder="تا"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-200 mb-1">
                سال تولید
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="از"
                  value={filters.minYear}
                  onChange={(e) =>
                    setFilters({ ...filters, minYear: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
                <input
                  type="number"
                  placeholder="تا"
                  value={filters.maxYear}
                  onChange={(e) =>
                    setFilters({ ...filters, maxYear: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-200 mb-1">
                کارکرد (کیلومتر)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="از"
                  value={filters.minKm}
                  onChange={(e) =>
                    setFilters({ ...filters, minKm: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
                <input
                  type="number"
                  placeholder="تا"
                  value={filters.maxKm}
                  onChange={(e) =>
                    setFilters({ ...filters, maxKm: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-primary-900 border border-primary-700 text-primary-100"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm bg-primary-700 hover:bg-primary-600 rounded-lg transition-colors"
              >
                حذف فیلترها
              </button>
              <button
                onClick={applyFilters}
                className="px-4 py-2 text-sm bg-accent-500 hover:bg-accent-600 text-primary-900 rounded-lg transition-colors"
              >
                اعمال فیلتر
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
