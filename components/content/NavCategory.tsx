import React from "react";
import Image from "next/image";
import Link from "next/link";

import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  categories?: string[];
};

const NavCategory = ({ categories }: Props): JSX.Element => {
  return (
    <nav className="flex flex-row flex-wrap min-h-[60vh] px-32 py-8 gap-4 list-none">
      {categories &&
        categories.map((category) => {
          const categoryLink = `/${category.toLowerCase()}`;
          const id = generateUniqueID();
          return (
            <li key={id}>
              <Link href={categoryLink}>
                <a
                  className="flex justify-center items-center relative w-40 h-60"
                  data-testid={`categoryNavLink-${category}`}
                >
                  <div className="bg-black/80 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center font-bold text-2xl text-white z-20 uppercase">
                    {category}
                  </div>
                  <Image
                    className=" scale-[0.6]"
                    src="/assets/clapperboard-gb85488e2b_640.png"
                    alt="clapperboard"
                    placeholder="blur"
                    blurDataURL="/assets/clapperboard-gb85488e2b_640.png"
                    layout="fill"
                  />
                </a>
              </Link>
              <h4 className="py-2">Popular {category}</h4>
            </li>
          );
        })}
    </nav>
  );
};

export default NavCategory;
