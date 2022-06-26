import { DataFetchType } from "types/types";
import api from "./api";

export const fetchSpaceData = (query: string, accessToken: string) => {
  const URL = {
    fetchPlanetsData: `/api/spaceShip?query=${query}&accessToken=${accessToken}`,
  };

  return api.get<DataFetchType>(URL.fetchPlanetsData);
};
