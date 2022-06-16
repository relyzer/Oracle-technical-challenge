import React from "react";

import { Program } from ".";
import { Entry } from "../../definition/interface";
import generateUniqueID from "../../lib/utility/generateUniqueID";

type Props = {
  programsArr?: Entry[];
};

const Listing = ({ programsArr }: Props): JSX.Element => {
  return (
    <div className="flex flex-row flex-wrap min-h-[60vh] px-32 py-4 gap-4">
      {!programsArr && <p>No entries found</p>}
      {programsArr &&
        programsArr.map((data: Entry) => (
          <Program
            key={generateUniqueID()}
            programTitle={data.title}
            imageUrl={data.images["Poster Art"].url}
          />
        ))}
    </div>
  );
};

export default Listing;
