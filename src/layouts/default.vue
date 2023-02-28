<template>
  <div class="screen">
    <header>
      <RouterLink to="/">
        <h1>corgi todo</h1>
      </RouterLink>
    </header>
    <div class="scroll">
      <main>
        <slot />
      </main>
      <footer>
        <p>©️ 2023 corgi todo</p>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 8px 16px;
  box-shadow: 4px 0 8px #999999;
  z-index: 10;

  a {
    color: inherit;
    text-decoration: inherit;

    :hover {
      opacity: 0.7;
    }
  }
}
.scroll {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
main {
  flex: 1;
  width: 80%;
  margin: auto;
  padding-top: 24px;
}
footer {
  display: flex;
  justify-content: center;
  padding: 80px 0 24px 0;
  color: #999999;
}
</style>
