import React from "react";
import Heading from "./Heading";
import Layout from "./Layout";

const Testimonials = () => {
  return (
    <Layout>
{/* heading */}
      <Heading text="Client testimonials"/>  
      
      
       <div className="grid grid-cols-2 gap-x-14 gap-y-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7D7AFB00] rounded-3xl">
        <div className="bg-[#151515] w-full h-full px-6 py-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-[#878787]"></div>
              <div className="text-white ">
                <h5 className="mb-1">Client Name .</h5>
                <span className="text-xs">Product designer</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="url(#quoteGradient)"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFD49C" />
                  <stop offset="100%" stopColor="#7A87FB" />
                </linearGradient>
              </defs>
              <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
            </svg>
          </div>
          <p className="text-white text-sm xl:text-lg">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
          </p>
        </div>
      </div>
        ))}
        {/* testimonial 1
      <div className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7D7AFB00] rounded-3xl">
        <div className="bg-[#151515] w-full h-full px-6 py-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-[#878787]"></div>
              <div className="text-white ">
                <h5 className="mb-1">Client Name .</h5>
                <span className="text-xs">Product designer</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="url(#quoteGradient)"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFD49C" />
                  <stop offset="100%" stopColor="#7A87FB" />
                </linearGradient>
              </defs>
              <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
            </svg>
          </div>
          <p className="text-white text-sm leading-28">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
          </p>
        </div>
      </div>
      {/* testimonial 2 */}
      {/* <div className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7D7AFB00] rounded-3xl">
        <div className="bg-[#151515] w-full h-full px-6 py-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-[#878787]"></div>
              <div className="text-white ">
                <h5 className="mb-1">Client Name .</h5>
                <span className="text-xs">Product designer</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="url(#quoteGradient)"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFD49C" />
                  <stop offset="100%" stopColor="#7A87FB" />
                </linearGradient>
              </defs>
              <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
            </svg>
          </div>
          <p className="text-white text-sm">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
          </p>
        </div>
      </div> */}
      {/* testimonial 3 */}
      {/* <div className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7D7AFB00] rounded-3xl">
        <div className="bg-[#151515] w-full h-full px-6 py-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-[#878787]"></div>
              <div className="text-white ">
                <h5 className="mb-1">Client Name .</h5>
                <span className="text-xs">Product designer</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="url(#quoteGradient)"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFD49C" />
                  <stop offset="100%" stopColor="#7A87FB" />
                </linearGradient>
              </defs>
              <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
            </svg>
          </div>
          <p className="text-white text-sm">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
          </p>
        </div>
      </div> */}
      {/* testimonial 4 */}
      {/* <div className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7D7AFB00] rounded-3xl">
        <div className="bg-[#151515] w-full h-full px-6 py-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-[#878787]"></div>
              <div className="text-white ">
                <h5 className="mb-1">Client Name .</h5>
                <span className="text-xs">Product designer</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="url(#quoteGradient)"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFD49C" />
                  <stop offset="100%" stopColor="#7A87FB" />
                </linearGradient>
              </defs>
              <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
            </svg>
          </div>
          <p className="text-white text-sm">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
          </p>
        </div>
      </div>  */}
    </div>
    </Layout>
  );
};

export default Testimonials;
