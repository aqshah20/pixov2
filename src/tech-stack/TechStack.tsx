import { useState } from "react";

function TechStack() {
  const [activeTab, setActiveTab] = useState("Backend");

  const tabs = [
    "Backend",
    "Frontend",
    "Databases",
    "CMS",
    "Cloud Testing",
    "DevOps",
  ];

  return (
    <div className="flex flex-col items-center gap-8 md:gap-20 mb-16 overflow-hidden">
      <div className="inline-flex relative gap-2 mt-16 flex-col items-center p-5">
        <span className="w-16 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
        <h4 className="text-2xl md:text-4xl">Our</h4>
        <h4 className="text-2xl md:text-4xl font-bold">Tech Stack</h4>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between px-4 sm:px-10 md:px-20 gap-3 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-base sm:text-lg px-4 sm:px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "text-gradient"
                : "text-gray-900 hover:text-gradient"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-10 h-[3px] bg-gradient-225 rounded"></span>
            )}
          </button>
        ))}
      </div>

      <div className="flex lg:w-4/5 flex-wrap justify-center gap-6 px-4">
        <img
          src="/images/NodeJS.png"
          alt="NodeJS"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/PHP.png"
          alt="PHP"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/MySql.png"
          alt="MySQL"
          className="w-32 sm:w-36 md:w-40"
        />
        <img
          src="/images/Java.png"
          alt="Java"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/DotNet.png"
          alt=".NET"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/Python.png"
          alt="Python"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/RubyOnRails.png"
          alt="Ruby on Rails"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/Go.png"
          alt="Go"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
        <img
          src="/images/MongoDB.png"
          alt="MongoDB"
          className="w-24 sm:w-28 md:w-32 object-cover"
        />
      </div>
      <div className="inline-flex relative gap-2 mt-10 flex-col items-center p-5">
        <span className="w-16 h-1 bg-gradient-225 absolute top-0 left-1/2 -translate-x-1/2"></span>
        <h4 className="text-2xl md:text-4xl">How development </h4>
        <h4 className="text-2xl md:text-4xl font-bold">
          through Alcaline works
        </h4>
      </div>
      {/* ✅ DESKTOP ONLY VERSION */}
      <div className="hidden lg:flex flex-col items-center justify-center">
        <div className="flex flex-col items-center lg:items-start justify-center lg:w-[90%]">
          {/* Top Row */}
          <div className="flex lg:px-10 w-[90%] flex-wrap justify-center lg:flex-nowrap gap-10 items-center lg:items-start">
            <div className="flex flex-col relative items-center">
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#1</span> Assemble the right
                  team
                </h1>
                <p className="text-gray-600 text-sm">
                  We handle all aspects of vetting and choosing the right team
                  that you don't have the time, expertise, or desire to do.
                </p>
              </div>
              <span className="mt-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
            </div>

            <div className="flex flex-col relative items-center">
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#3</span> Tech architecture
                  goals
                </h1>
                <p className="text-gray-600 text-sm">
                  We break monolithic apps into microservices. Decoupling the
                  code allows teams to move faster and more independently
                </p>
              </div>
              <span className="mt-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
            </div>

            <div className="flex flex-col relative items-center">
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#5</span> Code reviews
                </h1>
                <p className="text-gray-600 text-sm">
                  Code reviews before release help detect issues like memory
                  leaks, file leaks, performance signs, and general bad smells
                </p>
              </div>
              <span className="mt-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
            </div>
          </div>

          {/* Horizontal Connector Line */}
          <span className="w-full hidden lg:block h-[2px] bg-gradient-225 relative">
            {" "}
            <img
              className="absolute top-1/2 -right-20 -translate-x-1/2 -translate-y-1/2"
              src="/images/Trophy.png"
              alt=""
            />
          </span>

          {/* Bottom Row */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:ml-10 lg:px-10 w-[90%] gap-10 items-center lg:items-start">
            <div className="flex flex-col relative items-center">
              <span className="mb-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#2</span> Sprint planning
                </h1>
                <p className="text-gray-600 text-sm">
                  Sprint roadmap is a collective planning effort. Team members
                  collaborate to clarify items and ensure shared understanding.
                </p>
              </div>
            </div>

            <div className="flex flex-col relative items-center">
              <span className="mb-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#4</span> Standups & weekly
                  demos
                </h1>
                <p className="text-gray-600 text-sm">
                  Standups, weekly demos, and weekly reviews make sure everyone
                  is on the same page and can raise their concerns.
                </p>
              </div>
            </div>

            <div className="flex flex-col relative items-center">
              <span className="mb-4 w-[2px] h-12 bg-gradient-225 hidden lg:block"></span>
              <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full max-w-md">
                <h1 className="text-lg text-gray-900 font-bold">
                  <span className="text-gradient">#6</span> Iterative delivery
                </h1>
                <p className="text-gray-600 text-sm">
                  We divide the implementation process into several checkpoints
                  rather than a single deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   {/* ✅ MOBILE/TABLET VERSION (up to md) */}
<div className="lg:hidden flex flex-col items-center justify-center w-full px-4 gap-6">

{/* Row 1: #1 + #2 */}
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
  {/* #1 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#1</span> Assemble the right team
    </h1>
    <p className="text-gray-600 text-sm">
      We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
    </p>
  </div>

  {/* #2 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#2</span> Sprint planning
    </h1>
    <p className="text-gray-600 text-sm">
      Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
    </p>
  </div>
</div>

{/* Row 2: #3 + #4 */}
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
  {/* #3 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#3</span> Tech architecture goals
    </h1>
    <p className="text-gray-600 text-sm">
      We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.
    </p>
  </div>

  {/* #4 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#4</span> Standups & weekly demos
    </h1>
    <p className="text-gray-600 text-sm">
      Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
    </p>
  </div>
</div>

{/* Row 3: #5 + #6 */}
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
  {/* #5 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#5</span> Code reviews
    </h1>
    <p className="text-gray-600 text-sm">
      Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.
    </p>
  </div>

  {/* #6 */}
  <div className="flex flex-col border h-[150px] justify-center p-6 rounded-lg w-full sm:w-1/2 max-w-md">
    <h1 className="text-lg text-gray-900 font-bold">
      <span className="text-gradient">#6</span> Iterative delivery
    </h1>
    <p className="text-gray-600 text-sm">
      We divide the implementation process into several checkpoints rather than a single deadline.
    </p>
  </div>
</div>
</div>

    </div>
  );
}

export default TechStack;
