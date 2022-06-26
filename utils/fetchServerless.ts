import { DataFetchType } from "types/types";
import axios from "axios";

export async function fetchServerlessPlanets(
  query: string,
  accessToken: string
) {
  const url = `/api/spaceShip?query=${query}&accessToken=${accessToken}`;

  try {
    const { data } = await axios.get<DataFetchType>(url);

    if (!data) {
      throw new Error("SOMETHING WENT WRONG");
    }

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: `Something went wrong: ${err.message}`,
      };
    }
  }
}
