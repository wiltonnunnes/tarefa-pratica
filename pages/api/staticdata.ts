import { NextApiRequest, NextApiResponse } from "next";
import data from "../../json/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(data);
}