import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import UserRegistrationForm from '../register-tables/user-register-fron';
import UserRegisterTable from '../register-tables';

const breadcrumbItems = [
  { title: 'MyPage', link: '/mypage' },
  { title: 'Register', link: '/mypage/register' }
];

type TEmployeeListingPage = {};

export default async function UserRegisterListingPage({}: TEmployeeListingPage) {

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Register`}
            description=""
          />
        </div>
        <Separator />
        <UserRegistrationForm/>
        <p className='py-5 text-medium font-bold text-center'>Register History</p>
        <UserRegisterTable/>
      </div>
    </PageContainer>
  );
}