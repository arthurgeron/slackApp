import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import type {ResponseData, UserData} from './types';
import {client} from '@constants';

export function useUserListQuery(realtime: boolean): UseQueryResult<Array<UserData>, AxiosError> {
  
  return useQuery<Array<UserData>, AxiosError>(
    ['user-list'],
    () =>
      client.get<ResponseData>('/users')
        .then((response) => response.data?.users ?? []),
    {
      retry: (count, err) => count < 3 || err?.response?.status !== 500,
      refetchInterval: realtime ? 3000 : 0,
    }
  );
}
