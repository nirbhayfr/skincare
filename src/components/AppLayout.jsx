import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function AppLayout() {
     return (
          <div className="font-inter text-font-primary">
               <Header />
               <MainContent />
               <Footer />
          </div>
     );
}

export default AppLayout;
