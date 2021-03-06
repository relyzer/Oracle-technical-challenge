import React from "react";

type Props = {
  headerTitle?: string;
};
const HeaderBar = ({ headerTitle }: Props): JSX.Element => {
  return (
    <div className="bg-gray-700 flex flex-row px-32 py-4 items-center drop-shadow-xl">
      <header>
        <h2 className="text-white drop-shadow-lg">{headerTitle}</h2>
      </header>
    </div>
  );
};

export default HeaderBar;
