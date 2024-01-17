import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../Utils/cn";

//*`bg-red-500 py-2 px-3 rounded-md ${className} ${variants == "outline" ? " border bg-opacity-10 border-purple-500" : ""`}

type TRef = HTMLButtonElement;

type TVariants = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variants: TVariants;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variants = "solid", ...rest }, ref) => {
    //
    const getVariants = () => {
      switch (variants) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getVariants(), className)}
      ></button>
    );
  }
);

export default Button;
