"use client";

import Image from "next/image";
import logo from "@/shared/icons/logo.png";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";

type LinkItem = {
  name: string;
  url: string;
  active: boolean;
};

export const Header = () => {
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
    <div className="flex justify-between items-center px-10 py-4 sticky top-0 bg-white z-50">
      <Image src={logo} alt="logo" width={137} height={104} priority={true} />
      <ul className="flex gap-4">
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
    </div>
  );
};
