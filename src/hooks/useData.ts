// creating a generic useData hook
import { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setIsLoading(false);
          setError((err as AxiosError).message);
        });
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error } as const;
};

export default useData;
