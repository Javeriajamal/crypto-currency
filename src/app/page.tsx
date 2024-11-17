"use client";

import { Bitcoin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>

    <div className="bg-black h-full pb-20 flex-col justify-center">
    <div className="flex justify-center text-white font-semibold xs:text-sm xs:pt-28 font-sans sm:text-xl md:text-2xl lg:text-4xl lg:pt-32 xl:text-5xl xl:pt-40">
    Your Source for Real-Time <span className="text-blue-500 ml-1 mr-1"> Cryptocurrency</span> Price
    </div>
    <div className="text-zinc-400 xs:text-xs xs:mt-20 text-center xs:px-4 sm:text-base sm:px-32 md:px-44 lg:text-lg lg:px-72 xl:text-xl xl:px-96 xl:mt-40">Start exploring the crypto market effortlessly🚀 and Stay up-to-date with the latest market trends!</div>

    <Link href={'/coin-market'} className="text-white xs:text-xs flex justify-center xs:ml-16 xs:mt-14 border-2 border-white xs:w-44 xs:py-3 rounded-3xl sm:ml-56 md:ml-72 md:w-52 md:text-sm lg:ml-96 lg:w-60 lg:text-base xl:text-xl xl:w-80 xl:ml-96 2xl:ml-auto "><Bitcoin className="xs:h-4 xs:w-4 xs:mr-2 bg-white rounded-full text-black md:h-5 md:w-5 lg:h-6 lg:w-6 xl:w-7 xl:h-7"/>Find Crypto Rates</Link>

    

  </div>
    </>
  );
}