<template>
  <div class="header">
    <div class="header-left left">
      <div class="top">
        <div class="nav">
          <div class="logo">
            <router-link to="/"
              ><img src="../../assets/FlexWurxLogo.svg" alt="FlexWurx Logo"
            /></router-link>
          </div>
          <vsm-menu :menu="menu" class="links">
            <template #default="{ item }">
              <div style="width: 300px; padding: 30px">
                Dropdown content - {{ item.title }}
              </div>
            </template>
          </vsm-menu>
          <!-- <div class="links">
            <router-link to="#" class="link">Use Cases</router-link>
            <router-link to="#" class="link">Docs</router-link>
            <router-link to="#" class="link">Contact</router-link>
          </div> -->

        </div>
        <div class="landing">
          <div class="welcome">
            <h2 class="h2">
              Changing the Workplace. <br />
              Empowering the User.
            </h2>
            <h1 class="h1">FlexWurx</h1>
            <h3 class="h3">
              Powering the future of work <br />
              starting with customer support.
            </h3>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="container-flex">
          <div class="center info border-end">
            <p class="pre-head">More</p>
            <h2 class="head">Autonomy</h2>
          </div>
          <div class="center info border-end">
            <p class="pre-head">More</p>
            <h2 class="head">Control</h2>
          </div>
          <div class="center info">
            <p class="pre-head">More</p>
            <h2 class="head">Flexibility</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="header-right right">
      <div class="top-img">
        <div class="nav-btn">
          <button class="btn">Login</button>
        </div>
      </div>
      <div class="bottom-img"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Product', dropdown: 'product' },
        { title: 'Use Cases', dropdown: 'useCases' },
        { title: 'Docs', dropdown: 'docs' },
        { title: 'Contact', attributes: { href: '/contact' } }
      ]
    }
  }
}
</script>

<style scoped>
.pre-head {
  color: #728b9d;
  font-weight: 600;
  margin: 0;
}
.head {
  color: #F2F2F2;
  font-size: 2.5vw;
  margin: 0;
}

.vsm-menu {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.vsm-nav {
  margin: 0 10px;
}

.vsm-link-container {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .vsm-mob-show {
    display: block;
  }
  .vsm-mob-hide {
    display: none;
  }
  .vsm-mob-full {
    flex-grow: 1;
  }
}

/* @media (min-width: 1920px) {
  .h1 {
    font-size: 9.5rem;
  }
  .h2 {
    font-size: 2.85rem;
  }
  .h3 {
    font-size: 1.9rem;
  }
} */

.h1 {
  font-size: 6vw;
  font-weight: 600;
  margin: 3% 0;
}
.h2 {
  font-size: 1.8vw;
  font-weight: 300;
  margin: 0;
  color: #2e6ff2;
}
.h3 {
  font-size: 1.2vw;
  font-weight: 400;
  margin: 0;
  color: #728b9d;
}
img {
  width: 200px;
}
.info {
  padding-left: 5%;
  padding-right: 5%;
  width: calc(100vw / 3);
}
.border-end {
  border-right: 1px solid #f2f2f2;
}
.center {
  align-self: center;
}
.welcome {
  margin-bottom: 10%;
}
.header {
  display: flex;
  height: 86vh;
}
.header-left {
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}
.header-right {
  display: flex;
  flex-direction: column;
  background-image: url("../../assets/office.jpg");
  background-size: cover;
  background-position: center;
}
.nav {
  display: flex;
  height: 15%;
  margin-top: 2%;
  position: relative;
}
.nav-btn {
  height: 10%;
}
.landing {
  display: flex;
  justify-content: center;
  margin: 0% 6%;
  height: 85%;
  flex-direction: column;
  position: absolute;
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
  margin: 3% 10%;
  float: right;
  background-color: #2e6ff2;
  border: none;
  height: 40px;
  width: 18%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  color: #f2f2f2;
}
.btn:hover {
  border-color: #000;
  background-color: #0f59ef;
  backdrop-filter: blur(20px);
}
.logo {
  margin: 3% 6%;
}
.links {
  display: flex;
  flex-wrap: nowrap;
  margin: 3% 6%;
  text-align: center;
  align-self: flex-end;
  justify-content: flex-end;
  width: 100%;
}
.logo {
  align-self: flex-end;
}
.link:hover {
  color: #44454d;
}
</style>
