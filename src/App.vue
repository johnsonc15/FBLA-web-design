<template>
  <router-view />
  <the-footer></the-footer>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import TheFooter from "@/components/footer/TheFooter.vue";

UIkit.use(Icons);

export default {
  name: "App",
  components: {
    TheFooter,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --blue-main: #2e6ff2;
  --gray-main: #2c2d32;
  --gray-secondary: #0d0d0d;
  --white-main: #f2f2f2;
  --white-secondary: #d9d9d9;

  --link-color: #728b9d;
  --link-color-hover: #2c2d32;
  --link-color-small: #2c2d32;

  --gray-line: #d9d9d9;

  --vector-size-l: clamp(4.7rem, 8vw, 9.34rem);

  --fs-h-xl: clamp(3.5rem, 6vw, 7rem);
  --fs-h-l-xl: clamp(1.7rem, 3.5vw, 3.42rem);
  --fs-h-l: clamp(1.46rem, 2.72vw, 2.93rem);
  --fs-h-m: clamp(1.05rem, 1.95vw, 2.1rem);
  --fs-h-s: clamp(0.7rem, 1.43vw, 1.4rem);
  --fs-h-xs: clamp(0.63rem, 1.3vw, 1.27rem);

  --fs-t-xl: clamp(1.37rem, 2.54vw, 2.74rem);
  --fs-t-l: clamp(0.73rem, 1.36vw, 1.37rem);
  --fs-t-m-l: clamp(.59rem, 1.1vw, 1.1rem);
  --fs-t-m: clamp(0.57rem, 1.06vw, 1.15rem);
  --fs-t-s: clamp(0.45rem, 0.83vw, 1rem);

  --breakpoint-md: 1280px;
}
body {
  background-color: var(--white-main);
  padding: 0;
  margin: 0;
  position: relative;
  z-index: -1;
  min-height: 100vh;
}
html {
  font-family: "Montserrat", sans-serif !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif !important;
}
p {
  font-family: "Montserrat", sans-serif !important;
}
b {
  font-weight: 600 !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-secondary);
  height: 1000px;
}
.container-flex-column {
  display: flex;
  flex-direction: column;
}
.padding-h-2 {
  padding-block: 3rem;
}
.bottom {
  align-content: flex-end;
}
.left-1-3 {
  width: calc(100% * 2 / 3);
}
.right-2-3 {
  width: calc(100% * 1 / 3);
}
.left-2-3 {
  width: calc(100% * 1 / 3);
}
.right-1-3 {
  width: calc(100% * 2 / 3);
}
.h-100 {
  height: 100%;
}
.h-86 {
  height: 100%;
  max-height: 1857.6px;
}
.h-43 {
  height: 50%;
  max-height: 928.8px;
}
.h-20 {
  height: 30%;
  max-height: 557.28px;
}
.w-100 {
  width: 100%;
}
.w-50 {
  width: 50%;
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
  transition: all 0.1s ease-in;
}
.link {
  text-decoration: none;
  font-size: var(--fs-t-m);
  font-weight: 600;
  color: var(--white-secondary);
}
.link-dark {
  color: var(--gray-main);
}
.link-light:hover {
  color: var(--white-main);
  text-decoration: none;
}
.link-dark:hover {
  color: var(--gray-secondary);
  text-decoration: none;
}
.link-light:hover > .chevron {
  color: var(--white-main);
  transform: translateX(10px);
}
.link-dark:hover > .chevron {
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
  padding-inline: min(6rem, 12vw);
}
.padding-o {
  padding-inline: 6rem;
}
.padding-i-start {
  padding-left: 6%;
}
.padding-i-end {
  padding-right: 6%;
}
.padding-h {
  padding-block: 2rem;
}
.padding-h-2 {
  padding-block: 3rem;
}
.vsm-link {
  color: var(--link-color) !important;
  font-weight: 600 !important;
  font-size: var(--fs-t-m-l) !important;
}
.vsm-link:hover {
  cursor: pointer !important;
  color: var(--link-color-hover) !important;
  text-decoration: none !important;
}
.header-img {
  position: relative;
  top: 20%;
  height: 20rem;
  border-radius: 5px;
  z-index: -1;
  margin: auto;
}
.header-img-container {
  display: flex;
}
@media (max-width: 1280px) {
  .vsm-link {
    color: var(--link-color-small) !important;
  }
  .chevron {
    height: 0.5rem;
  }
}
</style>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
