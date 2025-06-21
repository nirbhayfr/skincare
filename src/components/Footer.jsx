function Footer() {
     return (
          <footer className="bg-font-primary text-font-footer relative">
               <div className="grid grid-rows-[auto_auto] px-12 max-xxs:px-6">
                    <div className="flex justify-between items-center py-24 max-sm:flex-col max-sm:items-start gap-y-4">
                         <p className="text-[2.5rem] font-light w-1/3 max-md:text-3xl max-sm:w-full">
                              Join The Skincare Community Now.
                         </p>
                         <div>
                              <span>Get in Touch</span>
                              <p className="text-[2.5rem] font-light text-left max-md:text-3xl">
                                   contact.skincare.com
                              </p>
                         </div>
                    </div>
                    <div className="flex justify-between items-center pt-6 max-sm:flex-col max-sm:gap-y-4">
                         <ul className="flex justify-between items-center gap-x-6 text-sm max-sm:w-full">
                              <li>Facebook</li>
                              <li>Instagram</li>
                              <li>YouTube</li>
                         </ul>

                         <ul className="flex items-center gap-x-6 text-sm max-sm:w-full max-sm:justify-between max-xxs:gap-x-3">
                              <li>Terms of Service</li>
                              <li>Privacy Policy</li>
                              <li>Cookies Policy</li>
                         </ul>
                    </div>
               </div>
               <div className="h-[20rem] overflow-hidden flex justify-center -my-16 max-lg:h-[15rem] max-md:h-[10rem] max-xs:h-[8rem] max-xs:-my-6 max-xxs:h-[6rem]">
                    <h2 className="text-font-secondary text-[21rem] font-extrabold max-xl:text-[18rem] max-lg:text-[15rem] max-md:text-[10rem] max-xs:text-[7.5rem] max-xxs:text-[5.5rem]">
                         SKINCARE
                    </h2>
               </div>
          </footer>
     );
}

export default Footer;
