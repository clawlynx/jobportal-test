import React from "react";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-5 my-5 py-5 w-full">
      <h1 className="text-xl">Contact Details</h1>
      <div className="flex gap-6 items-center justify-start">
        <div className="text-ascent text-2xl">
          <MdOutlinePhoneEnabled />
        </div>

        <p className="text-gray-500 text-md">+911234567890</p>
      </div>
      <div className="flex gap-6 items-center justify-start">
        <div className="text-ascent text-2xl">
          <IoMailOutline />
        </div>

        <p className="text-gray-500 text-md">example@gmail.com</p>
      </div>
    </div>
  );
}
