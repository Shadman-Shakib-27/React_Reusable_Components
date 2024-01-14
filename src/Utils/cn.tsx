import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// ...inputs Means Array Akare Nicchi.

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;
