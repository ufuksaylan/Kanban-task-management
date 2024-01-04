<script setup lang="ts">
import Header from './Header/Header.vue';
import { computed, ref } from 'vue';
import type { Board, TaskBoardData, Task, Column } from '@/composables/taskBoardData';
import readDataFromLocalStorage from '@/composables/localStorageGeneral';
import ColumnView from './ColumnView/ColumnView.vue';
import BoardAddSection from './Header/BoardAddSection/BoardAddSection.vue';
import { updateData } from './localStorageUtils';
import { OnClickOutside } from '@vueuse/components';

const boardsData = ref<TaskBoardData>(readDataFromLocalStorage());

const activeBoardName = computed(() => boardsData.value.activeBoard);

const activeBoardData = computed(
  () =>
    boardsData.value.boards.find((board) => board.name === activeBoardName.value) || {
      name: '',
      columns: []
    }
);

const boardNames = computed(() => boardsData.value.boards.map((board) => board.name));

const activeBoardIndex = computed(() => boardNames.value.indexOf(activeBoardName.value));

const changeActiveBoard = (index: number) => {
  boardsData.value.activeBoard = boardNames.value[index];
  updateData(boardsData.value);
  boardsData.value = readDataFromLocalStorage();
};

const updateActiveBoardData = (newBoardData: Board) => {
  boardsData.value.boards[activeBoardIndex.value] = newBoardData;
  boardsData.value.activeBoard = newBoardData.name;
  updateData(boardsData.value);
  boardsData.value = readDataFromLocalStorage();
};

const addNewTask = (task: Task) => {
  boardsData.value.boards[activeBoardIndex.value].columns
    .find((column) => column.name === task.status)
    ?.tasks.push(task);

  updateData(boardsData.value);
  boardsData.value = readDataFromLocalStorage();
};
</script>

<template>
  <!-- <div class=""> -->
  <Header
    :activeBoardName="activeBoardName"
    :activeBoardData="activeBoardData"
    :boardNames="boardNames"
    @toggleBoardEdit=""
    @addNewBoard="
      (newBoard: Board) => {
        boardsData.boards.push(newBoard);
        updateData(boardsData);
      }
    "
    @changeActiveBoard="changeActiveBoard"
    @updateActiveBoard="updateActiveBoardData"
    @addNewTask="(task) => addNewTask(task)"
  ></Header>

  <ColumnView :activeBoardData="activeBoardData" @updateTask="updateData(boardsData)"></ColumnView>
  <!-- </div> -->
</template>

<style scoped></style>
