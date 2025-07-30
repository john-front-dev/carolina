import { ReactNode } from "react";

type ButtonProps = {
  size?: "md" | "lg";
  children: ReactNode;
};

export const Button = ({ children, size = "md" }: ButtonProps) => {
  return (
    <button
      className={`bg-black text-white rounded-3xl px-[35px] text-center hover:text-black hover:bg-[#F4F1F1] transition-colors duration-300 cursor-pointer ${
        size === "lg" ? "h-[48px]" : "h-[40px]"
      }`}
    >
      {children}
    </button>
  );
};
