function Feature({ data }) {
     return (
          <div className="grid grid-cols-[1fr_4fr] w-2/3 max-xxs:w-full">
               <div className="bg-gradient-to-b from-font-primary to-primary-light bg-clip-text h-2/5">
                    <p className="text-3xl text-transparent">{data.id}</p>
               </div>
               <div className="space-y-3 font-light">
                    <h4 className="text-3xl">{data.heading}</h4>
                    <p className="text-sm">{data.description}</p>
               </div>
          </div>
     );
}

export default Feature;
