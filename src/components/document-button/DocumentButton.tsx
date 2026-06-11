"use client";
import { usePathname } from "next/navigation";
import Button from "../button/Button";
import styles from "./DocumentButton.module.scss";

const DocumentButton = () => {
  const pathName = usePathname();

  const getValidDocumentAttrs = (): { path: string; fileName: string } => {
    let path = "";
    let fileName = "";

    if (pathName.includes("offerta")) {
      path = "/docs/Договор публичной оферты.pdf";
      fileName = "Договор публичной оферты.pdf";
    }

    if (pathName.includes("policy")) {
      path = "/docs/Политика конфиденциальности.pdf";
      fileName = "Политика конфиденциальности.pdf";
    }

    if (pathName.includes("userAgreement")) {
      path = "/docs/Пользовательское соглашение.pdf";
      fileName = "Пользовательское соглашение.pdf";
    }

    return {
      path,
      fileName,
    };
  };

  const handleDownload = () => {
    const { path, fileName } = getValidDocumentAttrs();
    // Create a download link
    const link = document.createElement("a");
    link.href = path;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.documentBlock}>
      <Button variant="primary" onClick={handleDownload}>
        Download document
      </Button>
    </div>
  );
};

export default DocumentButton;
