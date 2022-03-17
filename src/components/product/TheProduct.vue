<template>
  <div>
    <the-nav></the-nav>
  </div>
  <router-view></router-view>
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