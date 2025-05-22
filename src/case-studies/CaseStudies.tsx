import { ChevronRight } from "lucide-react";

function CaseStudies() {
  return (
    <div className="bg-lightGray pb-10">
      <div className="mb-4 md:mb-20 w-full flex justify-center relative">
        <div className="inline-flex relative gap-2 mt-16 flex-col items-center p-5">
          <span className="w-16 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
          <h4 className="text-2xl md:text-4xl">Our Recent</h4>
          <h4 className="text-2xl md:text-4xl font-bold">Case Studies</h4>
        </div>
        <span className="w-5 h-5 hidden md:block rounded-full bg-gradient-225 absolute top-20 left-96 -translate-x-1/2"></span>
        <img
          src="/images/ArrowUp.png"
          alt=""
          className="h-52 hidden md:block absolute -top-28 z-40 left-52 -translate-x-1/2"
        />
        <img
          src="/images/ArrowDown.png"
          alt=""
          className="h-52 hidden md:block absolute -top-28 z-40 right-52"
        />
      </div>
      <div className="gap-5 px-10 md:px-20 space-y-10">
        {/* Card 1 — already responsive */}
        <div className="w-full flex flex-wrap bg-iceBlue rounded-xl border">
          <img
            src="/images/CaseStudy1.png"
            alt=""
            className="w-full lg:w-1/2"
          />
          <div className="w-full lg:w-1/2 text-gray-800 md:p-14 p-4 space-y-5">
            <h5 className="text-lg md:text-2xl lg:text-[28px] font-bold text-clamp-1">
              Website Design for SCFC Canada
            </h5>
            <p className="text-gray-700 text-sm md:text-base">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <button className="text-gradient ml-auto flex items-center gap-2 md:!mt-20 mt-10 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-4" />
            </button>
          </div>
        </div>

        {/* Card 2 — now responsive */}
        <div className="w-full flex flex-wrap bg-softGreen rounded-xl border">
          <img
            src="/images/CaseStudy2.png"
            alt=""
            className="w-full lg:w-1/2"
          />
          <div className="w-full lg:w-1/2 text-gray-800 md:p-14 p-4 space-y-5">
            <h5 className="text-lg md:text-2xl lg:text-[28px] font-bold">
              Website Design for SCFC Canada
            </h5>
            <p className="text-gray-700 text-sm md:text-base">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <button className="text-gradient ml-auto flex items-center gap-2 md:!mt-20 mt-10 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-4" />
            </button>
          </div>
        </div>

        {/* Card 3 — now responsive */}
        <div className="w-full flex flex-wrap bg-lightPink rounded-xl border">
          <img
            src="/images/CaseStudy3.png"
            alt=""
            className="w-full lg:w-1/2"
          />
          <div className="w-full lg:w-1/2 text-gray-800 md:p-14 p-4 space-y-5">
            <h5 className="text-lg md:text-2xl lg:text-[28px] font-bold">
              Website Design for SCFC Canada
            </h5>
            <p className="text-gray-700 text-sm md:text-base">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <button className="text-gradient ml-auto flex items-center gap-2 md:!mt-20 mt-10 text-sm font-semibold rounded-md">
              Read more
              <ChevronRight className="text-[#bd203d] size-4" />
            </button>
          </div>
        </div>
      </div>

      <button className="text-gradient text-xl ml-auto mr-20 flex items-center gap-2 mt-10 font-semibold  rounded-md">
        Read more
        <ChevronRight className="text-[#bd203d] size-6" />
      </button>
    </div>
  );
}

export default CaseStudies;
