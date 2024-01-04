<script setup lang="ts">
import { type PropType, ref } from 'vue';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle.vue';
import InputFieldWithDelete from '@/components/InputFieldWithDelete.vue';
import type { Board, Column } from '@/composables/taskBoardData';
defineProps({
  boardNames: {
    type: Array as PropType<string[]>,
    required: true
  }
});
const emits = defineEmits(['toggleBoardAdditionSection', 'addNewBoard']);

const addButton = ref<boolean>(false);

const newBoard = ref<Board>({
  name: '',
  columns: [
    { name: 'Todo', tasks: [] },
    { name: 'Doing', tasks: [] }
  ]
});

const deleteColumn = (index: number) => newBoard.value.columns.splice(index, 1);

const newValueForColumnNames = (e: any, index: number) => {
  newBoard.value.columns[index].name = e;
};

const updateBoardData = () => {
  emits('addNewBoard', newBoard.value);
};
</script>
<template>
  <form
    class="absolute top-32 bg-white ml-auto mr-auto left-0 right-0 w-11/12 flex flex-col justify-center align-middle p-6 gap-2 rounded dark:bg-dark-grey"
  >
    <h1 class="text-xl font-bold text-medium-grey mb-4 dark:text-white">Edit Board</h1>
    <label for="boardName" class="text-l font-bold text-medium-grey dark:text-white"
      >Board Name</label
    >
    <input
      v-model="newBoard.name"
      type="text"
      class="border border-medium-grey rounded border-opacity-50 p-2 w-11/12 dark:bg-dark-grey dark:text-white"
      id="boardName"
      placeholder="e.g. Web Design"
    />

    <h2 class="text-l font-bold text-medium-grey mt-4 dark:text-white">Board Columns</h2>

    <InputFieldWithDelete
      v-for="(column, index) in newBoard.columns"
      :inputID="column.name"
      :valueHolder="column.name"
      :placeHolder="'e.g. Todo'"
      @getInputValue="newValueForColumnNames($event, index)"
      @deleteColumn="deleteColumn(index)"
    />
    <button
      type="button"
      class="text-main-purple font-bold bg-lines-light rounded-xl p-2 mt-4 dark:bg-white"
      @click="newBoard.columns.push({ name: '', tasks: [] })"
    >
      + Add New Column
    </button>

    <button
      type="button"
      class="text-white font-bold bg-main-purple rounded-xl p-2"
      @click="updateBoardData"
    >
      Save Changes
    </button>
  </form>
</template>

<style></style>
