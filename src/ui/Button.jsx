function Button({ children }) {
     return (
          <button className="bg-font-primary text-font-footer px-4 py-2 rounded-full">
               {children}
          </button>
     );
}

export default Button;
