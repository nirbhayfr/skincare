import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

function AnimatedDrawer({ children, isOpen }) {
     const boxRef = useRef(null);
     const [shouldRender, setShouldRender] = useState(false);

     // Handle mounting and unmounting
     useEffect(() => {
          const el = boxRef.current;

          if (isOpen) {
               setShouldRender(true); // Mount first
          } else if (el) {
               // Animate out, then unmount
               gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                         setShouldRender(false); // Unmount AFTER animation
                    },
               });
          }
     }, [isOpen]);

     // Animate in AFTER mounting
     useEffect(() => {
          const el = boxRef.current;
          if (shouldRender && isOpen && el) {
               gsap.fromTo(
                    el,
                    { height: 0, opacity: 0 },
                    {
                         height: "auto",
                         opacity: 1,
                         duration: 0.3,
                         ease: "power2.out",
                    }
               );
          }
     }, [shouldRender, isOpen]);

     if (!shouldRender) return null;

     return (
          <div ref={boxRef}>
               <p className="text-sm py-2">{children}</p>
          </div>
     );
}

export default AnimatedDrawer;
