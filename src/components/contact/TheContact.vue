<template>
  <the-nav></the-nav>
  <div class="contact container-flex center-h padding-t-b">
    <div class="center-v width">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="padding-b">
          <label class="contact-label">Email:</label>
          <input type="email" class="contact-input-text" v-model="email" />
        </div>
        <div class="padding-b">
          <label class="contact-label">Subject:</label>
          <input type="text" class="contact-input-text" v-model="subject" />
        </div>
        <div class="padding-b">
          <label class="contact-label">Body:</label>
          <textarea
            type="text"
            class="contact-input-textarea"
            v-model="body"
          ></textarea>
        </div>
        <div>
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/nav/TheNav.vue";
import axios from "axios";

export default {
  name: "theContact",
  components: {
    TheNav,
  },
  data() {
    return {
      subject: "",
      email: "",
      body: "",
    };
  },
  methods: {
    submitForm() {
      axios({
        method: 'post',
        url: 'https://formspree.io/f/mbjwkaeg',
        data: {
          email: this.email,
          subject: this.subject,
          body: this.body
        },
        headers: {
            'Accept': 'application/json'
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    },
  },
};
</script>

<style scoped>
.padding-t-b {
  padding-block: 2rem;
}
.btn {
  border: none;
  background-color: var(--blue-main);
  border-radius: 5px;
  height: 2.5rem;
  width: 20%;
  color: var(--white-main);
  font-size: var(--fs-h-s)
}
.btn:hover {
  background-color: #0f59ef;
  cursor: pointer;
}
.contact-input-textarea {
  height: 10rem;
  border: 1px solid var(--gray-line);
  width: 100%;
  border-radius: 5px;
  font-size: var(--fs-h-xs);
  font-family: "Montserrat", sans-serif !important;
}
.contact-input-textarea {
  border-color: var(--blue-main);
  outline: none;
}
.padding-b {
  padding-bottom: 1rem;
}
.contact-label {
  font-size: var(--fs-h-s);
  display: block;
}
.contact-input-text {
  height: 1.75rem;
  border: 1px solid var(--gray-line);
  width: 50%;
  border-radius: 5px;
  font-size: var(--fs-h-xs);
}
.contact-input-text:focus {
  border-color: var(--blue-main);
  outline: none;
}
.contact {
  height: content-fit;
}
.width {
  width: 60%;
}
</style>
