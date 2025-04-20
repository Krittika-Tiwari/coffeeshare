import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="max-w-6xl  flex items-center justify-between">
        <div className="flex items-center  gap-2 sm:gap-4  ">
          <Image
            src="/coffee.webp"
            alt="Coffee Share Logo"
            width={55}
            height={55}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl text-[#4b3621] font-extrabold text-brown-800">
              CoffeeShare
            </h1>
            {/* <p className="p-0 m-0 text-gray-500">Fast sharing</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
