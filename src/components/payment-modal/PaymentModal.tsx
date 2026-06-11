"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PaymentModal.module.scss';
import Button from '../button/Button';
import { CircleCheckBigIcon, CircleXIcon } from 'lucide-react';

const PaymentModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"success" | "fail" | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/success') {
            setStatus('success');
            setIsOpen(true);
        } else if (pathname === '/fail') {
            setStatus('fail');
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [pathname]);

    const closeModal = () => {
        setIsOpen(false);
        window.history.pushState(null, '', '/');
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.topBar}>
                <h2 className={styles.title}>
                    {status === 'success' ? 'Payment successful' : 'Payment failed'}
                </h2>
                {
                    status === 'success' ? (
                        <CircleCheckBigIcon className={styles.icon} color='var(--color-success)' size={24} />
                    ) : (<CircleXIcon className={styles.icon} color='var(--color-error)' size={24} />)
                }
                </div>
                <p className={styles.message}>
                    {status === 'success'
                        ? 'Your payment has been successfully processed.'
                        : 'An error occurred while processing your payment. Please try again.'}
                </p>
                <Button size='small' onClick={closeModal} className={styles.closeButton}>
                    Close
                </Button>
            </div>
        </div>
    );
};

export default PaymentModal;