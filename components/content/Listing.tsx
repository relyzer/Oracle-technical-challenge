import React from "react";

import Program from "./Program";
import { Entry } from "../../definition/interface";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  programsArr?: Entry[];
};

const Listing = ({ programsArr }: Props): JSX.Element => {
  return (
    <div
      className="flex flex-row flex-wrap min-h-[60vh] px-32 py-8 gap-4"
      data-testid="listing-div"
    >
      {!programsArr && <p>No entries found</p>}
      {programsArr &&
        programsArr.map((data: Entry) => (
          <Program
            id={generateUniqueID()}
            programTitle={data.title}
            imageUrl={data.images["Poster Art"].url}
            releaseYear={data.releaseYear}
            description={data.description}
          />
        ))}
    </div>
  );
};

export default Listing;
