import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

export function MeetCarousel() {
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
    },
    [autoplay]
  );

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

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* Slide 1 */}
          <div className="embla__slide meet__slide">
            <div className="!w-full h-[230px]">
              <div className="py-14 mx-4 md:mx-14 relative">
                <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-0"></span>
                <h4 className="text-2xl md:text-4xl text-gray-900">Meet the People</h4>
                <h4 className="text-2xl md:text-4xl text-gray-900 font-bold">
                  We are Working With
                </h4>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide meet__slide">
            <div className="!w-full h-[230px]">
              <div className="py-14 mx-4 md:mx-14 relative">
                <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-0"></span>
                <h4 className="text-2xl md:text-4xl text-gray-900">Meet the Developers</h4>
                <h4 className="text-2xl md:text-4xl text-gray-900 font-bold">
                  Building the Future
                </h4>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="embla__slide meet__slide">
            <div className="!w-full h-[230px]">
              <div className="py-14 mx-4 md:mx-14 relative">
                <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-0"></span>
                <h4 className="text-2xl md:text-4xl text-gray-900">Leadership Team</h4>
                <h4 className="text-2xl md:text-4xl text-gray-900 font-bold">
                  Driving the Strategy
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 -mt-20 mb-5 mx-10">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className={`p-2 rounded-full z-50 ${
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
          className={`p-2 rounded-full z-50 ${
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
  );
}
