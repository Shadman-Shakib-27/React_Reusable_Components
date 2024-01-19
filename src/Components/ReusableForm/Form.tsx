import { createContext } from "react";
import cn from "../../Utils/cn";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double }) => {
  return (
    <FormElementContext.Provider value={double}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "w-full mt-8 border border-r-gray-300 rounded-md shadow-md p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <h1>{children}</h1>
      </form>
    </FormElementContext.Provider>
  );
};

// Barrel Pattern E Export Default Korbo Na, Emne Korbo..
