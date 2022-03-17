<template>
  <div class="container-flex-column padding-h-t w-100">
    <div class="header container-flex padding-i padding-h-2 h-40">
      <div class="center-v w-40">
        <div class="w-70">
          <h1 class="header-h1">FlexWurx for Employees</h1>
          <p>
            Control your <b>schedule</b>, <b>pay</b>, and <b>data</b> when using
            FlexWurx to work!
          </p>
          <button class="btn">Join Now!</button>
        </div>
      </div>
      <div class="header-img-container w-50 center-v center-h">
        <img class="header-img" :src="forOrganizations" alt="app-photo" />
      </div>
    </div>
    <hr />
    <div class="costs container-flex h-100">
      <div class="padding-i padding-h-2 w-100">
        <div class="container-flex-column">
          <div class="container-flex">
            <div class="w-50 container-flex center-h h-30">
              <img :src="schedule" alt="schedule" class="graph-img" />
            </div>
            <div class="w-50 container-flex">
              <div class="container-flex-column w-100 center-v padding-i">
                <h2 class="info-h2 w-100">Control Your Schedule!</h2>
                <p class="info-m">
                  With <b>FlexWurx for Employees</b>, you will be able to
                  <b>control</b> your <b>schedule</b>. No more going to work
                  when you're <b>told to</b>. Now, you have a say in
                  <b>when</b> you want to <b>work</b>. Unlike with other
                  gig-economy apps, though, you will still have the ability to
                  receive the <b>same benefits</b> as any other employee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="time container-flex h-100">
      <div class="padding-i padding-h-2 w-100">
        <div class="container-flex-column">
          <div class="container-flex">
            <div class="w-50 container-flex">
              <div class="container-flex-column w-100 center-v padding-i">
                <h2 class="info-h2 w-100">Control Your Pay!</h2>
                <p class="info-m">
                  With <b>FlexWurx for Employees</b>, you will have
                  <b>control</b> of your pay, too. Through <b>FlexOps AI</b>, we
                  take record of everything you do to suggest your price, but
                  you can <b>set</b> your <b>price per task</b> to whatever you
                  would want to set it as.
                </p>
              </div>
            </div>
            <div class="w-50 container-flex center-h h-30">
              <div class="center-v container-flex">
                <i class="bi bi-cash-stack icon-big"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="costs container-flex h-100">
      <div class="padding-i padding-h-2 w-100">
        <div class="container-flex-column">
          <div class="container-flex">
            <div class="w-50 container-flex center-h h-30">
              <div class="center-v container-flex">
                <i class="bi bi-wallet2 icon-big"></i>
              </div>
            </div>
            <div class="w-50 container-flex">
              <div class="container-flex-column w-100 center-v padding-i">
                <h2 class="info-h2 w-100">Control Your Data!</h2>
                <p class="info-m">
                  With <b>FlexWurx SSI</b>, you will have
                  <b>full control</b> over your <b>data</b>. Every training
                  credential as well as your login credential for <b>FlexWurx</b> you
                  have will be put onto your <b>FlexWallet</b>, which is a
                  <b>decentralized wallet</b> built on <b>blockchain</b>. Now <b>nobody</b> will have
                  your data other than the people you choose to <b>share</b> it with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-flex-column h-30 cta center-h">
      <the-cta title="Control Your Life" button="Join Now"></the-cta>
    </div>
  </div>
</template>

<script>
import organizationApp from "@/assets/agentApp.jpg";
import moneySaved from "@/assets/moneySaved-blue.svg";
import TheCta from "@/components/home/info/CTA.vue";
import schedule from "@/assets/schedule.png";

export default {
  name: "forOrganizations",
  components: {
    TheCta,
  },
  data() {
    return {
      forOrganizations: organizationApp,
      moneySaved: moneySaved,
      schedule: schedule
    };
  },
};
</script>

<style scoped>
.icon-big {
  font-size: var(--vector-size-l);
  color: var(--blue-main);
}
.costs {
  background-color: var(--white-main);
}
.cta {
  background-color: var(--blue-main);
}
.graph-img {
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.time {
  background-color: var(--white-main);
}
.info-l {
  font-size: var(--fs-h-xl);
  text-align: center;
  margin: 0;
  line-height: var(--fs-h-xl);
}
.info-s {
  font-size: var(--fs-t-m);
  color: var(--gray-secondary);
  text-align: center;
  padding-inline: 10%;
}
.info-sub {
  font-size: var(--fs-h-s);
  text-align: center;
  margin-top: 0;
  font-weight: 600;
}
.grayed {
  color: var(--link-color);
}
.blue {
  color: var(--blue-main);
}
.header-h1 {
  font-size: var(--fs-h-l-xl);
  font-weight: 600;
  color: var(--blue-main);
}
.w-40 {
  width: 40%;
}
.w-70 {
  width: 70%;
}
.h-40 {
  height: 40%;
}
.h-30 {
  height: 20rem;
}
.padding-l {
  padding-right: 12%;
}
.padding-h-t {
  padding-top: 2rem;
}
hr {
  position: relative;
  color: var(--gray-line);
  margin: 0;
}
.container-flex-column {
  display: flex;
  flex-direction: column;
}
.info-h2 {
  color: var(--blue-main);
  margin-bottom: 0;
  text-align: center;
}
.info-m {
  text-align: center;
}
.btn {
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
</style>
