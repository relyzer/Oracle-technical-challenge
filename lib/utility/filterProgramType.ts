import { Entry } from "../../definition/interface";

const filterProgramType = (
  entries: Entry[],
  filterFor: "movie" | "series"
): Entry[] => {
  return entries.filter((entry: Entry) => entry.programType === filterFor);
};

export default filterProgramType;
