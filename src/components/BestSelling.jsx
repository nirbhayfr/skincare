import { GoDotFill } from "react-icons/go";
import SliderPreviousBtn from "../ui/SliderPreviousBtn";
import SliderNextBtn from "../ui/SliderNextBtn";
import SliderItem from "../ui/SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const sliderItems = [
     {
          id: 1,
          img: "/photo-6.jpg",
          name: "Alya skin cleanser",
          price: 29.99,
     },
     {
          id: 2,
          img: "/photo-5.jpg",
          name: "Ritual of Sakura",
          price: 27.99,
     },
     {
          id: 3,
          img: "/photo-3.jpg",
          name: "The body lotion",
          price: 19.99,
     },
     {
          id: 4,
          img: "/photo-5.jpg",
          name: "Ritual of Sakura",
          price: 27.99,
     },
     {
          id: 5,
          img: "/photo-3.jpg",
          name: "The body lotion",
          price: 19.99,
     },
];

function BestSelling() {
     const slider = useRef(null);
     var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          initialSlide: 0,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         infinite: true,
                    },
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         initialSlide: 1,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };

     return (
          <section>
               <div className="grid grid-cols-[1fr_2fr_auto] px-12 max-md:grid-cols-1 max-md:grid-rows-2 gap-y-4">
                    <div>
                         <button className="px-4 py-2 border-1 rounded-full flex items-center gap-x-1.5">
                              <span>
                                   <GoDotFill />
                              </span>
                              Best Selling Products
                         </button>
                    </div>
                    <h4 className="text-3xl w-2/3 text-center max-md:w-full max-md:text-left">
                         Skincare That Brings Out Your Natural Radiance
                    </h4>
                    <div className="flex items-center gap-x-4 max-md:hidden">
                         <button onClick={() => slider?.current?.slickPrev()}>
                              <SliderPreviousBtn />
                         </button>
                         <button onClick={() => slider?.current?.slickNext()}>
                              <SliderNextBtn />
                         </button>
                    </div>
               </div>
               <div className="px-12 py-6">
                    <Slider ref={slider} {...settings}>
                         {sliderItems.map((item) => (
                              <SliderItem data={item} />
                         ))}
                    </Slider>
               </div>
               <div className="flex items-center justify-center gap-x-4 md:hidden">
                    <button onClick={() => slider?.current?.slickPrev()}>
                         <SliderPreviousBtn />
                    </button>
                    <button onClick={() => slider?.current?.slickNext()}>
                         <SliderNextBtn />
                    </button>
               </div>
          </section>
     );
}

export default BestSelling;
