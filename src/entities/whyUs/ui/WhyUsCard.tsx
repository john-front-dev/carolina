import { JSX } from "react";

type WhyUsCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  className?: string;
};

export const WhyUsCard = ({
  icon,
  title,
  description,
  className,
}: WhyUsCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-3xl w-[405px] h-[221px] bg-[#F7F7F7] ${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-[10px] p-5">{icon}</div>
        <h3 className="text-[20px]">{title}</h3>
      </div>
      <p className="leading-5 text-secondary">{description}</p>
    </div>
  );
};
