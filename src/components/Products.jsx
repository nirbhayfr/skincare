import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../ui/SliderItem";
import SliderPreviousBtn from "../ui/SliderPreviousBtn";
import SliderNextBtn from "../ui/SliderNextBtn";

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
];

function Products() {
     const slider = useRef(null);
     var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
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
                         initialSlide: 2,
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
          <section className="px-12 py-6 flex flex-col items-center gap-y-8">
               <h2 className="text-4xl w-1/2 text-center max-md:w-full">
                    Feel Beautiful Inside and Out With Every Product
               </h2>
               <div>
                    <ul className="flex gap-x-12 uppercase text-sm max-sm:gap-x-4 max-xxs:grid max-xxs:grid-cols-2 max-xxs:grid-rows-2 max-xxs:gap-4">
                         <ListItem>New Arrival</ListItem>
                         <ListItem>Cleansing</ListItem>
                         <ListItem>Acne Fighter</ListItem>
                         <ListItem>Anti Aging</ListItem>
                    </ul>
               </div>

               <div className="px-12 py-6 relative w-screen">
                    <Slider ref={slider} {...settings}>
                         {sliderItems.map((item) => (
                              <SliderItem data={item} />
                         ))}
                    </Slider>
               </div>
               <div className="flex items-center gap-x-4">
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

export default Products;

function ListItem({ children }) {
     return (
          <li className="border-1 rounded-full px-3 py-1.5 hover:bg-font-primary hover:text-primary-light transition-all duration-200 cursor-pointer max-sm:text-sm max-xs:text-xs max-xs:px-1 max-xs:py-0.5 max-xxs:text-center">
               {children}
          </li>
     );
}
