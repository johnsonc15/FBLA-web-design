<template>
  <div class="home">
    <div class="home-left left">
      <div class="top">
        <worker-text></worker-text>
      </div>
      <div class="bottom">
        <company-text></company-text>
      </div>
    </div>
    <div class="home-right right">
      <div class="container-flex">
        <identity-text></identity-text>
      </div>
    </div>
  </div>
  <div class="home">
    <div class="margin center-h">
      <p class="lg-text bold">Why Customer Service?</p>
      <div class="container-flex m-top">
        <div class="left-1-3 center-h">
          <div class="sq-img center-v">
            <img src="https://ibb.co/jWmB5cF" alt="man-working" class="center-v">
          </div>
        </div>
        <div class="right-2-3 center-h">
          <p>Hi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkerText from '@/components/home/info/WorkerText.vue';
import IdentityText from '@/components/home/info/IdentityText.vue';
import CompanyText from '@/components/home/info/CompanyText.vue';

export default {
  name: 'Home',
  components: {
    WorkerText,
    IdentityText,
    CompanyText
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.sq-img {
  width: 400px;
  height: 400px;
}
.sq-img img {
  object-fit: cover;
}
.left-1-3 {
  width: calc(100% * 1 / 3);
  display: flex;
}
.right-2-3 {
  width: calc(100% * 2 / 3);
  display: flex;
}
.m-top {
  margin-top: 3%;
}
.bold {
  font-weight: 600;
}
.home {
  display: flex;
  height: 86vh;
  position: relative;
}
.home-left {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-right {
  height: 100%;
  background-color: #2c2d32;
}
.top {
  height: 50%;
  background-color: #2E6FF2;
}
.bottom {
  height: 50%;
}
.center {
  align-items: center;
  justify-content: center;
}
.margin {
  display: flex;
  margin: 5% 5%;
  width: 100%;
  flex-direction: column;
}
.lg-text {
  font-size: 2.5vw;
  margin: auto;
}
</style>
