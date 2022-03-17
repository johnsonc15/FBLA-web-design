<template>
  <div class="container-flex h-86 header-des">
    <div class="header-left left-1-3">
      <div class="top">
        <div class="padding-i h-87">
          <div class="nav">
            <div class="logo">
              <router-link to="/"
                ><img :src="photo" alt="FlexWurx Logo"
              /></router-link>
            </div>
            <nav-links></nav-links>
            <!-- <div class="links">
            <router-link to="#" class="link">Use Cases</router-link>
            <router-link to="#" class="link">Docs</router-link>
            <router-link to="#" class="link">Contact</router-link>
            </div> -->
          </div>
          <welcome-text></welcome-text>
        </div>
      </div>
      <div class="bottom">
        <attention-text></attention-text>
      </div>
    </div>
    <div class="header-right right-2-3">
      <div class="top-img">
        <div class="nav-btn padding-i">
          <button class="btn">Login</button>
        </div>
      </div>
      <div class="bottom-img"></div>
    </div>
  </div>
  <div class="container-flex h-86 header-mob">
    <div class="header-left h-100 w-100">
      <div class="top">
        <div class="padding-i">
          <div class="nav">
            <div class="nav-mobile padding-c">
              <div class="w-50 padding-i container-flex">
                <router-link to="/"
                  ><img :src="photo" alt="FlexWurx Logo"
                /></router-link>
              </div>
              <div class="w-50 padding-i container-flex flex-end">
                <nav-links></nav-links>
              </div>
            </div>
          </div>
          <div class="container-flex center-h">
            <welcome-text></welcome-text>
          </div>
        </div>
      </div>
      <div class="bottom">
        <attention-text></attention-text>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/nav/info/WelcomeText.vue";
import AttentionText from "@/components/nav/info/AttentionText.vue";
import NavLinks from "@/components/nav/links/NavLinks.vue";
import photo from "@/assets/FlexWurxLogo.svg";

export default {
  name: "Header",
  components: {
    WelcomeText,
    AttentionText,
    NavLinks,
  },
  data() {
    return {
      photo: photo,
    };
  },
};
</script>

<style scoped>
.h-87 {
  height: 86%;
}
.header-mob {
  display: none;
}
@media (max-width: 1280px) {
  .header-des {
    display: none;
  }
  .header-mob {
    display: block;
  }
  .top {
    background-image: url("https://i.ibb.co/pyzDr4Q/office.jpg");
    background-size: cover;
    background-position: center;
    position: static;
    height: 85% !important;
  }
  .bottom {
    height: 15% !important;
  }
  .top:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(124, 124, 124, 0.8),
      rgb(255, 255, 255, 0.5) 60%,
      rgba(124, 124, 124, 0.8) 100%
    );
  }
}

img {
  width: clamp(6.68rem, 14vw, 17.18rem);
}
.header {
  display: flex;
  height: 86vh;
  max-height: 1238.4px;
}
.header-left {
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}
.header-right {
  display: flex;
  flex-direction: column;
  background-image: url("../../assets/officeWorking.jpg");
  background-size: cover;
  background-position: center;
}
.nav {
  display: flex;
  height: 15%;
  position: relative;
}
.nav-btn {
  height: 10%;
  margin-top: 2rem;
}
.top {
  display: block;
  width: 100%;
  height: 81%;
  position: relative;
}
.bottom {
  display: block;
  background-color: #2c2d32;
  height: 19%;
}
.top-img {
  display: block;
  width: 100%;
  height: 81%;
}
.bottom-img {
  height: 19%;
  display: block;
  backdrop-filter: blur(11px);
}
.btn {
  float: right;
  background-color: #2e6ff2;
  border: none;
  height: 2.5rem;
  width: clamp(5rem, 18%, 12rem);
  cursor: pointer;
  font-size: 1.1rem;
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
</style>
