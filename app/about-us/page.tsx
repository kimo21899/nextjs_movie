import Image from "next/image";

export const metadata = {
  title: 'ABOUT US',
}

export default function AboutUs() {
  return (
    <div className="flex flex-row p-10 bg-[#333]">
      <div className="p-15">
        <div className="text-white items-center text-center">
          <div className='py-3 text-center lg:text-start'>
            <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
              Dedicated to <br /> bring your <br /> ideas to life.
            </h1>
          </div>
          <div className='my-7 text-center lg:text-start'>
            <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
            Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Image src="/images/about.png" alt="about-image" width={500} height={500} />
      </div>
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-4">
    //   {/* COLUMN-1 */}
    //   <div className="text-white items-center text-center">
    //     <div className='py-3 text-center lg:text-start'>
    //         <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
    //     </div>
    //     <div className="py-3 text-center lg:text-start">
    //         <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
    //             Dedicated to <br /> bring your <br /> ideas to life.
    //         </h1>
    //     </div>
    //     <div className='my-7 text-center lg:text-start'>
    //         <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
    //             Get Started
    //         </button>
    //     </div>
    //   </div>
    //   {/* COLUMN-2 */}
    //   <div className="items-center text-center">
    //       <Image src="/images/about.png" alt="about-image" width={500} height={500} />
    //   </div>
    // </div>
  )
}