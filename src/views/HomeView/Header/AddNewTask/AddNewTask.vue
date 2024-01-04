<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task, Subtask, Board } from '@/composables/taskBoardData';
import InputFieldWithDelete from '@/components/InputFieldWithDelete.vue';
const props = defineProps({
  activeBoardData: {
    type: Object as () => Board,
    required: true
  }
});
const task = ref<Task>({
  title: '',
  description: '',
  status: props.activeBoardData.columns[0].name,
  subtasks: [
    { title: 'make coffee', isCompleted: false },
    { title: 'Drink coffee&smile', isCompleted: false }
  ] as Subtask[]
});

const allStatus = computed(() => props.activeBoardData.columns.map((column) => column.name));

const newValueForSubtask = (e: any, index: number) => {
  task.value.subtasks[index].title = e;
  task.value.subtasks[index].isCompleted = false;
};

const deleteSubtask = (index: number) => task.value.subtasks.splice(index, 1);
</script>

<template>
  <div
    id="add-new-task"
    class="pop-up-header bg-white flex flex-col justify-center align-middle p-6 gap-2 rounded dark:bg-dark-grey"
  >
    <h1 class="text-xl font-bold text-medium-grey mb-4 dark:text-white">Add New Task</h1>
    <label for="title" class="text-l font-bold text-medium-grey dark:text-white">Title</label>
    <input
      type="text"
      class="border border-medium-grey rounded border-opacity-50 p-2 w-11/12 dark:bg-dark-grey dark:text-white"
      id="title"
      v-model="task.title"
      placeholder="e.g Take coffee break"
    />
    <label for="description" class="text-l font-bold text-medium-grey dark:text-white"
      >Description</label
    >

    <textarea
      type="text"
      name="description"
      id="description"
      class="border border-medium-grey rounded border-opacity-50 p-2 w-11/12 dark:bg-dark-grey dark:text-white"
      placeholder="e.g it's always good to take a break. This 15 minute break will recharge the batteries a little."
      v-model="task.description"
      rows="4"
    ></textarea>

    <h2 class="text-l font-bold text-medium-grey mt-4 dark:text-white">Subtask</h2>
    <InputFieldWithDelete
      v-for="(subtask, index) in task.subtasks"
      :inputID="subtask.title"
      :valueHolder="subtask.title"
      @getInputValue="newValueForSubtask($event, index)"
      @deleteColumn="deleteSubtask(index)"
    />
    <button
      type="button"
      class="text-main-purple font-bold bg-lines-light rounded-xl p-2 mt-4 dark:bg-white"
      @click="task.subtasks.push({ title: '', isCompleted: false })"
    >
      + Add New Subtask
    </button>
    <h2 class="text-l font-bold text-medium-grey mt-4 dark:text-white">Status</h2>
    <select
      v-model="task.status"
      class="border border-medium-grey bg-white rounded border-opacity-50 p-2 dark:bg-dark-grey dark:text-white"
    >
      <option v-for="column in activeBoardData.columns" :key="column.name" :value="column.name">
        {{ column.name }}
      </option>
    </select>
    <button
      type="button"
      class="text-white font-bold bg-main-purple rounded-xl p-2"
      @click="$emit('addNewTask', task)"
    >
      Create Task
    </button>
  </div>
</template>

<style></style>
