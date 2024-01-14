import cn from "../../Utils/cn";

//*`bg-red-500 py-2 px-3 rounded-md ${className} ${
//*   variants == "outline" ? " border bg-opacity-10 border-purple-500" : ""
//*  }`

const Button = ({ className, variants }) => {
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
  return <button className={cn(getVariants(), className)}>Click Me</button>;
};

export default Button;
