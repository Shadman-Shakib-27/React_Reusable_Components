import { useContext } from "react";
import cn from "../../Utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("grid md:grid-cols-2 gap-5 p-2", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
