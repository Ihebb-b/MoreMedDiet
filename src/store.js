import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import { surveyApiSlice } from './slices/surveyApiSlice'; 
import { searchApiSlice } from './slices/searchApiSlice';
import { statsApiSlice } from './slices/statsApiSlice';
import { userApiSlice } from './slices/userApiSlice';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [surveyApiSlice.reducerPath]: surveyApiSlice.reducer, 
        [searchApiSlice.reducerPath] : searchApiSlice.reducer,
        [statsApiSlice.reducerPath] : statsApiSlice.reducer,
        [userApiSlice.reducerPath] : userApiSlice.reducer,

        auth: authReducer,


    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(apiSlice.middleware)
    .concat(surveyApiSlice.middleware) 
    .concat(searchApiSlice.middleware)
    .concat(statsApiSlice.middleware)
    .concat(userApiSlice.middleware),
    devTools: true,
});

export default store;
