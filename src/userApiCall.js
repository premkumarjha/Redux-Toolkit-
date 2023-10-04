import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


export const fetchUserFromAPI = createAsyncThunk(
    'user/fetch_user',
    async () => {
      //This function will pause until we hear something from the API
      const response = await fetch(`${ENDPOINT}`).then((res) =>
        res.json(),
      );
      console.log('response',response)
      return response;
    },
  );