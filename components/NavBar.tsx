import React from "react";
import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <nav className="bg-gradient-to-t from-blue-600 to-blue-500 flex flex-row px-32 py-4 items-center drop-shadow-xl">
      <div className="flex justify-start basis-1/2">
        <Link href="/">
          <a className="">
            <h1 className="text-white drop-shadow-lg">DEMO Streaming</h1>
          </a>
        </Link>
      </div>
      <div className="flex justify-end basis-1/2 items-center">
        <span className="pr-7">
          <Link href="/">
            <a className="text-white drop-shadow-lg">Log in</a>
          </Link>
        </span>
        <span className="">
          <Link href="/">
            <a className="border border-gray-700 bg-gray-700 text-white px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              Start your free trial
            </a>
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
