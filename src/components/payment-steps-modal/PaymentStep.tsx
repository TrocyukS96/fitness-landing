'use-client'
import Image from "next/image";
import Button from "../button/Button";
import Title from "../title/Title";
import styles from './PaymentStepsModal.module.scss';
import { packagesData } from "@/utils/packages-data";
import { PackageType } from "@/types";

interface Props {
    type: PackageType;
    isAuth: boolean
    pay: (sum: number) => void
    onAuth: () => void
}

const PaymentStep = ({ pay, isAuth, type="base", onAuth }: Props) => {
    const packageItem = packagesData.find(pkg => pkg.type === type)
    return (
        <div className={styles.paymentWrapper}>
            <div className={styles.paymentContent}>
                <Title
                    className={styles.title}
                    value="Payment method"
                    type="modal"
                />
                <div className={styles.paymentTypes}>
                    <div className={styles.payment}>
                        <Image
                            src="/alfa-bank-logo.png"
                            width={120}
                            height={120}
                            alt="alfa bank logo"
                        />
                        <span>Alfa-Bank (Belarus)</span>
                    </div>
                </div>
                <div className={styles.resultData}>
                    <h6 className={styles.resultDataSubtitle}>{type === "base" ? "Basic" : "Premium"} plan</h6>
                    <h6 className={styles.resultDataTitle}>Total to pay:</h6>
                    <div className={styles.resultDataItems}>
                    <div className={styles.resultDataItem}>{packageItem?.price.price.byn} BYN</div>
                        <div className={styles.resultDataItem}>{packageItem?.price.price.rub} RUB</div>
                        <div className={styles.resultDataItem}>{packageItem?.price.price.eur} EUR</div>
                        <div className={styles.resultDataItem}>{packageItem?.price.price.usd} USD</div>
                    </div>
                </div>
                <Button
                    className={styles.payButton}
                    onClick={isAuth ? () => pay(packageItem?.price.price.byn || 0) : onAuth}
                >
                    {isAuth ? "Pay now" : "Sign in to pay"}
                </Button>
            </div>
        </div>
    )
}

export default PaymentStep;