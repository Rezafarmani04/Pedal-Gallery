import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        صفحه مورد نظر پیدا نشد
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        بازگشت به خانه
      </Link>
    </main>
  );
}

export default NotFound;