import { RootState } from '../store';

export const getTasks = (state: RootState) => state.common.tasks;

export const getActiveTask = (state: RootState) => state.common.activeTask;

export const getShowTaskDetails = (state: RootState) => state.common.showTaskDetails;