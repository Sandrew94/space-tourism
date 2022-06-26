import { ApiStatus, defaultApiStatuses, IDLE } from "api/constants/apiStatus";
import { useState, useMemo } from "react";

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
  const statuses = {} as Statuses;

  for (const status of defaultApiStatuses) {
    const normalisedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalisedStatus}` as keyof Statuses;
    statuses[normalisedStatusKey] = status === currentStatus;
  }

  return statuses;

  //{
  // isIdle: true,
  // isPending: false,
  // isSuccess:false,
  // isError:false
  // }
};

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
  const [status, setStatus] = useState<ApiStatus>(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
