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
.center-v {
  align-self: center;
}
.center-h {
  justify-content: center;
}
.info {
  padding-left: 5%;
  padding-right: 5%;
}
.chevron {
  height: .5vw;
  margin-left: 1vw;
  transition: all .1s ease-in;
}
.link {
  text-decoration: none;
  font-size: .9vw;
  font-weight: 600;
  color: #d9d9d9;
}
.link-dark {
  text-decoration: none;
  font-size: .9vw;
  font-weight: 600;
  color: #2c2d32;
}
.link:hover {
  color: #f2f2f2;
}
.link-dark:hover {
  color: #0D0D0D;
}
.link:hover > .chevron {
  color: #f2f2f2;
  transform: translateX(10px);
}
.link-dark:hover > .chevron  {
  color: #0D0D0D;
  transform: translateX(10px);
}
.text-l {
  font-size: 2.15vw;
  margin: 1% 0;
  font-weight: 300;
  color: #f2f2f2;
  line-height: 6vh;
}
.text-l-dark {
  font-size: 2.15vw;
  margin: 1% 0;
  font-weight: 300;
  color: #0D0D0D;
  line-height: 6vh;
}
.link-container {
  margin-top: 2vh;
}
</style>
