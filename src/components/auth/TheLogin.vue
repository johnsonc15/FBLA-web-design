<template>
  <the-nav></the-nav>
  <div class="container-flex login center-h">
    <div class="center-v width">
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <div class="padding-b">
          <label class="contact-label">Username:</label>
          <input type="text" class="contact-input-text" />
        </div>
        <div class="padding-b">
          <label class="contact-label">Password:</label>
          <input type="password" class="contact-input-text" />
        </div>
        <div class="padding-c">
          <p>If you have not created an account, <router-link to="/signup">click here</router-link> to create an account.</p>
        </div>
        <div>
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/nav/TheNav.vue"

export default {
  name: "theProduct",
  components: {
    TheNav
  }
}
</script>

<style scoped>
.login {
  height: 600px;
}
.width {
  width: 20%;
}
.btn {
  border: none;
  background-color: var(--blue-main);
  border-radius: 5px;
  height: 2.5rem;
  width: 50%;
  color: var(--white-main);
  font-size: var(--fs-h-s)
}
.btn:hover {
  background-color: #0f59ef;
  cursor: pointer;
}
.padding-b {
  padding-bottom: 1rem;
}
.padding-c {
  padding-bottom: 0rem;
}
.contact-label {
  font-size: var(--fs-h-xs);
  display: block;
}
.contact-input-text {
  height: 1.75rem;
  border: 1px solid var(--gray-line);
  width: 100%;
  border-radius: 5px;
  font-size: var(--fs-h-xs);
}
.contact-input-text:focus {
  border: 1px solid var(--blue-main);
  outline: none;
}
</style>