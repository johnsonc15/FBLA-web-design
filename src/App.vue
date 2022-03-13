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
:root {
  --blue-main: #2e6ff2;
  --gray-main: #2c2d32;
  --gray-secondary: #0D0D0D;
  --white-main: #f2f2f2;
  --white-secondary: #d9d9d9;

  --fs-h-xl: clamp(3.5rem, 5.5vw, 9rem);
  --fs-h-l: clamp(1.46rem, 2.3vw, 5.7rem);
  --fs-h-m: clamp(1.05rem, 1.65vw, 2.7rem);
  --fs-h-s: clamp(.7rem, 1.1vw, 1.8rem);
  --fs-h-xs: clamp(.63rem, 1vw, 1.63rem);

  --fs-t-xl: clamp(1.37rem, 2.15vw, 3.5rem);
  --fs-t-l: clamp();
  --fs-t-m: clamp(.57rem, .9vw, 1.47rem);
  --fs-t-s: clamp(.45rem, .7vw, 1.15rem);
}
body {
  background-color: var(--white-main);
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-secondary);
  height: 1000px;
}
.left-1-3 {
  width: calc(100% * 2 / 3);
}
.right-2-3 {
  width: calc(100% * 1 / 3);
}
.h-100 {
  height: 100%;
}
.h-86 {
  height: 100%;
  max-height: 928.8px;
}
.w-100 {
  width: 100%;
}
.container-flex {
  display: flex;
}
.center-v {
  align-self: center;
}
.center-h {
  justify-content: center;
}
.info {
  padding-inline: 5%;
}
.chevron {
  height: 1rem;
  margin-left: 1vw;
  transition: all .1s ease-in;
}
.link {
  text-decoration: none;
  font-size: var(--fs-t-m);
  font-weight: 600;
  color: var(--white-secondary);
}
.link-dark {
  text-decoration: none;
  font-size: var(--fs-t-m);
  font-weight: 600;
  color: var(gray-main);
}
.link:hover {
  color: var(white-main);
}
.link-dark:hover {
  color: var(--gray-secondary);
}
.link:hover > .chevron {
  color: var(--white-main);
  transform: translateX(10px);
}
.link-dark:hover > .chevron  {
  color: var(--gray-secondary);
  transform: translateX(10px);
}
.text-l {
  font-size: var(--fs-t-xl);
  margin: 2.5rem 0;
  font-weight: 300;
  line-height: 1.28;
}
.dark {
  color: var(--gray-secondary);
}
.light {
  color: var(--white-main);
}
.link-container {
  margin-top: 2rem;
}
.info-padding {
  padding-block: 1%;
  width: 100%;
}
.info-padding-10 {
  padding-block: 2%;
  padding-inline: 2.5%;
  width: 100%;
}
.padding-i {
  padding-inline: 6%;
}
.padding-i-start {
  padding-left: 6%;
}
.padding-i-end {
  padding-right: 6%;
}
.vsm-link {
  color:#728b9d!important;
  font-weight: 600!important;
  font-size: var(--fs-t-s)!important;
}

@media (max-width: 1920px) {
  .vsm-link {
    color: var(--gray-main)!important;
  }
  .chevron {
    height: .5rem;
  }
}
</style>