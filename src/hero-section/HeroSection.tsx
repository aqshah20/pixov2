
function HeroSection() {
  return (
    <div className="w-full mt-20 flex flex-wrap md:px-10 px-8 lg:px-32 pt-16 md:pt-20">
      <div className="flex flex-col justify-center w-full sm:w-1/2 ">
        <h2 className="md:text-5xl text-3xl font-light">
          Great <span className="text-gradient">software</span> is
        </h2>
        <h2 className="font-bold md:text-5xl text-3xl mt-3">
          built by great{" "}
          <span className="md:text-5xl text-3xl text-gradient font-bold">
            teams
          </span>
        </h2>
        <p className="text-lg mt-8 text-gray-700 w-4/5">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="bg-purple text-white self-start font-medium mt-10 px-5 py-2 rounded-md">
          Let’s get started!
        </button>
      </div>
      <div className="sm:flex hidden w-1/2 justify-center items-center">
        <img src="/images/LandingPageImage.png" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
