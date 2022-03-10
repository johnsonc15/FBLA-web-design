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
        <welcome-text></welcome-text>
      </div>
      <div class="bottom">
        <attention-text></attention-text>
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
import WelcomeText from '@/components/nav/info/WelcomeText.vue';
import AttentionText from '@/components/nav/info/AttentionText.vue';

export default {
  name: 'Header',
  components: {
    WelcomeText,
    AttentionText
  },
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

img {
  width: 200px;
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
  background-image: url("https://ibb.co/2Nt2YcS");
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
</style>
