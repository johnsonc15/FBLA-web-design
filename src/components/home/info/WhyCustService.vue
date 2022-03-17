<template>
  <div class="left-2-3 h-100 container-flex center-v center-h des">
    <img :src="photo" alt="man-working" />
  </div>
  <div class="left-1-3 h-100 container-flex center-h des">
    <div class="center-v padding-i">
      <h1>Why Customer Service?</h1>
      <p class="informational">
        Customer Service is at an <b>Inflection Point</b>.
      </p>
      <p class="informational">
        Customer Service Organizations struggle with
        <b>employee engagement</b> and <b>morale</b>, leading to high employee
        <b>attrition rates</b> between <b>60% and 100%</b> annually.
        Furthermore, organizations struggle to hire employees due to
        <b>limited flexibility</b> in choosing <b>how</b> and <b>where</b> they
        work. Employees often feel they are <b>schedule takers</b> instead of
        <b>schedule makers</b>.
      </p>
      <div class="container-flex center-h p-top">
        <div class="w-50 center-v">
          <p class="data-big">71%</p>
          <p class="data">
            of customer service employees have considered <b>quitting</b> -
            Salesforce Research Study (Feb 2022)
          </p>
        </div>
        <div class="w-50 center-v container-flex-column h-100">
          <p class="heading">What We Do</p>
          <div class="container-flex center-h center-h lists">
            <div class="w-50">
              <ul class="list">
                <li>Increase Engagement</li>
                <li>Increase Productivity</li>
                <li>Increase Retention</li>
              </ul>
            </div>
            <div class="w-50">
              <ul class="list">
                <li>Decrease Manual Work</li>
                <li>Decrease Operational Costs</li>
                <li>Decrease Hiring Time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mob">
    <div class="container-flex center-h h-100">
      <div class="center-v">
        <img :src="photo" alt="man-working" />
      </div>
    </div>
    <div class="h-100 center-h container-flex-column">
      <div class="center-v padding-i">
        <h1 class="mob-heading">Why Customer Service?</h1>
        <p class="informational">
          Customer Service is at an <b>Inflection Point</b>.
        </p>
        <p class="informational">
          Customer Service Organizations struggle with
          <b>employee engagement</b> and <b>morale</b>, leading to high employee
          <b>attrition rates</b> between <b>60% and 100%</b> annually.
          Furthermore, organizations struggle to hire employees due to
          <b>limited flexibility</b> in choosing <b>how</b> and
          <b>where</b> they work. Employees often feel they are
          <b>schedule takers</b> instead of <b>schedule makers</b>.
        </p>
        <div class="container-flex-column center-h p-top">
          <div class="center-v w-100">
            <p class="data-big">71%</p>
            <p class="data">
              of customer service employees have considered <b>quitting</b> -
              Salesforce Research Study (Feb 2022)
            </p>
          </div>
          <div class="center-v container-flex-column h-100 w-75">
            <p class="heading">What We Do</p>
            <div class="container-flex center-h center-h lists">
              <div class="w-50">
                <ul class="list">
                  <li>Increase Engagement</li>
                  <li>Increase Productivity</li>
                  <li>Increase Retention</li>
                </ul>
              </div>
              <div class="w-50">
                <ul class="list">
                  <li>Decrease Manual Work</li>
                  <li>Decrease Operational Costs</li>
                  <li>Decrease Hiring Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photo from "@/assets/manWorking.jpg";

export default {
  name: "WhyCustService",
  data() {
    return {
      photo: photo,
    };
  },
};
</script>

<style scoped>
@media (max-width: 1280px) {
  .des {
    display: none;
  }
  .mob {
    display: flex !important;
    flex-direction: column;
  }
  .informational {
    text-align: center;
  }
  .heading {
    padding-top: 3%;
    text-align: center;
  }
  .data-big {
    margin-bottom: 0;
  }
  .data {
    margin-top: 1%;
  }
  img {
    height: auto!important;
    width: 20vw!important;
  }
}
.mob {
  display: none;
}
.mob-heading {
  padding-top: 5%;
}
.w-75 {
  width: 75%;
}
img {
  width: 27rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
h1 {
  font-size: clamp(2.04rem, 3.2vw, 4.07rem);
  text-align: center;
  padding-bottom: 3%;
}
.informational {
  font-size: var(--fs-h-xs);
}
.data-big {
  font-size: var(--fs-h-xl);
  color: var(--blue-main);
  text-align: center;
}
.data {
  font-size: var(--fs-t-m);
  color: var(--gray-secondary);
  text-align: center;
  padding-inline: 10%;
}
.p-top {
  padding-top: 3%;
}
.lsit {
  color: var(--blue-main);
}
.heading {
  font-size: var(--fs-h-s);
  color: var(--gray-main);
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
}
.list {
  font-size: var(--fs-t-m);
  color: var(--blue-main);
  list-style-type: none;
  padding: 0;
}
li {
  margin-block: 5%;
  text-align: center;
}
.container-flex-column {
  display: flex;
  flex-direction: column;
}
.lists {
  padding-block: 3%;
}
</style>
