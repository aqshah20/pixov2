function HireCta() {
    return (
      <div className="w-full flex justify-center items-center my-10 px-4">
        <div className="w-full md:w-4/5 bg-lightBlue rounded-xl flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-16 sm:py-20 gap-6">
          <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center md:text-left md:w-4/5 lg:w-3/5 text-gray-900">
            Hire the best developers and designers around!
          </h4>
          <div className="relative mt-10 md:mt-0">
            <button className="bg-gradient-yellow2 text-white px-6 py-3 items-center gap-2 text-sm font-semibold rounded-md">
              Hire Top Developers
            </button>
            <img
              className="absolute -top-10 md:-top-16 left-1/2 h-8 md:h-10 -translate-x-1/2"
              src="/images/btnimage1.png"
              alt=""
            />
            <img
              className="absolute -bottom-10 md:-bottom-16 left-1/2 h-8 md:h-10 -translate-x-1/2"
              src="/images/btnimage2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default HireCta;
  