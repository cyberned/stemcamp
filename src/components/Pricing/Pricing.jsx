
const Pricing = () => {
    return (
      <div className="sm:px-10 px-5 py-20" id="pricing">
          <h1 className="text-center md:text-[50px] sm:text-[45px] text-[40px] font-semibold mb-10">Event Pricing</h1>
          <div className="flex flex-wrap items-center justify-center gap-6">
              <div className=" relative border shadow-lg basis-[500px] hover:shadow-2xl transition-all text-center pt-10 min-h-[500px]">
                  <h1 className="uppercase text-[20px] font-medium px-5 mb-5">Single Child</h1>
                  <h2 className="relative px-5 sm:text-[55px] text-[45px] font-bold text-[#F7CB0D] ">&#8358; 250,000 
                      <span className="bg-slate-900 absolute w-1/2  sm:top-11 top-9 right-[25%] h-1 "></span></h2>
                  <h2 className="px-5 sm:text-[55px] text-[45px] font-bold text-[#F7CB0D] mb-5">&#8358; 150,000</h2>
                  <p className="px-5">Grants access to our 3D Printers, CNC Machine and IOT Development Tools</p>
                  <button className="bg-black text-white py-3 uppercase font-medium w-full absolute left-0 bottom-0">Get Ticket</button>
              </div>
              <div className="relative border shadow-lg basis-[500px] hover:shadow-2xl transition-all text-center  pt-10 min-h-[500px]">
                  <div className="absolute rounded-3xl px-5 py-2 bg-teal-500 text-white sm:top-3 top-1 sm:right-4 right-2">Save 5%</div>
                  <h1 className="px-5 uppercase text-[20px] font-medium mb-5">More than 1 Child</h1>
                  <h2 className="relative px-5 sm:text-[55px] text-[45px] font-bold text-[#F7CB0D] ">&#8358; 250,000 
                      <span className="bg-slate-900 absolute w-1/2  sm:top-11 top-9 right-[25%] h-1 "></span></h2>
                  <h2 className="px-5 sm:text-[55px] text-[45px] font-bold text-[#F7CB0D] mb-5">&#8358; 142,500</h2>
                  <p className="px-5">Grants access to our 3D Printers, CNC Machine and IOT Development Tools</p>
                  <button className="bg-black text-white py-3 uppercase font-medium w-full absolute left-0 bottom-0">Get Ticket</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default Pricing