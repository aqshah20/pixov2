import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export function CustomerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = [
    {
      title: "Meet the People",
      subtitle: "We are Working With",
      text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. Wouldn’t hesitate to introduce their work to someone else.",
    },
    {
      title: "Our Valued Clients",
      subtitle: "Trusted by Many",
      text: "The team delivered high-quality work on time and exceeded our expectations. We’ve seen significant growth since partnering with them.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
  ];

  return (
    <div className="embla mt-28">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide meet__slide" key={index}>
              <div className="!w-full flex justify-center items-center relative">
                <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
                <div className="py-10 mx-14 flex flex-col items-center gap-4">
                  <h4 className="text-2xl md:text-4xl text-gray-900 text-center">{slide.title}</h4>
                  <h4 className="text-2xl md:text-4xl text-gray-900 font-bold text-center">
                    {slide.subtitle}
                  </h4>
                  <p className="text-center text-lg mt-10 w-1/2 text-gray-700">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* <div className="embla__container h-[300px] mb-14">
          {slides.map((_, index) => (
            <div className="embla__slide service__slide" key={index}>
              <div
                className={` p-4 flex flex-col gap-5 items-start justify-center min-h-[280px] transition-all duration-300 rounded-lg
                 `}
              >
                <div className="border inline-block rounded-full border-purple p-2">
                  <img src="/images/Code.png" alt="" className="h-6" />
                </div>
                <h6 className={`text-xl font-semibold`}>
                  {slides[index].title}
                </h6>
                <p className="text-gray-700 text-sm">
                  {slides[index].text}
                </p>
              </div>
            </div>
          ))}
        </div> */}
  
        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 -mt-20 mb-5 mx-10">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className={`p-2 rounded-full z-50 absolute top-1/2 left-10 -translate-y-1/2 ${
              !canScrollPrev
                ? "border border-purple cursor-not-allowed"
                : "cursor-pointer bg-purple"
            }`}
          >
            <ArrowLeft
              className={
                canScrollPrev ? "text-white size-3 md:size-5" : "text-purple size-3 md:size-5"
              }
            />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className={`p-2 rounded-full z-50 absolute top-1/2 right-10 -translate-y-1/2 ${
              !canScrollNext
                ? "border border-purple cursor-not-allowed"
                : "cursor-pointer bg-purple"
            }`}
          >
            <ArrowRight
              className={
                canScrollNext ? "text-white size-3 md:size-5" : "text-purple size-3 md:size-5"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
