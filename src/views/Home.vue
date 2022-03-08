<template>
  <div class="home">
    <div class="home-left left">
      <div class="container-flex">
        <p>hello</p>
      </div>
    </div>
    <div class="home-right right">
      <div class="container-flex">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  height: 86vh;
  position: relative;
}
.home-left {
  height: 50%;
  background-color: #2E6FF2;
}
.home-right {
  height: 100%;
  background-color: #2c2d32;
}
</style>
