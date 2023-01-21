import { configureStore } from '@reduxjs/toolkit';
import common from './common/slice';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    common: common.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
};

export const persistor = persistStore(store);
