import DocumentButton from "../document-button/DocumentButton";
import Title from "../title/Title";
import stc from "./LegalInfoLayout.module.scss";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const LegalInfoLayout = ({ title, children }: IProps) => {
  return (
    <div className={stc.content}>
      <div className={stc.top}>
        <Title value={title} type="section"/>

        {/* <DownloadIcon /> */}
      </div>
      <div className={stc.sections}>{children}</div>
      <DocumentButton />
    </div>
  );
};

export default LegalInfoLayout;
