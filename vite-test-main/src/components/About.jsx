import React from "react";
import Heading from "./Heading";

const About = () => {
  return (
    <section className=" hover:border hover:border-[#B1CAFD]">
      <div className="container mx-auto px-20 py-24">
        <div className="text-white">
          {/* heading */}
          <Heading text="My process to design" />
          {/* Abouts */}
          <div className="space-y-20 max-w-xl">
            {/* about 1 */}
            <div className="flex  gap-16">
              <div className="flex flex-col justify-end gap-5">
                <button className="size-12 rounded-full border border-white inline-flex justify-center items-center text-white">
                  1
                </button>
                <div className=" h-[80%] ml-5 border-s border-white/30">

                </div>
              </div>
              <div className="">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] relative mb-4">
                  <span className="absolute size-6 rotate-45 translate-x-2  bg-[#101111] top-0 my-auto bottom-0 left-1/2"></span>
                </div>
                <div className="space-y-5">
                  <h4 className="text-2xl">Step 1: Product design Research</h4>
                  <p className="md:leading-7">
                    This initial step involves a systematic and thorough
                    exploration of the market landscape, user needs, and
                    existing solutions.
                  </p>
                  <button className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full">
                    <p className="font-md px-5 py-3.5 bg-[#101111] rounded-full w-full h-full">
                      See Examples
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/* about 2 */}
            <div className="flex  gap-16">
              <div className="flex flex-col justify-end gap-5">
                <button className="size-12 rounded-full border border-white inline-flex justify-center items-center text-white">
                  2
                </button>
                <div className=" h-[70%] ml-5 border-s border-white/30">

                </div>
              </div>
              <div className="">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] relative mb-4">
                  <span className="absolute size-6 rotate-45   bg-[#101111] translate-y-2   bottom-0 mx-auto left-0 right-0"></span>
                </div>
                <div className="space-y-5">
                  <h4 className="text-2xl">Step 2: UI design in figma</h4>
                  <p className="md:leading-7">
                    This initial step involves a systematic and thorough
                    exploration of the market landscape, user needs, and
                    existing solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* about 3 */}
            <div className="flex  gap-16">
              <div className="flex flex-col items-center gap-32 ">
                <button className="size-12 rounded-full border border-white inline-flex justify-center items-center text-white">
                  3
                </button>
              </div>
              <div className="">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] relative mb-4">
                  <span className="absolute size-6 rotate-45   bg-[#101111] -translate-x-2   bottom-0 top-0 my-auto  left-0"></span>
                </div>
                <div className="space-y-5">
                  <h4 className="text-2xl">
                    Step 3: No-code develop in webflow
                  </h4>
                  <p className="md:leading-7">
                    This initial step involves a systematic and thorough
                    exploration of the market landscape, user needs, and
                    existing solutions.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
