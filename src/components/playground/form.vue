<script setup lang="ts">
const inp = ref('');
const capitalized = computed(() => swapCase(inp.value));

const handleClick = (e: any) => {
  e.preventDefault();
  inp.value = '';
};
</script>

<template>
  <form action="" class="wrapper">
    <div class="content">
      <input v-model="inp" type="text" placeholder="Enter some text" />
      <p class="output">Case swapped: {{ capitalized }}</p>
    </div>
    <div class="button">
      <BaseButton @click="handleClick">Reset</BaseButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.output {
  word-break: break-all;
}
.button {
  width: 80px;
}
</style>
