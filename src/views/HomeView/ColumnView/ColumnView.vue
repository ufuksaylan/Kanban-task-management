<script setup lang="ts">
import type { Board } from '@/composables/taskBoardData';
import Column from './Column/Column.vue';
import { updateData } from '../localStorageUtils';
const props = defineProps({
  activeBoardData: {
    type: Object as () => Board,
    required: true
  }
});

const updateTask = (index: number) => {
  console.log('merhaba');
  const task = props.activeBoardData.columns[0].tasks[index];
  console.log(task);
  // updateData(props.activeBoardData);
  // const task = props.column.tasks[index];
  // emits('updateTask', index);
};
</script>

<template>
  <section id="columns" class="p-4 flex gap-4 overflow-x-auto md:col-span-9 md:row-span-5">
    <Column
      v-for="column in activeBoardData.columns"
      :column="column"
      :activeBoardData="activeBoardData"
      @updateTask="$emit('updateTask')"
    ></Column>
  </section>
  <!-- <div id="task-modal" class="flex justify-center bg-black pop-up">
    <button class="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded">Add Subtask</button>
  </div> -->
</template>

<style scoped></style>
