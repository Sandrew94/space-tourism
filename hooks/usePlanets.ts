import { useApi } from "api/hooks/useApi";
import { fetchSpaceData } from "api/planetsDataApi";

export const usePlanets = (query: string, accessToken: string) => {
  const {
    data: infoPlanet,
    setData: setData,
    exec: initFetchPlanets,
    status: fetchPlanetStatus,
    setStatus: setFetchPlanetStatus,
    isIdle: isFetchPlanetStatusIdle,
    isPending: isFetchPlanetStatusPending,
    isError: isFetchPlanetStatusError,
    isSuccess: isFetchPlanetStatusSuccess,
  } = useApi(() =>
    fetchSpaceData(query, accessToken).then((response) => response.data)
  );

  return {
    infoPlanet,
    setData,
    initFetchPlanets,
    fetchPlanetStatus,
    setFetchPlanetStatus,
    isFetchPlanetStatusIdle,
    isFetchPlanetStatusPending,
    isFetchPlanetStatusError,
    isFetchPlanetStatusSuccess,
  };
};
