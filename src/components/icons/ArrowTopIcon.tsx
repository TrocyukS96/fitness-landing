const ArrowTopIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1284_2)">
        <path
          d="M21.4165 14.9513L3.65975 15.0876"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M16.3585 21.6236L21.1296 15.8964C21.2342 15.7724 21.3129 15.6251 21.3613 15.463C21.4096 15.3009 21.4266 15.1272 21.4112 14.9521C21.3958 14.7769 21.3483 14.6038 21.2716 14.4426C21.1949 14.2815 21.0904 14.1355 20.9641 14.0133L15.1934 8.36548"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1284_2">
          <rect
            width="20"
            height="20"
            fill="currentColor"
            transform="translate(14.3262 0.873901) rotate(42.2685)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowTopIcon;
