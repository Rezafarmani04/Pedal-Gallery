import Link from 'next/link';

function LoginMessage() {
  return (
    <div className="grid bg-primary-900 ">
      <p className="text-center text-xl py-12 self-center">
        لطفا{' '}
        <Link href="/login" className="underline text-accent-500">
          ثبت نام کنید
        </Link>{' '}
        تا به شماره ی کارشناسان برای بازدید دسترسی پیدا کنید.
      </p>
    </div>
  );
}

export default LoginMessage;
