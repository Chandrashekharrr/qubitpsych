"use client"
import { Inter } from "next/font/google";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className=" w-full h-[10vh]   flex  justify-between items-center px-5">
      
        <div className="logo z-50">
            <h1 className={`${inter.className} text-[#070f36] text-[6vw] `}>ComPsych</h1>
        </div>

        <div className="navbtn z-50" onClick={toggleMenu}>


            {!isOpen?
            <div className="circle w-10 h-10 border-2 border-gray-500 rounded-full  flex flex-col justify-center items-center text-center gap-1">

                <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
                <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
                <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
            </div>
            :
             <div className="circle w-10 h-10 border-2 border-gray-500 rounded-full flex justify-center items-center text-center ">

                <div className="plus text-4xl rotate-45 w-full h-full flex justify-center items-center ml-1 mb-2 transition-all duration-1000">+</div>
            </div>

            





            }

        </div>

            {isOpen?
            <div className="navbaroverlay bg-[linear-gradient(180deg,rgba(141,201,244,1)_41%,rgba(255,255,255,1)_81%,rgba(255,255,255,1)_100%)] fixed w-full h-full top-0 left-0 z-30  transition-all duration-[2000ms] ease-in-out ">




            </div>
            :
                <div className="navbaroverlay  bg-[linear-gradient(180deg,rgba(141,201,244,1)_41%,rgba(255,255,255,1)_81%,rgba(255,255,255,1)_100%)] fixed w-0 h-full top-0 left-0 z-30 transition-all duration-[2000ms] ease-in-out">




            </div>
}
    






    </nav>
  );
}
