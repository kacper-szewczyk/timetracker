import AsyncStorage from '@react-native-async-storage/async-storage';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { Task } from '../../types/task';
import { fetchActiveTask, fetchTasks } from './actions';

type State = {
  tasks: Task[] | null;
  activeTask: Task | null;
};

const INITIAL_STATE: State = {
  tasks: null,
  activeTask: null,
};

type Reducer<T = undefined> = CaseReducer<State, PayloadAction<T>>;

const setTasks: Reducer<Task[]> = (state, action) => {
  state.tasks = action.payload;
};

const setActiveTask: Reducer<Task> = (state, action) => {
  state.activeTask = action.payload;
};


const reducers = {
  setActiveTask,
  setTasks,
};

const { reducer, name, ...rest } = createSlice<State, typeof reducers>({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers,
  extraReducers: ({ addCase }) => {
    addCase(fetchTasks.fulfilled, (state, action) => {
      if (action.payload) {
        state.tasks = action.payload;
      }
    });
    addCase(fetchActiveTask.fulfilled, (state, action) => {
      if (action.payload) {
        state.activeTask = action.payload;
      }
    });
  },
});

const persistConfig = {
  key: name,
  storage: AsyncStorage,
  whitelist: ['tasks', 'activeTask'],
  timeout: 0,
};

export default {
  ...rest,
  reducer: persistReducer(persistConfig, reducer),
};
