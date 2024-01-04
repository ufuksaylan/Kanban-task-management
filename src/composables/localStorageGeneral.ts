import type { TaskBoardData } from './taskBoardData';

// Function to create app data if it doesn't exist
const createAppDataIfNotExist = (): void => {
  const storedDataString = localStorage.getItem('AppData');
  if (!storedDataString) {
    const initialData: TaskBoardData = { boards: [], activeBoard: '' };
    localStorage.setItem('AppData', JSON.stringify(initialData));
  }
};

// Function to read data from local storage
const readDataFromLocalStorage = (): TaskBoardData => {
  createAppDataIfNotExist();
  const storedDataString = localStorage.getItem('AppData');
  return JSON.parse(storedDataString!) as TaskBoardData;
};

export default readDataFromLocalStorage;
