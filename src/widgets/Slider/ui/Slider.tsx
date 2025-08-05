"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/shared/ui";
import Link from "next/link";
import Image from "next/image";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const slides = [{ img: img1 }, { img: img2 }, { img: img3 }];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideCount = slides.length;
  const slideWidth = 500;

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delay = 3000;
  const transitionDuration = 500;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, [isTransitioning]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, nextSlide]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (activeIndex >= slideCount) {
      setActiveIndex(0);
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = `translateX(0px)`;
        requestAnimationFrame(() => {
          if (containerRef.current) containerRef.current.style.transition = "";
        });
      }
    }
  };

  const getTranslateX = () => {
    return -activeIndex * slideWidth;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#f6eee6] py-[124px]">
      <div className="container mx-auto flex flex-col items-center pl-[120px] pr-[97px]">
        <div className="flex w-full justify-between items-center gap-12">
          <div>
            <h2 className="text-2xl mb-2">Dragon Parfume</h2>
            <h1 className="text-5xl font-bold mb-3">
              Beauty Inspired <br /> by Real Life
            </h1>
            <p className="mb-8 text-gray-500">
              The most selled product of our company. We <br /> are create
              Beauty Inspired by Real Life
            </p>
            <Link href={"#contacts"}>
              <Button>Contact us</Button>
            </Link>
          </div>

          <div
            className="overflow-hidden max-w-[500px] h-[500px] relative"
            style={{ width: slideWidth }}
          >
            <div
              className="flex"
              ref={containerRef}
              style={{
                width: slideWidth * (slideCount + 1),
                transform: `translateX(${getTranslateX()}px)`,
                transition: isTransitioning
                  ? `transform ${transitionDuration}ms ease`
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map(({ img }, idx) => (
                <div key={idx} style={{ minWidth: slideWidth }}>
                  <Image
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    width={slideWidth}
                    height={slideWidth}
                    className="object-contain"
                    draggable={false}
                    priority
                  />
                </div>
              ))}

              <div style={{ minWidth: slideWidth }}>
                <Image
                  src={slides[0].img}
                  alt="Slide duplicate"
                  width={slideWidth}
                  height={slideWidth}
                  className="object-contain"
                  draggable={false}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeIndex % slideCount ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
