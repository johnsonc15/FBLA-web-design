<template>
  <div class="nav">
    <div class="left-1-3 padding-i container-flex">
      <div class="logo">
        <router-link to="/"
          ><img :src="photo" alt="FlexWurx Logo"
        /></router-link>
      </div>
      <nav-links></nav-links>
    </div>
    <div class="right-2-3 container-flex p-end">
      <div class="padding-i center-v">
        <button class="btn">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import photo from "@/assets/FlexWurxLogo.svg";
import NavLinks from "@/components/nav/links/NavLinks.vue"

export default {
  name: "Header",
  components: {
    NavLinks
  },
  data() {
    return {
      photo: photo,
    };
  },
};
</script>

<style scoped>
img {
  width: clamp(6.68rem, 12vw, 17.18rem);
}
.nav {
  display: flex;
  height: 4.5rem;
  position: relative;
  background-color: var(--white-main);
  border-bottom: 1.3px solid var(--gray-line);
}
.btn {
  float: right;
  background-color: #2e6ff2;
  border: none;
  height: 2.3rem;
  width: clamp(6rem, 18%, 12rem);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #f2f2f2;
  padding: 0;
  border-radius: 5px;
}
.btn:hover {
  border-color: #000;
  background-color: #0f59ef;
  backdrop-filter: blur(20px);
}
.logo {
  align-self: center;
}
.p-end {
  justify-content: flex-end;
}
</style>
