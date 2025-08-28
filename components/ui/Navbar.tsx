"use client";
import { useState } from "react";
import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-full h-[10vh]   flex  justify-between items-center px-5">
      <div className="logo z-20">
        <h1
          className={`${hennyPenny.className} text-[#070f36] text-[6vw] md:text-[3vw] `}
        >
          ToyNinjaa
        </h1>
      </div>

      <div className="navbtn z-50" onClick={toggleMenu}>
        {!isOpen ? (
          <div className="circle w-10 h-10 border-2 border-gray-500 rounded-full  flex flex-col justify-center items-center text-center gap-1 transition-all duration-1000">
            <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
            <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
            <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
          </div>
        ) : (
          <div className="circle w-10 h-10 border-0 border-gray-500 rounded-full flex justify-center items-center text-center transition-all duration-1000">
            <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>

            <div className="plus text-4xl rotate-45 w-full h-full flex justify-center items-center  transition-all duration-1000">
              +
            </div>
            <div className="dot w-1 h-1 bg-[#070f36] rounded-full transition-all duration-1000"></div>
          </div>
        )}
      </div>

      {isOpen ? (
        <div className="navbaroverlay bg-[linear-gradient(180deg,rgba(141,201,244,1)_41%,rgba(255,255,255,1)_81%,rgba(255,255,255,1)_100%)] fixed w-full h-full top-0 left-0 z-30  transition-all duration-[2000ms] ease-in-out ">
          <div className="logo pt-30 px-5">
            <svg
              width="14%"
              viewBox="0 0 88 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.5258 59.0658C83.8866 37.7983 65.7905 20.6857 43.6364 20.6857V20.6879C21.4822 20.6879 3.38618 37.8005 2.74691 59.0681C0.973091 54.3026 0 49.1454 0 43.7605C0 19.5916 19.536 0 43.6364 0C67.7368 0 87.2727 19.5916 87.2727 43.7585C87.2727 49.1454 86.2995 54.3003 84.5258 59.0658Z"
                fill="currentColor"
              ></path>
              <path
                d="M43.6363 23.9682C22.8829 23.9682 6 40.2362 6 60.2325C6 60.7709 6.01528 61.3069 6.03929 61.841C8.00293 58.7272 10.5033 55.8433 13.5033 53.2747C21.5651 46.3693 32.2669 42.5666 43.6363 42.5666C55.0058 42.5666 65.7097 46.3693 73.7695 53.2747C76.7674 55.8433 79.2677 58.7272 81.2334 61.841C81.2575 61.3069 81.2726 60.7709 81.2726 60.2325C81.2726 40.2362 64.3898 23.9682 43.6363 23.9682Z"
                fill="currentColor"
              ></path>
              <path
                d="M43.6363 45.8477C28.4029 45.8477 15.1593 53.2259 8.5789 63.9996H78.694C72.1136 53.2259 58.8699 45.8477 43.6363 45.8477Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="text">
            <h1 className="text-[15vw] font-medium pl-5">ComPsych</h1>
            <h1 className="text-[13vw] font-extralight pl-5 leading-none tracking-tight">
              Brand Guidelines
            </h1>
            <p className="px-5 tracking-tight leading-10">
              Designed by{" "}
              <span className="font-bold tracking-tighter">Konpo Studio</span>
            </p>
          </div>

          <div className="NAvlinkOne px-5 mt-20">
            <div className="box w-[40vw] h-[40vw] p-10 bg-[#9c4e23] rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 256 256"
                width="256"
                height="256"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_13">
                    <rect width="256" height="256" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_13)">
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M0,106.66699981689453 C58.90999984741211,106.66699981689453 106.66699981689453,58.90999984741211 106.66699981689453,0 C106.66699981689453,-58.90999984741211 58.90999984741211,-106.66699981689453 0,-106.66699981689453 C-58.90999984741211,-106.66699981689453 -106.66699981689453,-58.90999984741211 -106.66699981689453,0 C-106.66699981689453,58.90999984741211 -58.90999984741211,106.66699981689453 0,106.66699981689453z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: " block" }}
                  >
                    <g opacity="1" transform="matrix(0,1,-1,0,0,72)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(-1,0,0,-1,72.00499725341797,-0.004999999888241291)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(-1,0,0,-1,-71.99500274658203,-0.004999999888241291)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(0,1,-1,0,0,-72)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M22.613000869750977,22.613000869750977 C22.613000869750977,22.613000869750977 45.22700119018555,-45.22700119018555 45.22700119018555,-45.22700119018555 C45.22700119018555,-45.22700119018555 -22.613000869750977,-22.613000869750977 -22.613000869750977,-22.613000869750977 C-22.613000869750977,-22.613000869750977 -45.22700119018555,45.22700119018555 -45.22700119018555,45.22700119018555 C-45.22700119018555,45.22700119018555 22.613000869750977,22.613000869750977 22.613000869750977,22.613000869750977z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-[#9c4e23] tracking-tight">001</p>
            <p className="tracking-tight text-[4.5vw]">Brand Model & Story</p>

          </div>

          <div className="NAvlinkOne px-5 mt-20">
            <div className="box w-[40vw] h-[40vw] p-10 bg-[#9c4e23] rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 256 256"
                width="256"
                height="256"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_13">
                    <rect width="256" height="256" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_13)">
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M0,106.66699981689453 C58.90999984741211,106.66699981689453 106.66699981689453,58.90999984741211 106.66699981689453,0 C106.66699981689453,-58.90999984741211 58.90999984741211,-106.66699981689453 0,-106.66699981689453 C-58.90999984741211,-106.66699981689453 -106.66699981689453,-58.90999984741211 -106.66699981689453,0 C-106.66699981689453,58.90999984741211 -58.90999984741211,106.66699981689453 0,106.66699981689453z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: " block" }}
                  >
                    <g opacity="1" transform="matrix(0,1,-1,0,0,72)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(-1,0,0,-1,72.00499725341797,-0.004999999888241291)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g
                      opacity="1"
                      transform="matrix(-1,0,0,-1,-71.99500274658203,-0.004999999888241291)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(0,1,-1,0,0,-72)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M8,0 C8,0 -8,0 -8,0"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128,128)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,245,140)"
                        strokeOpacity="1"
                        strokeWidth="12"
                        d=" M22.613000869750977,22.613000869750977 C22.613000869750977,22.613000869750977 45.22700119018555,-45.22700119018555 45.22700119018555,-45.22700119018555 C45.22700119018555,-45.22700119018555 -22.613000869750977,-22.613000869750977 -22.613000869750977,-22.613000869750977 C-22.613000869750977,-22.613000869750977 -45.22700119018555,45.22700119018555 -45.22700119018555,45.22700119018555 C-45.22700119018555,45.22700119018555 22.613000869750977,22.613000869750977 22.613000869750977,22.613000869750977z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-[#9c4e23] tracking-tight">001</p>
            <p className="tracking-tight text-[4.5vw]">Brand Model & Story</p>

          </div>




        </div>
      ) : (
        <div className="navbaroverlay  bg-[linear-gradient(180deg,rgba(141,201,244,1)_41%,rgba(255,255,255,1)_81%,rgba(255,255,255,1)_100%)] fixed w-0 h-full  top-0 left-0 z-30 transition-all duration-[2000ms] ease-linear"></div>
      )}
    </nav>
  );
}
