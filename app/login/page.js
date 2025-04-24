import SignInButton from '../_components/SignInButton';

export default function Page() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 mt-5 md:mt-10 items-center px-4 md:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
        برای دسترسی به این صفحه ثبت نام کنید.
      </h2>

      <SignInButton className="w-full sm:w-auto" />
    </div>
  );
}
