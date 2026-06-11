const ArrowButtonIcon = ({className}:{className?:string}) => {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{fill: 'currentColor'}}>
            <path d="M12.6715 1.47567C12.6978 0.924006 12.2719 0.455502 11.7202 0.429232L2.73042 0.00114613C2.17876 -0.0251234 1.71026 0.400789 1.68399 0.952449C1.65772 1.50411 2.08363 1.97261 2.63529 1.99888L10.6262 2.3794L10.2457 10.3703C10.2194 10.922 10.6454 11.3905 11.197 11.4168C11.7487 11.4431 12.2172 11.0171 12.2435 10.4655L12.6715 1.47567ZM0.672668 11.4281L1.34534 12.168L12.3453 2.16804L11.6727 1.4281L11 0.688161L-4.33896e-06 10.6882L0.672668 11.4281Z" fill="black" />
        </svg>
    );
};

export default ArrowButtonIcon;