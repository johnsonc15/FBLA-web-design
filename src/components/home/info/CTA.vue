<template>
  <div class="center-v">
    <h1>{{ title }}</h1>
  </div>
  <div class="center-v w-50">
    <div class="center">
      <router-link to="/signup"><button class="cta-btn">{{ button }}</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCTA",
  props: ["title", "button"]
}
</script>

<style scoped>
h1 {
  font-size: var(--fs-h-l);
  color: var(--white-main);
  font-weight: 500;
}
.cta-btn {
  height: 3rem;
  width: 20rem;
  background-color: transparent;
  border: 1px solid var(--white-main);
  color: var(--white-main);
  font-size: var(--fs-h-s);
  font-weight: 300;
  margin-top: 2rem;
  transition: all .25s ease-in;
  border-radius: 5px;
}
.cta-btn:hover {
  cursor: pointer;
  background-color: var(--white-main);
  color: var(--gray-secondary);
}
.center {
  text-align: center;
}
@media (max-width: 1280px) {
  h1 {
    text-align: center;
  }
  .cta-btn {
    width: 10rem;
  }
}
</style>