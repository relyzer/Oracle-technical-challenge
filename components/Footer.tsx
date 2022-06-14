import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import GooglePlayBadge from "../public/assets/google-play-badge.png";
import AppleAppStoreBadge from "../public/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import MicrosoftStoreBadge from "../public/assets/English_get it from MS_864X312.svg";

const Footer = (): JSX.Element => {
  return (
    /* <div>
      <div className="flex flex-row w-80 h-20 space-x-6">
          <Link href="/" passHref={true}>
            <a className="text-white w-10 h-10 scale-[0.6] flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="text-white w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} size="sm" />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="text-white w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
          </Link>
        </div>
    </div> */

    <footer className="bg-black/90 flex w-full mt-auto flex-col px-32 py-8">
      <nav className="flex flex-row items-center py-2 list-none text-white/60 space-x-4">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link href="/">
            <a>Terms and Conditions</a>
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link href="/">
            <a>Collection Statement</a>
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link href="/">
            <a>Help</a>
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link href="/">
            <a>Manage Account</a>
          </Link>
        </li>
      </nav>
      <p className="text-white/40">
        Copyright {"\u00A9"} 2016 DEMO Streaming. All Rights Reserved.
      </p>
      <div className="flex flex-row flex-nowrap items-center pt-6">
        <div className="basis-1/2 flex flex-row space-x-6">
          <Link href="/" passHref={true}>
            <a className="text-white w-8 h-10 flex items-center justify-center scale-[0.6]">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="text-white w-8 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="text-white w-8 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Link>
        </div>
        <div className="basis-1/2 flex flex-row justify-end space-x-4">
          <Link href="/" passHref={true}>
            <a className="relative right-0 h-20 w-40">
              <Image
                className=""
                src={AppleAppStoreBadge}
                alt="Download on the App Store"
                layout="fill"
              />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="relative right-0 h-20 w-48">
              <Image
                className=""
                src={GooglePlayBadge}
                alt="Get it on Google Play"
                layout="fill"
              />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="relative right-0 h-20 w-40">
              <Image
                className=""
                src={MicrosoftStoreBadge}
                alt="Get it from Microsoft"
                layout="fill"
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
