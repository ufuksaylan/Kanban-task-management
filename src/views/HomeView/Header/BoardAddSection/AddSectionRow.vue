<script setup lang="ts">
defineProps({
  boardName: {
    type: String,
    required: true
  },
  isCreateNewBoard: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-start-2 col-end-3 img-center">
      <img
        src="@/assets/icons/icon-board.svg"
        alt="icon-board"
        :class="{ 'add-board': isCreateNewBoard }"
      />
    </div>
    <div class="col-start-3 col-end-11 break-words">
      <h3 :class="{ 'text-main-purple': isCreateNewBoard }">{{ boardName }}</h3>
    </div>
  </div>
</template>

<style scoped>
img {
  filter: var(--color-filter-text);
}
.add-board {
  filter: invert(42%) sepia(6%) saturate(6654%) hue-rotate(206deg) brightness(90%) contrast(85%);
}
</style>
