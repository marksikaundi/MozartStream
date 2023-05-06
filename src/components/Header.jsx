import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />

        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500">IMDB</span>
            <span>Stream</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
