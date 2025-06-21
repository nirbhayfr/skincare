import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
function AnimatedText() {
     useEffect(() => {
          const splitTypes = document.querySelectorAll(".highlight-text");
          const splitInstances = [];

          splitTypes.forEach((char) => {
               const text = new SplitType(char, { types: ["chars", "words"] });
               splitInstances.push(text);

               gsap.from(text.chars, {
                    scrollTrigger: {
                         trigger: char,
                         start: "top 80%",
                         end: "top 20%",
                         scrub: true,
                    },
                    opacity: 0.2,
                    stagger: 0.1,
               });
          });

          return () => {
               ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
               splitInstances.forEach((instance) => instance.revert());
          };
     }, []);

     return (
          <section className="-mt-24 bg-primary-light px-12 py-8 text-3xl/12 max-md:-mt-0 max-md:text-xl/6 [will-change:_transform]">
               <p className="highlight-text">
                    Experience the ultimate in skincare with our expertly
                    formulated products, crafted to nourish, protect, and
                    rejuvenate your skin. Combining the finest natural
                    ingredients with advanced science, our collection ensures
                    every skin type can achieve a radiant, healthy glow. Embrace
                    your beauty with confidence every day. Experience the
                    ultimate in skincare with our expertly formulated products,
                    crafted to nourish, protect, and rejuvenate your skin.
               </p>
          </section>
     );
}

export default AnimatedText;
