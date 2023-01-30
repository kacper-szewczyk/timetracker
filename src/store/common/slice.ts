import AsyncStorage from '@react-native-async-storage/async-storage';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { Task } from '../../types/task';
import generateId from '../../utils/generateId';
import { fetchActiveTask, fetchTasks } from './actions';

type State = {
  tasks: Task[];
  activeTask: Task | null;
  showTaskDetails:Task | null;
};

const INITIAL_STATE: State = {
  tasks: [],
  activeTask: null,
  showTaskDetails: null,
};

type Reducer<T = undefined> = CaseReducer<State, PayloadAction<T>>;

const setTasks: Reducer<Task[]> = (state, action) => {
  state.tasks = action.payload;
};

const setActiveTask: Reducer<Task | null> = (state, action) => {
  if (action.payload) {
    const records = (action.payload! as Task).records || [];
    const newRecords = {id: generateId(), startedAt: Date.now()};
    state.activeTask = {...action.payload, records: [...records, newRecords]};
  }
  else if (state.activeTask) {
    const records = state.activeTask.records || [];
    const newRecords = {...records[records.length - 1], finishedAt: Date.now()};
    state.activeTask = {...state.activeTask, records: [...records.slice(0, records.length - 1), newRecords]};
    const time = state.activeTask.records?.reduce((prev, current) => prev + ((current.finishedAt || Date.now()) - current.startedAt) / 1000, 0);
    state.activeTask = {...state.activeTask, time};
    const taskIndex = state.tasks.findIndex(task => task.id === state.activeTask?.id)
    state.tasks[taskIndex] = state.activeTask;
    state.activeTask = action.payload;
  }
};

const setShowTaskDetails: Reducer<Task | null> = (state, action) => {
  state.showTaskDetails = action.payload;
};

const addNewTask: Reducer<Task> = (state, action) => {
  state.tasks = [...state.tasks, action.payload];
};


const reducers = {
  setActiveTask,
  setTasks,
  addNewTask,
  setShowTaskDetails,
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
