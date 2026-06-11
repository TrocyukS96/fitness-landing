import Image from "next/image";
import styles from './Package.module.scss';
import Button from "../../button/Button";
import { IPackage, PackageType } from "@/types";
import { packagesData } from "@/utils/packages-data";

interface Props {
    packageItem: IPackage
    onStart: (type: PackageType) => void
}

const Package = ({ packageItem, onStart }: Props) => {
    const premiumPackage = packagesData.find(pkg => pkg.type === 'premium')
    return (
        <div className={`${styles.package} ${packageItem.type === 'base' ? styles.packageBase : ''}`}
        >
            {packageItem.type === 'premium' || packageItem.type === 'premiumBonus' && (
                <div className={styles.reaction}>
                    <Image
                        width={60}
                        height={60}
                        src="/icons/fire-icon.png"
                        alt="reaction icon"
                    />
                </div>
            )}
            <div className={styles.packageContent}>
                <div className={styles.packageContentTop}>
                    <h6 className={styles.priceTitle}>{packageItem.title}</h6>
                    {packageItem.type === 'premium' || packageItem.type === 'premiumBonus' && (
                        <div className={styles.priceDiscount}>
                            <div className={styles.priceDiscountTop}>First month: <span>{premiumPackage?.price.label}</span></div>
                            <div className={styles.priceDiscountBottom}>from the second month</div>
                        </div>
                    )}
                    <div className={styles.priceWrap}>
                        <div className={styles.price}>{packageItem.price.price.eur}€</div>
                        {packageItem.price.period && (
                            <div className={styles.pricePeriod}>{`in ${packageItem.price.period}`}</div>
                        )}
                    </div>
                    <div className={styles.additionalInfo}>
                        ({packageItem.price.price.byn} BYN, {packageItem.price.price.rub} RUB, {packageItem.price.price.usd} USD, {packageItem.price.price.eur} EUR)
                    </div>
                    <div className={styles.priceInfo}
                    >
                        <ul className={styles.priceList}>
                            {packageItem.features.map((feature, index) => (
                                <li className={styles.priceItem} key={index}>
                                    <div className={styles.priceDotIcon} />
                                    <span className={styles.priceItemText}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className={styles.priceBtn}
                    onClick={() =>
                        onStart(packageItem.type === 'premiumBonus' ? 'premium' : packageItem.type)
                    }
                >
                    Buy
                </Button>
            </div>
        </div>
    )
}

export default Package;