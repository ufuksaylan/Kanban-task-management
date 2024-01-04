<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '@/composables/taskBoardData';

import { OnClickOutside } from '@vueuse/components';

defineProps({
  task: {
    type: Object as () => Task,
    required: true
  },
  numberOfSubtask: {
    type: Number,
    required: true
  },
  numberOfSubtaskCompleted: {
    type: Number,
    required: true
  },
  columnNames: {
    type: Array as () => string[],
    required: true
  }
});

const emits = defineEmits(['toggleTaskDetail']);

const taskDetail = ref(true);

const toggleTaskDetail = () => {
  taskDetail.value = false;
  emits('toggleTaskDetail');
};
</script>

<template>
  <OnClickOutside @trigger="toggleTaskDetail">
    <div
      v-if="taskDetail"
      id="task-details"
      class="pop-up bg-white flex flex-col gap-3 w-96 dark:bg-dark-grey"
    >
      <div>
        <h1 class="text-xl font-bold">{{ task.title }}</h1>
      </div>

      <div>
        <p class="text-medium-grey">{{ task.description }}</p>
      </div>

      <h5>Subtasks ({{ numberOfSubtaskCompleted }} of {{ numberOfSubtask }})</h5>
      <div v-for="subtask in task.subtasks" class="flex flex-col">
        <div
          class="flex gap-4 p-2 rounded bg-light-grey-light-bg hover:bg-main-purple-hover dark:text-medium-grey dark:bg-very-dark-grey-dark-bg dark:hover:bg-very-dark-grey-dark-hover"
        >
          <input type="checkbox" :id="subtask.title" v-model="subtask.isCompleted" />
          <label :for="subtask.title" :class="{ 'line-through': subtask.isCompleted }">{{
            subtask.title
          }}</label>
        </div>
      </div>

      <h5>Current Status</h5>

      <select
        v-model="task.status"
        class="border border-medium-grey bg-white rounded border-opacity-50 p-2 dark:bg-dark-grey dark:text-white"
      >
        <option v-for="name in columnNames" :key="name" :value="name">
          {{ name }}
        </option>
      </select>
    </div>
  </OnClickOutside>
</template>

<style scoped></style>
