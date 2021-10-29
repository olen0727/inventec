<template>
  <router-view />
</template>

<style lang="scss">
html,
body,
iframe {
  margin: 0px;
  padding: 0px;
  height: 100%;
  border: none;
}
* {
  box-sizing: border-box;
}
iframe.istagFrame {
  display: block;
  width: 100%;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}
</style>
