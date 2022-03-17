<template>
  <div class="container-flex-column padding-h-t w-100">
    <div class="header container-flex padding-i padding-h-2 h-40">
      <div class="center-v w-40">
        <div class="w-70">
          <h1 class="header-h1">FlexWurx for Organizations</h1>
          <p>
            Save <b>money</b>, <b>time</b>, and <b>effort</b> when using
            FlexWurx to hire and onboard your employees!
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
              <img :src="moneySaved" alt="graph" class="graph-img" />
            </div>
            <div class="w-50 container-flex">
              <div class="container-flex-column w-100 center-v padding-i">
                <h2 class="info-h2 w-100">Save Money!</h2>
                <p class="info-m">
                  With <b>FlexWurx for Organizations</b>, you will have the
                  opportunity to save <b>thousands of dollars</b> when
                  <b>hiring</b>, <b>onboarding</b>, and <b>training</b> each new
                  <b>employee</b>. Through this membership, your organization
                  will be able hire <b>part time</b> or
                  <b>full time</b> employees and <b>train</b> them through
                  either a <b>custom training program</b> created by you or a
                  <b>training program</b> based off of one of our many
                  <b>templates</b>.
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
                <h2 class="info-h2 w-100">Save Time!</h2>
                <p class="info-m">
                  With <b>FlexWurx for Organizations</b>, you will be able to
                  save time <b>hiring</b>, <b>onboarding</b>, and
                  <b>training</b> new employees. With the use of our
                  <b>FlexOps AI</b>, we are able to find the <b>best</b> person
                  or people for your needs as <b>quickly</b> as possible. And,
                  with our <b>built in</b> training program, you will be able to
                  <b>train</b> each new employee at a speed that is
                  <b>hard to compete</b> with.
                </p>
              </div>
            </div>
            <div class="w-50 container-flex center-h h-30">
              <div class="center-v container-flex">
                <div class="w-50">
                  <p class="info-l grayed">4</p>
                  <p class="info-sub grayed">Months</p>
                  <p class="info-s">
                    is the average time to hire, onboard, and train a customer
                    service employee.
                  </p>
                </div>
                <div class="w-50">
                  <p class="info-l blue">3</p>
                  <p class="info-sub blue">Weeks</p>
                  <p class="info-s">
                    is the average time to <b>hire</b>, <b>onboard</b>, and
                    <b>train</b> a customer service agent with <b>FlexWurx</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-flex-column h-30 cta center-h">
      <the-cta title="Reduce Costs and Time" button="Join Now"></the-cta>
    </div>
  </div>
</template>

<script>
import organizationApp from "@/assets/organizationApp.jpeg";
import moneySaved from "@/assets/moneySaved-blue.svg";
import TheCta from "@/components/home/info/CTA.vue";

export default {
  name: "forOrganizations",
  components: {
    TheCta
  },
  data() {
    return {
      forOrganizations: organizationApp,
      moneySaved: moneySaved,
    };
  },
};
</script>

<style scoped>
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
