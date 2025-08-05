import { ReactNode } from "react";

type ButtonProps = {
  size?: "md" | "lg";
  children: ReactNode;
  type: "button" | "text";
};

export const Button = ({
  children,
  size = "md",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={` rounded-3xl px-[35px] text-center hover:text-black hover:bg-[#F4F1F1] transition-colors duration-300 cursor-pointer ${
        size === "lg" ? "h-[48px]" : "h-[40px]"
      }
      ${type === "button" ? "bg-black text-white" : " bg-white text-black"}`}
    >
      {children}
    </button>
  );
};
