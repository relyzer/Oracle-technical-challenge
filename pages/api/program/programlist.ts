import type { NextApiRequest, NextApiResponse } from "next";

import * as sample from "../../../public/externaldata/sample.json";
import { Programs } from "../../../definition/interface"

type Data = Programs

const programListHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): string | void => {
  const data = sample;
  if (req.method === "GET") {
    return res.status(200).json(data);
  }
  return res.status(405).statusMessage;
};

export default programListHandler;
