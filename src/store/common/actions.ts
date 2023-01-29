import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from '../../types/task';
import { ThunkApiConfig } from '../store';
import slice from './slice';

const {
  setTasks,
  setActiveTask,
} = slice.actions;

export {
  setTasks,
  setActiveTask,
};


const INITIAL_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
] as Task[];

export const fetchTasks = createAsyncThunk<
  Task[] | undefined,
  void,
  ThunkApiConfig
>('common/setTasks', (_, { }) => {
  try {
    const data = INITIAL_DATA;

    return data;
  } catch (error) {
    console.log('error', error);
  }
});



export const fetchActiveTask = createAsyncThunk<
  Task | undefined,
  void,
  ThunkApiConfig
>('common/setActiveTask', async (_) => {
  try {
    const data = await INITIAL_DATA[0];

    return data;
  } catch (error) {
    console.log('error', error);
  }
});
