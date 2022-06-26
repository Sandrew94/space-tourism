import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { PENDING, SUCCESS, ERROR } from "../constants/apiStatus";

interface UseApiConfig<T> {
  initialData?: T;
}

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;

export function useApi<TData = any, TError = unknown>(
  fn: ApiFunction<TData | any>,
  config: UseApiConfig<TData> = {}
) {
  const { initialData } = config;
  const [data, setData] = useState<TData | undefined>(initialData);
  const [error, setError] = useState<TError | unknown>();
  const { status, setStatus, ...statuses } = useApiStatus();

  const exec = async <A>(...args: A[]) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);

      if (data.error) {
        setStatus(ERROR);
        return;
      }
      setData(data);
      setStatus(SUCCESS);

      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    error,
    exec,
    ...statuses,
  };
}
