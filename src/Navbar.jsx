import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEllipsisV } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className=" bg-[#FFFFFF] w-[100%] pb-5 gap-4 flex flex-nowrap items-center ">
      <div className="ot:hidden rounded-2xl user w-[20%] px-3 relative bg-zinc-900">
        <div className="flex pt-8 items-center justify-center flex-col">
        <img className=" obj-cover" src="/Profile.png" alt="" />
        
        <h1 className="text-[white] font-bold text-[1.5vw] mt-2">Indica Watson</h1>
        <div className="man pb-8">
          <img className="bg-black mt-5 pb-8 px-2 py-1" src="Frame 25.png" alt="" />
          <img className="mt-5" src="Frame 26.png" alt="" />
        </div>


        </div>
      </div>
      <div className="ot:w-[100%] gap-[1vw] w-[125%] relative on:w-[100%] flex flex-wrap it:gap-2  items-center ">
        <div className="relative border it:border border-gray-300 rounded-md focus:outline-none gap-4 flex flex-wrap items-center icon">
          <CiSearch className="it:hidden relative text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="w-[24vh] placeholder: to:placeholder:Search flex items-start pl-[vh] border border-gray-300 rounded-2xl pr-[2vw] py-[1vh] focus:outline-none decoration-none border-none it:border-2 "
          />
        </div>
        <a className="inline-flex px-[1vw] py-1   border border-gray-300 rounded-2xl focus:outline-none  items-center gap-2">
          Price <CiDollar />
        </a>
        <div className="sec flex flex-wrap rounded-2xl gap-2 items-center it:gap-1">
          <a
            className="p-[2vh] border  bg-[#FF5B19] px-5 rounded-2xl focus:outline-none"
            href=""
          >
            2-4 beds
          </a>
          <a
            className="p-[2vh] border border-gray-300 rounded-2xl px-4 focus:outline-none"
            href=""
          >
            Property Type
          </a>
          <a
            className="px-[2vh] border border-gray-300 py-[3vh] it:py-[1.4vh]  rounded-2xl focus:outline-none"
            href=""
          >
            2-4 beds
          </a>
          <a
            className="p-[2vh] border border-gray-300 rounded-2xl  focus:outline-none"
            href=""
          >
            Property Type
          </a>
          <a
            className="p-[2vh] px-8 it:px-2 border border-gray-300 rounded-2xl  focus:outline-none"
            href=""
          >
            Filters
          </a>
        </div>
        <br />
        <div className="a mt-3 it:mt-0  flex justify-start it:gap-3 gap-8">
          <p className="font-medium tracking-tight text-[#FF5B19]">
            Recommended
          </p>
          <p className="tracking-tight">Popular</p>
          <p className="">Nearest</p>
        </div>

        <div className="flex mx-0 gap-5 justify-start from:gap-0">
          <div className="im w-[100%] from:w-[140%] from:flex on:w-full ">
            <div className="grid  om:justify-center om:gap-5 om:w-[100%] grid-cols-3 from:grid-cols-3  from:flex from:flex-wrap justify-between it:gap-3 ">
              <div className="card ont:w-[100%] ont:flex ont:flex-col bg-slate-200 rounded-2xl p-2 ">
                <img
                  className="rounded-2xl object-cover "
                  src="/Image.png"
                  alt=""
                />
                <div className="nam flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center icon opacity-[.7] tracking-tight leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>
              <div className="card it:w-[100%] it:flex it:flex-col ont:w-[100%] ont:flex ont:flex-col bg-slate-50 rounded-2xl p-2">
                <img
                  className="rounded-2xl object-cover "
                  src="/2.png"
                  alt=""
                />
                <div className="nam flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center tracking-tighter icon opacity-[.7] leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>
              <div className="card it:w-[100%] it:flex it:flex-col ont:w-[100%] ont:flex ont:flex-col  bg-slate-50 rounded-2xl p-2 ">
                <img
                  className="rounded-2xl object-cover "
                  src="/Image.png"
                  alt=""
                />
                <div className="nam flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center icon opacity-[.7] tracking-tight leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>

              <div className="card it:w-[100%] it:flex it:flex-col ont:w-[100%] ont:flex ont:flex-col bg-slate-50 rounded-2xl p-2">
                <img
                  className="rounded-2xl  object-cover "
                  src="/2.png"
                  alt=""
                />
                <div className="nam flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center icon opacity-[.7] tracking-tighter leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>
              <div className="card ont:w-[100%] ont:flex ont:flex-col bg-slate-50 rounded-2xl p-2">
                <img
                  className="rounded-2xl  object-cover "
                  src="Image.png"
                  alt=""
                />
                <div className="nam flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center icon opacity-[.7] tracking-tighter leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>
              <div className="card ont:w-[100%] ont:flex ont:flex-col bg-slate-50 rounded-2xl p-2">
                <img
                  className="rounded-2xl  object-cover "
                  src="Image.png"
                  alt=""
                />
                <div className="nam  flex flex-col items-start justify-start gap-3">
                  <h4 className="font-bold opacity-[.8]">The Stables</h4>
                  <p className="opacity-[.7] tracking-tight leading-none text-[#FF5B19]">
                    $56455.66
                  </p>
                  <p className="justify-center icon opacity-[.7] tracking-tighter leading-none flex items-center">
                    <FaMapMarkerAlt className="mr-2 it:mb-[1vh] text-red-500" />
                    Terry Lane Golden Co,6 66
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidepanel rounded-2xl w-[28%] from:hidden it:hidden  bg-zinc-200">
              <div className="wrap">
              <div className="one  flex justify-between items-center p-2">
      <h1 className="text-black text-[1.6vw] tracking-tighter opacity-[.7] font-semibold">
        Recent Messages
      </h1>
      <FaEllipsisV className="text-gray-500 text-[1.6vw]" />
    </div>
              <div className="two flex border-b items-center mx-[1vh] pt-[1vh] gap-5 ot:gap-1 leading-none justify-start">
                <img className="pl-2 mb-2" src="/3.png" alt="" />
                <div className="in flex flex-col gap-2 mb-2 items-start leading-none justify-center">
                  <h1 className="font-semibold opacity-[.8]">James Benny</h1>
                  <p className="text-[#7F7F7F] font-thin text-[2vh] tracking-tighter">Hey let me know if you are still available</p>
                  </div>
                  
              </div>
              <div className="two mt-[1.4vw] flex border-b items-center mx-[1vh] pt-[1vh] gap-5 ot:gap-1 leading-none justify-start">
                <img className="pl-2 mb-2" src="/3.png" alt="" />
                <div className="in flex flex-col gap-2 mb-2 items-start leading-none justify-center">
                  <h1 className="font-semibold opacity-[.8]">Charlotte Fair</h1>
                  <p className="text-[#7F7F7F] font-thin text-[2vh] tracking-tighter">Okay Thanks</p>
                  </div>
                  
              </div>
            
            
              <div className="one mt-2 flex justify-between items-center p-2">
      <h1 className="text-black text-[1.4vw] tracking-tighter opacity-[.7] pl-2 font-bold">
        Map View
      </h1>
      <FaEllipsisV className="text-gray-500 text-[1.6vw]" />
    </div>
               <div className="ima py-[1vw] px-[1vw]">
                <img className="rounded-xl object-cover" src="Map.png" alt="" />
               </div>
              </div>
          </div>
        </div>
      </div>
      
  
    </div>
  );
};

export default Navbar;
