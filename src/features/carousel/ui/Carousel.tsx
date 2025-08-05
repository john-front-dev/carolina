import Image from "next/image";
import carolina from "../assets/carolina.png";
import star from "../assets/star.png";

export const Carousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="carousel-track flex items-center">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="mx-4 shrink-0">
            <Image
              src={i % 2 === 0 ? carolina : star}
              alt={`img-${i}`}
              className={
                i % 2 === 0
                  ? "w-[182px] h-[55px] object-contain"
                  : "w-[36px] h-[36px] object-contain"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
