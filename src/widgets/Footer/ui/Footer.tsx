import Image from "next/image";
import logo from "@/shared/icons/logo.png";
import Link from "next/link";

type LinkItem = {
  name: string;
  url: string;
};

export const Footer = () => {
  const links = [
    { name: "Header", url: "/" },
    { name: "О нас", url: "#aboutUs" },
    { name: "Бренды", url: "#brands" },
    { name: "Контакты", url: "#contacts" },
  ] as LinkItem[];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto flex justify-between items-center pl-10 pt-7.5 pr-[66px] pb-[72px] text-secondary">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="logo" width={105} height={80} />
          <span className="w-[150px] laptop:w-auto">
            Мы открыты в работе, честны в расчётах и всегда на связи. Для нас
            важно не <br /> просто продать, а выстроить доверие.
          </span>
        </div>
        <ul className="flex flex-col laptop:flex-row gap-4 laptop:gap-[80px]">
          {links.map((link) => (
            <Link key={link.name} href={link.url}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
