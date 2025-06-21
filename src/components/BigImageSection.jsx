function BigImageSection() {
     return (
          <section className="px-12 py-8 max-md:hidden">
               <div className="relative flex">
                    <img
                         src="/photo-7.png"
                         alt="Hero 2"
                         className="object-cover w-full rounded-xl"
                    />
                    <div className="absolute w-full h-full bg-gradient-to-t from-font-primary to-transparent rounded-xl text-primary-light flex items-end justify-center">
                         <div className="mb-6 w-2/3 mx-auto flex flex-col items-center gap-y-12">
                              <h2 className="text-center text-6xl font-light max-sm:text-3xl">
                                   Feel Beautiful Inside and Out With Every
                                   Product
                              </h2>
                              <button className="px-8 py-2 bg-primary-light text-font-primary rounded-full hover:scale-110 transition-all duration-200 cursor-pointer">
                                   Shop now
                              </button>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default BigImageSection;
