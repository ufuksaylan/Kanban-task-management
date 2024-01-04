<script setup lang="ts">
import { computed, ref } from 'vue';
import { getActiveBoard, getBoardsNames } from './localStorageUtils';
import BoardAddSection from './BoardAddSection/BoardAddSection.vue';
import EditBoard from './EditBoard/EditBoard.vue';
import type { Board } from '@/composables/taskBoardData';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard.vue';
import AddNewTask from './AddNewTask/AddNewTask.vue';
import { UseDark } from '@vueuse/components';

defineProps({
  activeBoardName: {
    type: String,
    required: true
  },
  activeBoardData: {
    type: Object as () => Board,
    required: true
  },
  boardNames: {
    type: Array as () => string[],
    required: true
  }
});

const boardEdit = ref<boolean>(false);

const addButton = ref<boolean>(false);

const boardAddition = ref<boolean>(false);

const addNewTask = ref<boolean>(false);

const toggleAddButton = () => {
  boardAddition.value = false;
  boardEdit.value = false;
  addNewTask.value = false;
  addButton.value = !addButton.value;
};

const toggleBoardAdditionSection = () => {
  boardEdit.value = false;
  addButton.value = false;
  addNewTask.value = false;
  boardAddition.value = !boardAddition.value;
};

const toggleBoardEdit = () => {
  boardAddition.value = false;
  addButton.value = false;
  addNewTask.value = false;
  boardEdit.value = !boardEdit.value;
};

const toggleAddNewTask = () => {
  boardAddition.value = false;
  addButton.value = false;
  boardEdit.value = false;
  addNewTask.value = !addNewTask.value;
};
</script>

<template>
  <div
    id="side-bar"
    class="hidden bg-white p-6 col-span-2 border-r-2 border-medium-grey row-span-6 dark:bg-dark-grey flex-col gap-4 align-middle md:flex"
  >
    <div class="img-center">
      <img src="@/assets/icons/logo-dark.svg" alt="logo" class="block dark:hidden" />
      <img src="@/assets/icons/logo-light.svg" alt="logo" class="hidden dark:block" />
    </div>

    <BoardAddSection
      :boardNames="boardNames"
      @changeActiveBoard="
        (index: number) => {
          // toggleBoardAdditionSection();
          $emit('changeActiveBoard', index);
        }
      "
      @openCreateNewBoard="toggleAddButton"
    />
  </div>
  <div
    id="header"
    class="flex justify-between relative bg-white p-6 dark:bg-dark-grey md:col-span-10 md:row-auto"
  >
    <div class="flex gap-3">
      <div class="img-center md:hidden">
        <img src="@/assets/icons/logo-mobile.svg" alt="logo" />
      </div>
      <div class="flex gap-3 cursor-pointer md:hidden" @click="toggleBoardAdditionSection">
        <h2 class="text-black font-bold dark:text-white">{{ activeBoardName }}</h2>
        <div class="img-center">
          <img
            v-if="!boardAddition"
            src="@/assets/icons/icon-chevron-down.svg"
            alt="chevron-down"
          />
          <img v-else src="@/assets/icons/icon-chevron-up.svg" alt="chevron-up" />
        </div>
      </div>

      <div class="flex justify-center align-middle">
        <h2 class="hidden md:block text-black font-bold text-xl dark:text-white">
          {{ activeBoardName }}
        </h2>
      </div>
    </div>

    <div class="task-addition flex gap-4 md:h-10">
      <div
        class="px-4 bg-main-purple rounded-2xl img-center cursor-pointer flex gap-3"
        @click="toggleAddNewTask"
      >
        <img src="@/assets/icons/icon-add-task-mobile.svg" alt="add task" />
        <h1 class="hidden text-white font-bold md:block">Add New Task</h1>
      </div>
      <div class="img-center cursor-pointer" @click="toggleBoardEdit">
        <img src="@/assets/icons/icon-vertical-ellipsis.svg" alt="settings" />
      </div>
    </div>

    <EditBoard
      v-if="boardEdit"
      :activeBoard="activeBoardName"
      :activeBoardData="activeBoardData"
      @updateActiveBoard="
        (tempActiveBoard) => {
          toggleBoardEdit();
          $emit('updateActiveBoard', tempActiveBoard);
        }
      "
    />

    <CreateNewBoard
      v-if="addButton"
      :boardNames="boardNames"
      @addNewBoard="
        (newBoard) => {
          toggleAddButton();
          $emit('addNewBoard', newBoard);
        }
      "
    />
    <BoardAddSection
      v-if="boardAddition"
      :boardNames="boardNames"
      @changeActiveBoard="
        (index: number) => {
          toggleBoardAdditionSection();
          $emit('changeActiveBoard', index);
        }
      "
      @openCreateNewBoard="toggleAddButton"
    />

    <AddNewTask
      v-if="addNewTask"
      :activeBoardData="activeBoardData"
      @addNewTask="
        (newTask) => {
          toggleAddNewTask();
          $emit('addNewTask', newTask);
        }
      "
    />
  </div>
</template>

<style scoped></style>
