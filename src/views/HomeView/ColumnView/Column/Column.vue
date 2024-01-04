<script setup lang="ts">
import type { Column, Task, Board } from '@/composables/taskBoardData';
import TaskShow from './TaskShow/TaskShow.vue';

const props = defineProps({
  column: {
    type: Object as () => Column,
    required: true
  },
  activeBoardData: {
    type: Object as () => Board,
    required: true
  }
});
const emits = defineEmits(['updateTask']);
const updateTask = (index: number) => {
  // const task = props.column.tasks[index];
  emits('updateTask', index);
};
</script>

<template>
  <div id="column-name" class="w-80 flex-shrink-0">
    <div class="title h-6 flex gap-4 mb-4">
      <div class="">
        <div class="w-4 h-4 rounded-full bg-red mt-0.5"></div>
      </div>
      <div class="text-medium-grey tracking-widest text-xs">
        <span>{{ column.name.toUpperCase() }} ({{ column.tasks.length }})</span>
      </div>
    </div>

    <div id="task" class="flex flex-col gap-4">
      <TaskShow
        class="cursor-pointer"
        v-for="(task, index) in column.tasks"
        :task="task"
        :columnNames="activeBoardData.columns.map((column) => column.name)"
        @updateTask="updateTask(index)"
      />
    </div>
  </div>
</template>

<style scoped></style>
