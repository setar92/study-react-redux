import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setIsLoading, setError, setIsAuth } from '../auth/slice';

import type { User } from '../../common/types/index';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: './users.json' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], User>({
      query: () => '',
      async onQueryStarted(
        { username, password },
        { dispatch, queryFulfilled },
      ) {
        console.log(username, password);
        dispatch(setIsLoading(true));
        try {
          console.log('start');
          const { data: users } = await queryFulfilled;
          console.log(users, 'users');
          const currentUser = users.find(
            (it) => it.username === username && it.password === password,
          );
          currentUser ? dispatch(setIsAuth(true)) : dispatch(setIsAuth(false));
        } catch (err) {
          console.log('Error', err);
          if (err instanceof Error) {
            dispatch(
              setError(`Error fetching users! Error message: ${err.message}`),
            );
          }
        } finally {
          dispatch(setIsLoading(false));
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
