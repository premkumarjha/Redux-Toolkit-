import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from '../src/userSlice';
//import logger from "redux-logger";
//const preloadedState = window.__PRELOADED_STATE__

 const store = configureStore({
        reducer: {
           users: userSlice
           },
           //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
      }); 
      //console.log(store.getState().users)
      export default store;