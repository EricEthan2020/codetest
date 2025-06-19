export default function HeroSection() {
  return (
    <section className=" hover:border hover:border-[#B1CAFD]">
      <div className="container mx-auto px-20">
<div className="relative">
      {/* Grid lines */}
      <div className="relative min-h-screen inset-0 pointer-events-none border border-s-white/10">
        {/* Horizontal lines */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-white/10"
            style={{ top: `${(i + 1) * 14.28}%` }}
          />
        ))}
        {/* Vertical lines */}
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-white/10"
            style={{ left: `${(i + 1) * 14.28}%` }}
          />
        ))}

        {/* Center content */}
        <div className="absolute top-1/7 right-0 left-0 mx-auto z-10 max-w-4xl md:max-w-3xl py-15 inline-flex flex-col items-center justify-center text-center   bg-[#101111]">
          <h1 className="text-3xl md:text-4xl  text-white  font-poppins mb-2.5">
            I design and build clean websites{" "}
          </h1>
          <p className="mb-2.5 max-w-md text-white">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.{" "}
          </p>
          <button className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full">
            <p className="font-md px-5 py-3.5 bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] rounded-full w-full h-full">
              Hire me
            </p>
          </button>

        </div>
      </div>
    </div>
    </div>
    </section>
    
  );
}


