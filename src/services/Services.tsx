import { ServiceCarousel } from "./ServiceCarousel";

function Services() {
  return (
    <div>
      <h4 className="text-2xl my-8 text-center md:text-4xl font-bold">
        Services We Offer
      </h4>
      <ServiceCarousel />
    </div>
  );
}
{
  /* <div
className={`border rounded p-4 flex flex-col gap-5 items-start justify-center min-h-[250px] transition-all duration-300 ${
  selectedIndex === index
    ? "!border-purple !border-2 !bg-purple"
    : "border-transparent"
}`}
>
<div className="border inline-block rounded-full border-purple p-2">
  <img src="/images/Code.png" alt="" className="h-6" />
</div>
<h6 className="text-lg font-semibold text-gradient">
  Web Design & Development
</h6>
<p className="text-gray-700 text-sm">
  A Website is an extension of yourself and we can help you to
  express it properly. Your website is your number one marketing
  asset because we live in a digital age.
</p>
</div> */
}
export default Services;
