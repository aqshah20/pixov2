import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 p-10 md:p-20">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-2/5 items-start justify-start gap-6">
        <img src="/images/Logo.png" alt="Logo" className="h-12" />
        <p className="text-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <img src="/images/FooterImage.png" alt="Footer Decorative" />
      </div>

      {/* Middle Section - Links */}
      <div className="w-full md:w-1/5">
        <h6 className="font-bold text-lg text-gray-700 mb-2">Links</h6>
        <ul>
          {["Home", "Services", "Case Studies", "Resources", "Blog", "Careers", "Areas We Serve"].map((item) => (
            <li key={item} className="text-base text-gray-600 mt-1">{item}</li>
          ))}
        </ul>
      </div>

      {/* Right Section - Contact */}
      <div className="w-full md:w-2/5 flex flex-col justify-between relative">
        <div>
          <h6 className="font-bold text-lg text-gray-700 mb-2">Contact Us</h6>
          <p className="text-base text-gray-600 mt-1 max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-base text-gray-600 mt-2">+908 89097 890</p>
        </div>

        <div className="flex gap-3 mt-6 md:mt-0 md:absolute md:bottom-0 md:right-0">
          {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
            <div key={platform} className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
              <img src={`/images/${platform}.png`} alt={platform} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
