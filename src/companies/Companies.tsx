function Companies() {
  return (
    <div className="relative">
      <div className="bg-lightGray min-h-28 flex flex-wrap items-center z-30 justify-evenly gap-6 px-4 py-6 relative overflow-visible">
        <img
          src="/images/Company1.png"
          alt="Company 1"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
        <img
          src="/images/Company2.png"
          alt="Company 2"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
        <img
          src="/images/Company3.png"
          alt="Company 3"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
        <img
          src="/images/Company4.png"
          alt="Company 4"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
        <img
          src="/images/Company5.png"
          alt="Company 5"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
        <img
          src="/images/Company6.png"
          alt="Company 6"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
        />
      </div>

      {/* Half-circle above the logos */}
      <span className="w-14 h-14 bg-gradient-225 absolute -top-7 left-[58%] -translate-x-1/2 rounded-full z-0 overflow-hidden"></span>
    </div>
  );
}

export default Companies;
