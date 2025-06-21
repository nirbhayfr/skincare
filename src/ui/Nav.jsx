import NavLink from "../utils/NavLink";

function Nav() {
     return (
          <nav>
               <ul className="grid grid-cols-4 gap-x-4 justify-items-center font-normal max-md:text-sm max-md:gap-x-0 max-sm:hidden">
                    <NavLink>All products</NavLink>
                    <NavLink>Serum</NavLink>
                    <NavLink>Sunscreen</NavLink>
                    <NavLink>Bundle</NavLink>
               </ul>
          </nav>
     );
}

export default Nav;
