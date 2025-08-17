"use client";

import Image from "next/image";
import logo from "@/shared/icons/logo.png";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";
import { BurgerIcon } from "@/shared/icons";

type LinkItem = {
  name: string;
  url: string;
  active: boolean;
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState<LinkItem[]>([
    { name: "Header", url: "/", active: false },
    { name: "Почему мы", url: "#whyUs", active: false },
    { name: "О нас", url: "#aboutUs", active: false },
    { name: "Бренды", url: "#brands", active: false },
    { name: "Контакты", url: "#contacts", active: false },
  ]);

  useEffect(() => {
    const hash = window.location.hash || "/";
    setLinks((prev) =>
      prev.map((link) => ({
        ...link,
        active: link.url === hash,
      }))
    );
  }, []);

  const handleClick = (url: string) => {
    setLinks((prev) =>
      prev.map((link) => ({
        ...link,
        active: link.url === url,
      }))
    );
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 container mx-auto">
      <Image src={logo} alt="logo" width={137} height={104} priority={true} />
      <ul className="laptop:flex gap-4 hidden">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url} onClick={() => handleClick(link.url)}>
              <Button size="md" type={link.active ? "button" : "text"}>
                {link.name}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsOpen(!isOpen)} className="laptop:hidden">
        <BurgerIcon />
      </button>
      {isOpen && (
        <div className="absolute top-20 right-0 w-screen h-screen bg-white z-20 flex flex-col gap-4">
          <ul className="container mx-auto  pt-10 px-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  onClick={() => {
                    handleClick(link.url);
                    setIsOpen(false);
                  }}
                >
                  <Button size="md" type={link.active ? "button" : "text"}>
                    {link.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
