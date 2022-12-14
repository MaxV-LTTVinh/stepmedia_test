import createSagaMiddleware from "@redux-saga/core";
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import studentReducer from "src/features/Students/studentSlice";
import globalReducer from "./globalSlice";
import rootSaga from "./rootsaga";

const rootReducer = combineReducers({
  //   router: connectRouter(history),
  global: globalReducer,
  student: studentReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
