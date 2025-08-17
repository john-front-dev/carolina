import Image from "next/image";
import Circle from "../assets/Circle.png";
import { WhyUsCard } from "@/entities/whyUs";
import {
  GlobalIcon,
  UsersIcon,
  HealthIcon,
  AdaptationIcon,
} from "@/shared/icons";

export const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 laptop:py-[100px] container mx-auto">
      <h2 className="text-[32px] laptop:text-[24px]">Почему Мы</h2>
      <div className="flex flex-col gap-8 relative pt-10 px-4 laptop:px-0">
        <div className="hidden laptop:block">
          <Image src={Circle} alt="Circle" />
          <h2 className="absolute text-center top-68 left-56 z-[20] font-medium text-[32px]">
            Почему <br /> Мы?
          </h2>
        </div>
        <WhyUsCard
          className="laptop:absolute top-10 -left-84"
          title="Международное партнёрство"
          description="Мы напрямую сотрудничаем с производителями из Китая, Турции и Египта, что позволяет нам предлагать качественную продукцию по конкурентным ценам без посредников."
          icon={<GlobalIcon />}
        />
        <WhyUsCard
          className="laptop:absolute top-10 -right-84"
          title="Опыт и репутация"
          description="Мы уверенно работаем на рынке и знаем, как выстраивать долгосрочные отношения с партнёрами. Надёжность — наш главный принцип."
          icon={<UsersIcon />}
        />
        <WhyUsCard
          className="laptop:absolute bottom-10 -left-84"
          title="Надёжная логистика по всему Узбекистану"
          description="Мы выстроили эффективную систему поставок по всей стране. Ваш груз прибудет точно в срок — в любой регион."
          icon={<HealthIcon />}
        />
        <WhyUsCard
          className="laptop:absolute bottom-10 -right-84"
          title="Индивидуальный подход"
          description="Мы адаптируемся под нужды каждого клиента: гибкие условия, персональный менеджер и сопровождение на всех этапах сделки."
          icon={<AdaptationIcon />}
        />
      </div>
    </div>
  );
};
