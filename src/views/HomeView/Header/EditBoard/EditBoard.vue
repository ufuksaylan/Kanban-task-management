<script setup lang="ts">
import InputFieldWithDelete from '@/components/InputFieldWithDelete.vue';
import type { Board } from '@/composables/taskBoardData';
import { ref } from 'vue';
const props = defineProps({
  activeBoard: {
    type: String,
    required: true
  },
  activeBoardData: {
    type: Object as () => Board,
    required: true
  }
});

const tempActiveBoard = ref<Board>(JSON.parse(JSON.stringify(props.activeBoardData)));

const deleteColumn = (index: number) => tempActiveBoard.value.columns.splice(index, 1);

const newValueForColumnNames = (e: any, index: number) => {
  tempActiveBoard.value.columns[index].name = e;
  console.log(tempActiveBoard.value);
};
</script>

<template>
  <div
    id="edit-board"
    class="pop-up-header bg-white flex flex-col justify-center align-middle p-6 gap-2 rounded dark:bg-dark-grey"
  >
    <h1 class="text-xl font-bold text-medium-grey mb-4 dark:text-white">Edit Board</h1>
    <label for="boardName" class="text-l font-bold text-medium-grey dark:text-white"
      >Board Name</label
    >
    <input
      type="text"
      class="border border-medium-grey rounded border-opacity-50 p-2 w-11/12 dark:bg-dark-grey dark:text-white"
      id="boardName"
      v-model="tempActiveBoard.name"
    />

    <h2 class="text-l font-bold text-medium-grey mt-4 dark:text-white">Board Columns</h2>
    <InputFieldWithDelete
      v-for="(column, index) in tempActiveBoard.columns"
      :inputID="column.name"
      :valueHolder="column.name"
      @getInputValue="newValueForColumnNames($event, index)"
      @deleteColumn="deleteColumn(index)"
    />
    <button
      type="button"
      class="text-main-purple font-bold bg-lines-light rounded-xl p-2 mt-4 dark:bg-white"
      @click="tempActiveBoard.columns.push({ name: '', tasks: [] })"
    >
      + Add New Column
    </button>

    <button
      type="button"
      class="text-white font-bold bg-main-purple rounded-xl p-2"
      @click="$emit('updateActiveBoard', tempActiveBoard)"
    >
      Save Changes
    </button>

    <button></button>
  </div>
</template>

<style scoped></style>
