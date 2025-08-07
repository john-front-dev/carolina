import Image from "next/image";
import Img from "../assets/ContactsImg.png";
import {
  EmailIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/shared/icons";

export const Contacts = () => {
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-[24px] text-center mb-10">Наши контакты</h2>
      <div className="flex justify-between gap-[96px] h-[432px] pl-[180px]">
        <div className="flex flex-col justify-between items-start">
          <div className="mt-[83px]">
            <h2 className="text-[32px] font-medium">Связаться с нами</h2>
            <p className="leading-[25px] mt-3 text-secondary">
              Чтобы связаться с нами напишите письмо на контакты ниже
            </p>
          </div>
          <div>
            <div className="flex justify-between w-full gap-7">
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-[#F5F5F5] rounded-full">
                  <PhoneIcon />
                </div>
                <span className="text-[18px]">+998 99 346 35 46</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-[#F5F5F5] rounded-full">
                  <EmailIcon />
                </div>
                <span className="text-[18px]">carolinauzb@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="p-2.5 bg-[#F5F5F5] rounded-full">
                <TelegramIcon />
              </div>
              <div className="p-2.5 bg-[#F5F5F5] rounded-full">
                <WhatsAppIcon />
              </div>
              <div className="p-2.5 bg-[#F5F5F5] rounded-full">
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="self-end">
          <Image width={712} height={432} src={Img} alt="Img" />
        </div>
      </div>
    </div>
  );
};
