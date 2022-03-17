<template>
  <div class="gray h-footer">
    <div class="padding-i padding h-flex container">
      <div class="width-1-4">
        <div class="padding-f">
          <h4 class="footer-h4">Contact</h4>
          <div class="padding-footer">
            <p class="footer-info-title">CEO:</p>
            <p class="footer-info">
              <router-link
                class="footer-info-link"
                to="/contact?david@flexwurx.com"
                >david@flexwurx.com</router-link
              >
            </p>
          </div>
          <div class="padding-footer">
            <p class="footer-info-title">CPO:</p>
            <p class="footer-info">
              <router-link
                class="footer-info-link"
                to="/contact?shawn@flexwurx.com"
                >shawn@flexwurx.com</router-link
              >
            </p>
          </div>
          <div class="padding-footer">
            <p class="footer-info-title">HD:</p>
            <p class="footer-info">
              <router-link
                class="footer-info-link"
                to="/contact?clayton@flexwurx.com"
                >clayton@flexwurx.com</router-link
              >
            </p>
          </div>
          <div class="padding-footer">
            <p class="disclaimer">
              Sorry, but we do not have a public mailing address if that is what
              you are looking for!
            </p>
          </div>
        </div>
      </div>
      <div class="width-1-4 h-100">
        <div class="padding-f">
          <h4 class="footer-h4">Main</h4>
          <div class="padding-footer-nav">
            <router-link class="footer-info footer-info-link" to="/"
              >Home</router-link
            >
          </div>
          <h4 class="footer-h4">Contact</h4>
          <div class="padding-footer-nav">
            <router-link class="footer-info footer-info-link" to="/contact"
              >Contact</router-link
            >
          </div>
          <h4 class="footer-h4">Product</h4>
          <div class="padding-footer-nav">
            <router-link
              class="footer-info footer-info-link"
              to="/product/employee"
              >For Employees</router-link
            >
          </div>
          <div class="padding-footer-nav">
            <router-link
              class="footer-info footer-info-link"
              to="/product/organization"
              >For Organizations</router-link
            >
          </div>
        </div>
      </div>
      <div class="width-1-4 h-100">
        <div class="padding-f">
          <h4 class="footer-h4">Use Cases</h4>
          <div class="padding-footer-nav">
            <router-link
              class="footer-info footer-info-link"
              to="/use-case/customer-service"
              >Customer Service</router-link
            >
          </div>
          <div class="padding-footer-nav">
            <router-link
              class="footer-info footer-info-link"
              to="/use-case/government"
              >Government</router-link
            >
          </div>
          <div class="padding-footer-nav">
            <router-link
              class="footer-info footer-info-link"
              to="/use-case/real-estate"
              >Real Estate</router-link
            >
          </div>
          <h4 class="footer-h4">Actions</h4>
          <div class="padding-footer-nav">
            <router-link class="footer-info footer-info-link" to="/login"
              >Login</router-link
            >
          </div>
          <div class="padding-footer-nav">
            <router-link class="footer-info footer-info-link" to="/signup"
              >Signup</router-link
            >
          </div>
        </div>
      </div>
      <div class="width-1-4 h-100">
        <div class="padding-f">
          <h4 class="footer-h4">Email</h4>
          <div class="padding-footer">
            <p class="footer-info">Join our mailing list today!</p>
            <form @submit.prevent="submitForm">
              <input
                type="email"
                class="email-input w-85"
                id="email-input"
                v-model="email"
              />
              <button class="btn" type="submit">Join</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const client = require("@mailchimp/mailchimp_marketing");

export default {
  name: "TheFooter",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submitForm() {
      client.setConfig({
        apiKey: "a1af29b4f4c948590bfadb83c3660472-us6",
        server: "us6",
      });

      const run = async () => {
        const response = await client.lists.addListMember("40e82dd760", {
          email_address: this.email,
          status: "subscribed",
        });
        console.log(response);
      };

      run();
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: var(--blue-main);
  border: none;
  height: 1.8rem;
  color: var(--white-main);
  margin-left: 3px;
  width: 25%;
  border-radius: 5px;
}
.email-input {
  height: 1.75rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 5px;
  color: var(--gray-main);
  width: 60%;
}
.padding-f {
  padding-inline: 5%;
}
.disclaimer {
  color: var(--white-main);
}
.footer-info-link {
  color: inherit;
}
.footer-info-link:hover {
  color: var(--white-secondary);
}
.padding-footer {
  padding-block: 0.5rem;
}
.padding-footer-nav {
  padding-block: 0.25rem;
}
.footer-info-title {
  color: var(--white-main);
  display: inline;
  padding-right: 3px;
}
.footer-info {
  color: var(--white-main);
  display: inline;
}
.footer-h4 {
  color: var(--white-main);
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
}
.gray {
  background-color: var(--gray-main);
}
.padding {
  padding-block: 2rem;
}
.width-1-4 {
  width: calc(100% * 1 / 4);
}
.border-end {
  border-right: 1px solid var(--white-main);
}
.h-flex {
  height: calc(100% - 4rem);
}
.h-footer {
  height: fit-content;
}
.container {
  display: flex;
}
@media (max-width: 1280px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .width-1-4 {
    width: 100%;
  }
  .border-end {
    border-right: none;
    border-bottom: 1px solid var(--white-main);
  }
}
</style>
