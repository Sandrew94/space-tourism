import { NextApiRequest, NextApiResponse } from "next/types";
import { DataFetchType } from "types/types";
import { fetchPlanetsInfo } from "utils/fetchApi";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query, accessToken } = req.query;
    const planetData = await fetchPlanetsInfo(
      query as string,
      accessToken as string
    );

    res.status(200).json(planetData);
  } catch (e: unknown) {
    const u = e as { message: string };

    res.status(500).json({ error: `Failed to load data, ${u.message}` });
  }
}
