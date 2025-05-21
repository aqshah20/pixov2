function Companies() {
  return (
    <div className="relative">
      <div className="bg-lightGray min-h-28 flex flex-wrap items-center z-30 justify-evenly gap-6 px-4 py-6 relative overflow-visible">
        {[
          "Company1.png",
          "Company2.png",
          "Company3.png",
          "Company4.png",
          "Company5.png",
          "Company6.png",
        ].map((src, i) => (
          <img
            key={i}
            src={`../../public/images/${src}`}
            alt={`Company ${i + 1}`}
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain max-w-[120px] w-auto"
          />
        ))}
      </div>

      {/* Half-circle above the logos */}
      <span className="w-14 h-14 bg-gradient-225 absolute -top-7 left-[58%] -translate-x-1/2 rounded-full z-0 overflow-hidden"></span>
    </div>
  );
}

export default Companies;
