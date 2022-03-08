<template>
  <header-nav></header-nav>
  <router-view/>
</template>

<script>
import HeaderNav from '@/components/nav/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  background-color: #F2F2F2;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0D0D0D;
  height: 1000px;
}
.left {
  width: calc(100% * 2 / 3);
}

.right {
  width: calc(100% * 1 / 3);
}
.container-flex {
  display: flex;
  height: 100%;
}
</style>
