import { ArrowLeft } from 'lucide-react';
import styles from './BackBtn.module.scss';

interface Props {
    title: string
    changeStep: () => void
}

const BackBtn = ({ title, changeStep }: Props) => {
    return (
        <div
            className={styles.backBtn}
            onClick={changeStep}
        >
            <ArrowLeft />
            <div>{title}</div>
        </div>
    )
}

export default BackBtn;