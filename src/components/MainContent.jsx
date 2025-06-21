import AnimatedText from "./AnimatedText";
import BestSelling from "./BestSelling";
import BigImageSection from "./BigImageSection";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Promotion from "./Promotion";
import Qna from "./Qna";

function MainContent() {
     return (
          <main className="overflow-hidden">
               <HeroSection />
               <AnimatedText />
               <Promotion />
               <BestSelling />
               <BigImageSection />
               <Products />
               <Qna />
          </main>
     );
}

export default MainContent;
