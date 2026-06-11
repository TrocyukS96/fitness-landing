import { TopMenu } from "@/components/top-menu/TopMenu";
import st from "./Offerta.module.scss";
import Footer from "@/components/footer/Footer";
import OffertaAgreement from "@/components/legal-info/OffertaAgreement";
import LegalInfoLayout from "@/components/legal-info/LegalInfoLayout";

export default function Page() {
  return (
    <div className={st.container}>
      <TopMenu />
      <main>
        <div className={st.content}>
          <LegalInfoLayout title={"Offer agreement"}>
            <OffertaAgreement />
          </LegalInfoLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}
