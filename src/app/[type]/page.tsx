import Footer from "@/components/footer/Footer";
import { Sections } from "@/components/sections/Sections";
import { TopMenu } from "@/components/top-menu/TopMenu";
import st from "@/styles/app/MainPage.module.scss";

export default function Page() {
  return (
    <div className={st.Container}>
      <TopMenu />
      <Sections />
      <Footer />
    </div>
  );
}
