import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export function CustomerCarousel() {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay]
  );
  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const syncScroll = useCallback(() => {
    if (!emblaApi || !emblaApi2) return;

    const index1 = emblaApi.selectedScrollSnap();
    const index2 = emblaApi2.selectedScrollSnap();

    // Sync embla2 when embla1 changes
    if (index1 !== index2) {
      emblaApi2.scrollTo(index1);
    }
  }, [emblaApi, emblaApi2]);

  const reverseSyncScroll = useCallback(() => {
    if (!emblaApi || !emblaApi2) return;

    const index1 = emblaApi.selectedScrollSnap();
    const index2 = emblaApi2.selectedScrollSnap();

    // Sync embla1 when embla2 changes
    if (index1 !== index2) {
      emblaApi.scrollTo(index2);
    }
  }, [emblaApi, emblaApi2]);

  useEffect(() => {
    if (!emblaApi || !emblaApi2) return;

    emblaApi.on("select", syncScroll);
    emblaApi2.on("select", reverseSyncScroll);

    // Optional: initial sync
    emblaApi2.scrollTo(emblaApi.selectedScrollSnap());

    return () => {
      emblaApi.off("select", syncScroll);
      emblaApi2.off("select", reverseSyncScroll);
    };
  }, [emblaApi, emblaApi2, syncScroll, reverseSyncScroll]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap()); // track active index
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
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
    {
      title: "Client Testimonial",
      subtitle: "What They Say",
      text: "A great experience from start to finish. Communication was clear, deadlines were met, and the results spoke for themselves.",
    },
  ];

  return (
    <div className="mt-28 w-full overflow-hidden flex flex-col items-center relative">
      <div className="embla w-full">
        <div className="embla__viewport relative" ref={emblaRef2}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide meet__slide" key={index}>
                <div className="!w-full flex justify-center items-center relative">
                  <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
                  <div className="py-5 md:py-10 mx-6 md:mx-14 flex flex-col items-center gap-4">
                    <h4 className="text-2xl md:text-4xl text-gray-900 text-center">
                      {slide.title}
                    </h4>
                    <h4 className="text-2xl md:text-4xl text-gray-900 font-bold text-center">
                      {slide.subtitle}
                    </h4>
                    <div className="relative w-full md:w-1/2">
                      <span className="absolute md:top-4 top-2 -left-3 md:-left-6 text-gradient text-5xl font-serif">
                        ‛
                      </span>
                      <span className="absolute md:-bottom-4 -bottom-2 -right-2 md:-right-4 text-gradient text-5xl font-serif">
                        ‚
                      </span>

                      <p className="text-center text-lg mt-5 md:mt-10 text-gray-700">
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla w-4/5">
        <div className="embla__viewport relative" ref={emblaRef}>
          <div className="embla__container  mb-14">
            {slides.map((_, index) => (
              <div
                className={`embla__slide customer__slide h-[230px] ${
                  selectedIndex !== index && "mt-6 opacity-50"
                }`}
                key={index}
              >
                <div className="flex flex-col items-center">
                  <img
                    src="/images/Customer1.png"
                    className={
                      selectedIndex !== index ? "size-[100px]" : "size-[140px]"
                    }
                    alt=""
                  />
                  <div className="flex gap-1 items-center">
                    <Star className="size-4 fill-yellow-300 text-yellow-300" />
                    <Star className="size-4 fill-yellow-300 text-yellow-300" />
                    <Star className="size-4 fill-yellow-300 text-yellow-300" />
                    <Star className="size-4 fill-yellow-300 text-yellow-300" />
                    <Star className="size-4 fill-yellow-300 text-yellow-300" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h6
                      className={`text-lg ${
                        selectedIndex !== index
                          ? "text-gray-500"
                          : "text-purple font-bold"
                      } text-lg`}
                    >
                      {slides[index].title}
                    </h6>
                    <p className="text-gray-700">{slides[index].subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="hidden md:flex justify-end gap-3 -mt-20 mb-5 mx-10">
        <button
          onClick={() => {
            emblaApi2?.scrollPrev();
            emblaApi?.scrollPrev();
          }}
          disabled={!canScrollPrev}
          className={`p-2 rounded-full z-50  border border-purple cursor-pointer absolute top-[200px] left-10 -translate-y-1/2`}
        >
          <ArrowLeft className={"text-purple size-3 md:size-5"} />
        </button>
        <button
          onClick={() => {
            emblaApi2?.scrollNext();
            emblaApi?.scrollNext();
          }}
          disabled={!canScrollNext}
          className={`p-2 rounded-full z-50  border border-purple cursor-pointer absolute top-[200px] right-10 -translate-y-1/2`}
        >
          <ArrowRight className={"text-purple size-3 md:size-5"} />
        </button>
      </div>
    </div>
  );
}
