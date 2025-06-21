function NavLink({ children }) {
     return (
          <li className="px-4 py-2 hover:bg-primary-light transition-all duration-400 rounded-sm cursor-pointer max-md:px-2">
               {children}
          </li>
     );
}

export default NavLink;
