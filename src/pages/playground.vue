<script setup lang="ts">
const { data, pending, refresh } = await useMountainData();
</script>

<template>
  <div class="screen">
    <h2 class="title">Hello, Nuxt3!</h2>
    <div class="content">
      <h3>Button variations</h3>
      <div class="button-group">
        <PlaygroundButtonComputed label="click!" />
        <BaseButton color="secondary">secondary</BaseButton>
        <BaseButton color="success">success</BaseButton>
        <BaseButton color="warning">warning</BaseButton>
        <BaseButton color="info">info</BaseButton>
        <BaseButton color="danger">danger</BaseButton>
      </div>
    </div>
    <div class="content">
      <h3>Interactive Form</h3>
      <PlaygroundForm />
    </div>
    <div class="content">
      <h3>Fetching Data</h3>
      <div v-if="pending" class="mountains">
        <p>loading...</p>
      </div>
      <div v-else class="mountains">
        <div v-for="(mountain, i) in data" :key="i" class="card">
          <h4 v-if="data">{{ mountain.title }}</h4>
          <p v-if="data">{{ mountain.height }}</p>
        </div>
      </div>
      <BaseButton @click="refresh">Refresh</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  width: 80%;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}
.mountains {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px 5%;
  margin-bottom: 16px;
  min-height: 96px;
}
.card {
  width: calc(30%);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px #dddddd;
}
</style>
