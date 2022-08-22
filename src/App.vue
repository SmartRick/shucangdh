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
h1, h2, h3, h4, h5, h6, div, body, html, ul, li, form {
  padding: 0;
  margin: 0;
}

html, body, #app {
  height: 100%;
  width: 100%;
}

a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: #FFFFFF;
}

a:hover, a:focus{
  color: #FFFFFF;
  text-decoration: none;
  outline-style: none; /*FF*/
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input, select {
  vertical-align: middle;
}

/*css为clearfix，清除浮动*/
.clearfix::before,
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1; /*IE/7/6*/
}

ul {
  list-style: none;
}

a:hover, a:link, a:visited, a:active, a:focus {
  color: black;
  text-decoration: none;
}
</style>
