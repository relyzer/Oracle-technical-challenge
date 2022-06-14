import React from "react";

type Props = {
  myArr?: string[];
};

const Listing = ({ myArr }: Props): JSX.Element => {
  return (
    <div className="min-h-[60vh] px-32 py-4">
      {!myArr && <p>No entries found</p>}
      {myArr && myArr.map(() => <article>Test</article>)}
    </div>
  );
};

export default Listing;
