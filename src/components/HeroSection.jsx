import Button from "../ui/Button";

import { useEffect } from "react";
import { gsap } from "gsap";

function HeroSection() {
     const winWidth = +window.innerWidth;
     useEffect(() => {
          gsap.fromTo(
               ".fade-up",
               {
                    y: 200,
                    opacity: 0,
               },
               {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    stagger: 0.2,
               }
          );
     }, []);

     return (
          <section className="bg-primary max-xxs:pb-8">
               <div className="px-12 py-8 grid grid-cols-3 max-md:grid-cols-2 max-md:relative max-xxs:grid-cols-1 max-xxs:grid-rows-[auto_auto_auto_auto] max-xxs:px-0 max-xxs:py-4 max-xxs:gap-y-10">
                    <p className="w-[58%] indent-18 text-sm fade-up max-lg:w-3/4 max-xxs:mx-auto">
                         Transform your skincare routine with premium products
                         that restore, protect, and enhance your natural glow
                         every day.
                    </p>
                    <h2 className="text-6xl uppercase [word-wrap:_break-word] w-[60%] font-bold mx-auto fade-up max-lg:w-[75%] max-md:absolute max-md:bottom-0 max-md:text-[6rem]  max-md:w-full max-md:text-center z-100 max-xs:text-7xl max-xxs:static max-xxs:row-start-1">
                         {winWidth >= 768 && <p>Glow Natur&shy;ally</p>}
                         {winWidth < 768 && `Glowwww\n Naturally`}
                    </h2>
                    <div className="w-full flex items-end justify-center xxs:hidden z-10">
                         <img
                              src="photo-1.png"
                              alt="Hero Image"
                              className="h-full w-full z-10 fade-up"
                         />
                         <div className="absolute z-20 mb-6 grid grid-cols-[1fr_4fr] bg-primary px-4 py-2 rounded-full w-4/5 mx-auto gap-x-4">
                              <img
                                   src="photo-2.jpg"
                                   alt="Plum"
                                   className="size-18 rounded-full border-2 p-2 border-dotted"
                              />

                              <div className="my-auto max-xl:text-sm max-md:text-xs">
                                   <p>
                                        While giving you an invigorating
                                        cleansing experience.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-end items-center fade-up relative">
                         <h1 className="uppercase font-extrabold mt-0 mb-0 fade-up text-[5rem] absolute -top-21 text-center w-full z-1 xxs:hidden">
                              skincare
                         </h1>
                         <img
                              src="/photo-2.jpg"
                              alt="Plum"
                              className="size-36 rounded-2xl max-md:w-full max-md:h-full z-10"
                         />
                    </div>
               </div>

               <div className="grid grid-rows-[1fr_2fr] grid-cols-3 relative max-md:grid-cols-2 max-xxs:grid-rows-[auto_auto] max-xxs:grid-cols-1">
                    <div className="flex items-end px-12 fade-up max-md:col-start-2 max-md:justify-end max-xxs:justify-center max-xxs:col-span-full">
                         <Button>Shop Now</Button>
                    </div>
                    <div className="row-start-1 row-span-2 col-start-2 absolute w-1/2 h-4/5 flex items-end justify-center max-md:w-[80%] max-md:col-start-1 max-md:col-end-2 max-md:ml-12 max-xxs:hidden">
                         <img
                              src="photo-1.png"
                              alt="Hero Image"
                              className="h-full w-full z-10 rounded-xl fade-up"
                         />
                         <div className="absolute z-20 mb-6 grid grid-cols-[1fr_4fr] bg-primary px-4 py-2 rounded-full w-4/5 mx-auto gap-x-4 max-md:w-full max-md:px-2 max-md:py-0">
                              <img
                                   src="photo-2.jpg"
                                   alt="Plum"
                                   className="size-18 rounded-full border-2 p-2 border-dotted"
                              />

                              <div className="my-auto max-xl:text-sm max-md:text-xs">
                                   <p>
                                        While giving you an invigorating
                                        cleansing experience.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <h1 className="uppercase font-extrabold text-[18.5rem] row-start-2 col-span-3 mt-0 mb-0 fade-up max-xl:text-[16rem] max-lg:text-[13rem] max-md:text-[10rem] max-xs:text-[7rem] max-xxs:text-[6rem] max-xxs:hidden">
                         skincare
                    </h1>
               </div>
          </section>
     );
}

export default HeroSection;
