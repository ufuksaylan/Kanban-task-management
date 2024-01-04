<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="bg-lines-light p-4 m-2 rounded max-w-xs flex justify-center dark:bg-very-dark-grey-dark-bg"
  >
    <div class="img-center mr-2">
      <img src="@/assets/icons/icon-light-theme.svg" alt="light-theme sun icon" />
    </div>
    <div>
      <div class="h-4 relative">
        <label
          for="DarkToggle"
          class="after:bg-white after:w-3 after:h-3 after:rounded-full after:top-1 after:left-1 w-9 h-5 rounded-2xl bg-main-purple absolute cursor-pointer"
          :class="{ 'dark-mode-label': isDark }"
        ></label>
        <input
          class="hidden"
          type="checkbox"
          name="DarkToggle"
          id="DarkToggle"
          @click="toggleDark()"
        />
      </div>
    </div>

    <div class="img-center ml-12">
      <img src="@/assets/icons/icon-dark-theme.svg" alt="dark-theme moon icon" />
    </div>
  </div>
</template>

<style scoped>
label {
  transition: 0.3s;
}

label:after {
  content: '';
  position: absolute;
  transition: 0.3s;
}

.dark-mode-label:after {
  transform: translateX(110%);
}
</style>
