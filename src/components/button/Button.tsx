import { ButtonHTMLAttributes, ReactNode } from "react";
import stc from './Button.module.scss';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "primary" | "secondary" | 'outline';
  size?: "small" | "medium" | "large";
}

const Button = ({ variant="primary",className='',disabled, children, size='medium', ...restProps }: ButtonProps) => {

    const getValidClass = () =>{
      let result = className

 

        if(variant==='primary'){
          result= `${stc.PrimaryButton} ${result}`
        }
        if(variant==='outline'){
          result= `${stc.OutlineButton} ${result}` 
        } if(variant==='secondary'){
          result= `${stc.SecondaryButton} ${result}`
        }
        if(size==='small'){
          result= `${stc.SmallButton} ${result}`
        }
        if(size==='large'){
          result= `${stc.LargeButton} ${result}`
        }
        if(size==='medium'){
          result= `${stc.MediumButton} ${result}`
        }

        if (disabled) {
          result = `${result} ${stc.Disabled} `;
        }
     
        return result
    }

  return (
    <button className={getValidClass()} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
