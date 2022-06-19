import type { NextApiRequest, NextApiResponse } from "next";

import * as sample from "../../../public/externaldata/sample.json";
import { Programs } from "../../../definition/interface";

const programListHandler = (
  req: NextApiRequest,
  res: NextApiResponse
): string | void => {
  const data: Programs = sample;
  // API Failure code
  // Leave it commented if not in use to simulate API failure
  // res.status(500).json({ error: 'Failed to load!'})

  if (req.method === "GET") {
    return res.status(200).json(data);
  }
  return res.status(405).statusMessage;
};

export default programListHandler;
