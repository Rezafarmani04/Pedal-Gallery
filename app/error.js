'use client';

export default function Error({ reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">خطایی رخ داده</h1>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        مجدد تلاش کنید
      </button>
    </main>
  );
}
