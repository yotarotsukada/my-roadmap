---
name: 'vue-component'
root: 'src'
output: [
  'components',
  'components/*',
  'pages',
  'pages/*',
]
ignore: ['src']
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | kebab }}.vue`

```vue
<script setup lang="ts">

</script>

<template>
  
</template>

<style scoped lang="scss">

</style>

```
