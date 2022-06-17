import axios from "axios";
import { DataFetchType } from "types/types";

export async function fetchPlanetsInfo(query: string, accessToken?: string) {
  const url = `https://discover-planets-to-visit-default-rtdb.europe-west1.firebasedatabase.app/${query}.json?auth=${accessToken}`;

  try {
    const { data } = await axios.get<DataFetchType>(url);

    if (!data) {
      throw new Error("SOMETHING WHEN WRONG");
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
