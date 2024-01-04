import readDataFromLocalStorage from '@/composables/localStorageGeneral';
import type { TaskBoardData } from '@/composables/taskBoardData';

export const getActiveBoardName = (): string => {
  const { activeBoard } = readDataFromLocalStorage() as TaskBoardData;
  return activeBoard === '' ? 'No board' : activeBoard;
};

export const setActiveBoard = (activeBoard: string): void => {
  const data = readDataFromLocalStorage() as TaskBoardData;
  data.activeBoard = activeBoard;
  localStorage.setItem('AppData', JSON.stringify(data));
};

export const getBoardsNames = (): string[] => {
  const { boards } = readDataFromLocalStorage() as TaskBoardData;
  return boards.map((board) => board.name);
};

export const updateData = (data: TaskBoardData): void => {
  localStorage.setItem('AppData', JSON.stringify(data));
};
