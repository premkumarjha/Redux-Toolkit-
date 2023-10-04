
//https://codesandbox.io/s/react-crud-with-redux-toolkit-14m6j?file=/src/EditForm.js   =>CRUD;

//Redux Toolkit  =>https://medium.com/@sshweta0077/redux-toolkit-rtk-query-c74b2b2112bb

import {createSlice} from '@reduxjs/toolkit';
import {fetchUserFromAPI} from '../src/userApiCall';

const initialState={
id:'',
name:'',
emai:'',
address:'',
loading:false,
data:[],

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    //   add: (state, action) => {
    //     state.characters = action.payload;
    //   },
    },
    //Listens to an external events : like "fetchUserFromAPI"
    extraReducers: {
      //An alternative to builder
      [fetchUserFromAPI.pending]: (state, action) => {
        state.loading = true;
        state.data = [];
      },
      [fetchUserFromAPI.fulfilled]: (state, action) => {
        //console.log('state : ', state);
        console.log('action : ', action);
        state.data = action.payload;
        state.loading = false;
        // state.id=
        // state.id=
        // state.id=
        // state.id=
      },
    
      [fetchUserFromAPI.rejected]: (state, action) => {
        state.loading = false; //yaha error shyad true.
        state.data = [];
      },
    },
  });

  export default userSlice.reducer;