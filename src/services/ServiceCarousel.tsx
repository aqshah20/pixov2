import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const slides = [
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Custom Software Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "UI/UX Design",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Digital Marketing",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Data Science & Analytics",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export function ServiceCarousel() {
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const progress = ((selectedIndex + 1) / slides.length) * 100;
  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Set initial index
    emblaApi.on("select", onSelect); // Listen for changes
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container h-[300px] mb-14">
          {slides.map((_, index) => (
            <div className="embla__slide service__slide" key={index}>
              <div
                className={` p-4 flex flex-col gap-5 items-start justify-center min-h-[280px] transition-all duration-300 rounded-lg
                  ${
                    selectedIndex === index
                      ? "border-2 border-purple mt-10  bg-purple/5 shadow-xl"
                      : "border border-transparent"
                  }`}
              >
                <div className="border inline-block rounded-full border-purple p-2">
                  <img src="/images/Code.png" alt="" className="h-6" />
                </div>
                <h6
                  className={`${
                    selectedIndex === index ? "text-gradient" : "text-gray-800"
                  } text-xl font-semibold`}
                >
                  {slides[index].title}
                </h6>
                <p className="text-gray-700 text-sm">
                  {slides[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {emblaApi && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === selectedIndex ? "bg-gradient-225" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
        <div className="flex items-center absolute right-20 bottom-0 gap-2 w-[120px]">
          {/* Current Slide Number */}
          <span className="text-gray-400 font-medium text-xs leading-none">
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>

          {/* Progress Bar */}
          <div className="relative flex-1 h-[2px] bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-purple transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Total Slides */}
          <span className="text-purple font-medium text-xs leading-none">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
