import { ArrowRight } from "lucide-react";
import VideoModal from "./VideoModal";

function ClientTrustSection() {
  return (
      <div className="w-full flex flex-wrap md:flex-nowrap md:px-10 gap-10 md:gap-20 px-8 lg:px-32 py-20">
        <div className="flex relative flex-col justify-center w-full md:w-1/2 ">
          <span className="w-20 h-1 bg-gradient-225 absolute top-0 left-0"></span>
          <h2 className="md:text-4xl text-2xl mt-3">Leading companies trust us</h2>
          <h2 className="font-bold md:text-4xl text-2xl mt-3">to develop software</h2>
          <p className="text-lg mt-8 text-gray-700  text-start">
            We <span className="text-gradient">add development capacity</span>
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <button className="text-purple self-start font-medium mt-10 flex items-center gap-2">
            See more Information <ArrowRight className="text-purple size-5" />
          </button>
        </div>
        <VideoModal/>
      </div>
  );
}

export default ClientTrustSection;
