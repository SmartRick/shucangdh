<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
h1,h2,h3,h4,h5,h6,div,body,html,ul,li,form{
  padding: 0;
  margin: 0;
}
html,body,#app {
  height: 100%;
  width: 100%;
}
</style>
