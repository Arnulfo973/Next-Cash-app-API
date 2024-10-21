import { SignUpViewPage } from '@/sections/signup/view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default function Page() {
  return <SignUpViewPage />;
}