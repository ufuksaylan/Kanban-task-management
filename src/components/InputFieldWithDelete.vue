<script setup lang="ts">
defineProps({
  placeHolder: {
    type: String
  },
  valueHolder: {
    type: String
  },
  inputID: {
    type: String,
    required: true
  },
  title: {
    type: String
  }
});

const emit = defineEmits(['getInputValue', 'delete']);

const sendInputValue = (e: any) => {
  emit('getInputValue', e.target.value);
};

// const deleteFromChild = () => {
//   emit('deleteColumn');
// };
</script>

<template>
  <div class="flex gap-4">
    <input
      type="text"
      :name="inputID"
      :id="inputID"
      :value="valueHolder"
      :placeholder="placeHolder"
      class="border border-medium-grey rounded border-opacity-50 p-2 w-11/12 dark:bg-dark-grey dark:text-white"
      @input="sendInputValue"
    />
    <div class="img-center cursor-pointer" @click="$emit('deleteColumn')">
      <img src="@/assets/icons/icon-cross.svg" alt="delete" />
    </div>
  </div>
</template>

<style scoped></style>
