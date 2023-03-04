import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { MovieReducer } from './recipes/slice';
import { SearchReducer } from './recipes/searchSlice';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
    key: 'key',
    storage,

}
const rootReducer = combineReducers({
  movie: MovieReducer,
  search: SearchReducer,
});
const persReducer = persistReducer(persistConfig,rootReducer)



export const store = configureStore({
  reducer: persReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);