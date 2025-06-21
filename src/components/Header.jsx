import Icons from "../ui/Icons";
import Nav from "../ui/Nav";

function Header() {
     return (
          <header className="flex justify-between items-center px-12 py-4 bg-primary">
               <h2 className="uppercase text-2xl font-bold">Skincare</h2>
               <Nav />
               <Icons />
          </header>
     );
}

export default Header;
