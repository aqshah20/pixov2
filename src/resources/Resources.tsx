import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight } from "lucide-react";

export function ResourcesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      dragFree: false,
      watchDrag: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        startDelay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSelect = () => {
    if (!emblaApi) return;
  };

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
    <div className="flex flex-col items-center gap-8 md:gap-20 mb-16 overflow-hidden">
      <div className="inline-flex relative gap-2 md:mt-16 flex-col items-center p-5">
        <span className="w-16 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
        <h4 className="text-2xl md:text-4xl">Featured</h4>
        <h4 className="text-2xl md:text-4xl font-bold">Resources</h4>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource1.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource2.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource3.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
            {/* Slide 1 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource1.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource2.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="embla__slide resource__slide px-6">
              <div className="space-y-2">
              <img src="/images/Resource3.png" className="w-full" alt="" />
              <h6 className="text-base font-medium text-gray-800">
              How to Build a Scalable Application up to 1 Million Users on AWS
              </h6>
              <button className="text-gradient ml-auto flex items-center gap-2 !mt-8 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-5" />
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
