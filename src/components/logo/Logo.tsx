import Link from "next/link";
import stc from "./Logo.module.scss";
import Image from "next/image";

interface Props {
  imageColor?: "white" | "black";
  className?: string;
}

const Logo = ({ imageColor = "black", className = "" }: Props) => {
  return (
    <Link
      href="/"
      className={`${stc.Logo} ${className}`}
      aria-label="Go to homepage"
    >
      <Image
        src={
          imageColor === "black" ? "/logo_mobile.svg" : "/logo_mobile_white.svg"
        }
        className={stc.Logo_Img}
        width={122}
        height={34}
        alt="PolovtsevFit Logo"
        priority
      />
    </Link>
  );
};

export default Logo;
