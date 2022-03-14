<template>
  <div class="center-v">
    <h1>Work when you want, where you want!</h1>
  </div>
  <div class="center-v w-50">
    <div class="center">
      <button class="cta-btn">Join Now</button>
    </div>
  </div>
</template>

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
}
.cta-btn:hover {
  cursor: pointer;
  background-color: var(--white-main);
  color: var(--gray-secondary);
}
.center {
  text-align: center;
}
</style>