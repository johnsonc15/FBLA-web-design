<template>
  <div class="left-1-3 h-100 container-flex center-h des">
    <div class="center-v padding-i">
      <h1>Why Blockchain?</h1>
      <p class="informational">
        Empowering the <b>Employee</b> and the <b>Organization</b>.
      </p>
      <p class="informational">
        Through the use of blockchain, we will give employees <b>control</b> of
        their <b>data</b> while giving organizations <b>trust</b> in their
        <b>employees</b>. We believe that employees in any industry do not have
        the <b>power</b> they deserve over their jobs. With <b>Flexwurx</b>,
        that changes as employees now have <b>control</b> over their
        <b>schedule</b>, <b>pay</b>, and <b>data</b>. We also believe that
        <b>trust</b> is an issue in the <b>workforce</b>. With <b>FlexWurx</b>,
        organizations can <b>trust</b> the <b>credentials</b> of a potential
        employee as well as <b>lower onboarding costs</b>.
      </p>
      <div class="container-flex center-h p-top">
        <div class="w-50 center-v container-flex-column h-100">
          <p class="heading">How We Solve This</p>
          <div class="container-flex center-h center-h lists">
            <div class="w-50">
              <ul class="list">
                <li>Offer On-(web)site Training</li>
                <li>Issue Verifiale Credentials (VCs)</li>
              </ul>
            </div>
            <div class="w-50">
              <ul class="list">
                <li>Have State Partnerships for VCs</li>
                <li>Have Record of all Work on Employee Resumes</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-50 center-v">
          <p class="data-big">41%</p>
          <p class="data">
            of individuals had <b>lied</b> on their <b>resumes</b> about their
            <b>education</b> - Accredible Article (Apr 2021)
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="left-2-3 h-100 container-flex center-v center-h des">
    <img :src="photo" alt="man-working" />
  </div>
  <div class="mob">
    <div class="container-flex center-h h-100">
      <div class="center-v">
        <img :src="photo" alt="man-working" />
      </div>
    </div>
    <div class="h-100 center-h container-flex-column">
      <div class="center-v padding-i">
        <h1 class="mob-heading">Why Blockchain?</h1>
        <p class="informational">
          Empowering the <b>Employee</b> and the <b>Organization</b>.
        </p>
        <p class="informational">
          Through the use of blockchain, we will give employees
          <b>control</b> of their <b>data</b> while giving organizations
          <b>trust</b> in their <b>employees</b>. We believe that employees in
          any industry do not have the <b>power</b> they deserve over their
          jobs. With <b>Flexwurx</b>, that changes as employees now have
          <b>control</b> over their <b>schedule</b>, <b>pay</b>, and
          <b>data</b>. We also believe that <b>trust</b> is an issue in the
          <b>workforce</b>. With <b>FlexWurx</b>, organizations can
          <b>trust</b> the <b>credentials</b> of a potential employee as well as
          <b>lower onboarding costs</b>.
        </p>
        <div class="container-flex-column center-h p-top">
          <div class="center-v w-100">
            <p class="data-big">41%</p>
            <p class="data">
              of individuals had <b>lied</b> on their <b>resumes</b> about their
              <b>education</b> - Accredible Article (Apr 2021)
            </p>
          </div>
          <div class="center-v container-flex-column h-100 w-75">
            <p class="heading">How We Solve This</p>
            <div class="container-flex center-h center-h lists">
              <div class="w-50">
                <ul class="list">
                  <li>Offer On-(web)site Training</li>
                  <li>Issue Verifiale Credentials (VCs)</li>
                </ul>
              </div>
              <div class="w-50">
                <ul class="list">
                  <li>Have State Partnerships for VCs</li>
                  <li>Have Record of all Work on Employee Resumes</li>
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
import programming from "@/assets/programming.jpg";

export default {
  name: "whyBlockchain",
  data() {
    return {
      photo: programming,
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
    height: auto !important;
    width: 20vw !important;
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
  font-size: var(--fs-t-s);
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
