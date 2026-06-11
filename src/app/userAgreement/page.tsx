import Footer from '@/components/footer/Footer';
import LegalInfoLayout from '@/components/legal-info/LegalInfoLayout';
import UserAgreement from '@/components/legal-info/UserAgreement';
import { TopMenu } from '@/components/top-menu/TopMenu';
import st from './UserAgreement.module.scss';

export default function Page() {
  return (
    <div className={st.container}>
      <TopMenu />
      <main>
        <div className={st.content}>
          <LegalInfoLayout title={"User agreement"}>
            <UserAgreement />
          </LegalInfoLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}
