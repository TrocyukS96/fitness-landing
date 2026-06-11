import { TopMenu } from '@/components/top-menu/TopMenu';
import st from './Policy.module.scss';
import LegalInfoLayout from '@/components/legal-info/LegalInfoLayout';
import Policy from '@/components/legal-info/Policy';
import Footer from '@/components/footer/Footer';

export default function Page() {
  return (
    <div className={st.container}>
      <TopMenu />
      <main>
        <div className={st.content}>
          <LegalInfoLayout title={"Privacy policy"}>
            <Policy />
          </LegalInfoLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}
