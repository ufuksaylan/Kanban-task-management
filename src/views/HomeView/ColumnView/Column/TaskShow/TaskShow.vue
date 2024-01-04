<script setup lang="ts">
import type { Task } from '@/composables/taskBoardData';
import { computed, ref } from 'vue';
import TaskDetails from './TaskDetails.vue';
const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true
  },
  columnNames: {
    type: Array as () => string[],
    required: true
  }
});

const emits = defineEmits(['updateTask']);

const numberOfSubtask = computed(() => props.task.subtasks.length);

const numberOfSubtaskCompleted = computed(
  () => props.task.subtasks.filter((subtask) => subtask.isCompleted).length
);

const taskDetail = ref(false);

const changeTask = () => {
  taskDetail.value = true;
};

const UpdateTask = () => {
  taskDetail.value = false;
  // console.log(props.task);
  emits('updateTask');
};
</script>

<template>
  <div
    @click="changeTask"
    id="task"
    class="w-11/12 text-black bg-white flex flex-col p-4 rounded-md dark:bg-dark-grey dark:text-white"
  >
    <div>
      <h1 class="font-bold">{{ task.title }}</h1>
    </div>
    <div>
      <p class="text-medium-grey">
        {{ numberOfSubtaskCompleted }} of {{ numberOfSubtask }} subtasks
      </p>
    </div>
    <TaskDetails
      v-if="taskDetail"
      :task="task"
      :numberOfSubtask="numberOfSubtask"
      :numberOfSubtaskCompleted="numberOfSubtaskCompleted"
      :columnNames="columnNames"
      @toggleTaskDetail="UpdateTask"
    ></TaskDetails>
  </div>
</template>

<style scoped></style>
