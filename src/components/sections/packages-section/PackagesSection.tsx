"use client";
import Title from "@/components/title/Title";
import styles from "./PackagesSection.module.scss";
import { PackageType, SectionTypes } from "@/types";
import { useState } from "react";
import PaymentStepsModal from "@/components/payment-steps-modal/PaymentStepsModal";
import { packagesData } from "@/utils/packages-data";
import Package from "@/components/packages/package/Package";

const PackagesSection = () => {
  const [isOpenTariffModal, setIsOpenTariffModal] = useState(false);
  const [type, setType] = useState<PackageType>("base");

  const handleStartBuing = (type: PackageType) => {
    setType(type);
    setIsOpenTariffModal(prev=>(!prev))
  };

  return (
    <section className={styles.section} id={SectionTypes.TARIFFS}>
      <div className={styles.container}>
        <Title
          className={styles.sectionTitle}
          value="Choose a package"
          type="section"
        />
        <div className={styles.packages}>
      {
        packagesData.filter(pkg => !pkg.isHidden).map((pkg) => (
          <Package key={pkg.id} packageItem={pkg} onStart={handleStartBuing} />
        ))
      }
    </div>
      </div>
      <PaymentStepsModal
        type={type}
        isOpen={isOpenTariffModal}
        closeModal={() => setIsOpenTariffModal(false)}
      />
    </section>
  );
};

export default PackagesSection;
