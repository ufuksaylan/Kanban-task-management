<script setup lang="ts">
import { type PropType, ref } from 'vue';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle.vue';
import AddSectionRow from './AddSectionRow.vue';
defineProps({
  boardNames: {
    type: Array as PropType<string[]>,
    required: true
  }
});
const emit = defineEmits(['openCreateNewBoard']);
</script>

<template>
  <!-- absolute ml-auto mr-auto left-0 right-0 top-28 w-8/12 rounded -->
  <div
    class="pop-up-header md:static board-addition flex flex-col justify-between md:h-full gap-4 text-medium-grey bg-white py-2 w-10/12 md:w-full dark:bg-dark-grey"
  >
    <div class="flex flex-col gap-4" data-testid="add-section-row">
      <div class="title flex justify-center align-middle">
        <h3>All boards ({{ boardNames.length }})</h3>
      </div>
      <AddSectionRow
        v-for="(boardName, index) in boardNames"
        :boardName="boardName"
        class="cursor-pointer"
        @click="$emit('changeActiveBoard', index)"
      />

      <AddSectionRow
        :boardName="`+ Create New Board`"
        :isCreateNewBoard="true"
        class="cursor-pointer"
        @click="$emit('openCreateNewBoard')"
      />
    </div>

    <ThemeToggle />
  </div>
</template>

<style></style>
