import { auth } from '@/app/_lib/auth';
import ClientProfileForm from './ClientProfileForm';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return <div>لطفاً ابتدا وارد شوید</div>;
  }

  return <ClientProfileForm session={session} />;
}
