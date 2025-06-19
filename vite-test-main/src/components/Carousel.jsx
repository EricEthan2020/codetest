"use client"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import star from "../assets/images/star.png"

const tools = ["Framer", "Webflow", "Figma", "Notion"]

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export default function Carousel() {
  return (
    <section className=" hover:border hover:border-[#B1CAFD] border border-white/10">
      <div className="container mx-auto px-20 py-5 overflow-hidden ">
          <Slider {...settings}>
            {tools.map((tool, i) => (
              <div key={i}>
                <div className="flex items-center justify-center gap-14 text-white font-semibold text-lg px-4">
                  <span>{tool}</span>
                  <img src={star} alt="star" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </section>
  )
}


