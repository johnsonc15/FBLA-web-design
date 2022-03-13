<template>
  <div class="container-flex h-86 des">
    <div class="left-1-3 h-100">
      <div class="container-flex h-50 blue">
        <worker-text></worker-text>
      </div>
      <div class="container-flex h-50">
        <company-text></company-text>
      </div>
    </div>
    <div class="right-2-3 h-100">
      <div class="container-flex h-100 gray">
        <identity-text></identity-text>
      </div>
    </div>
  </div>
  <div class="container-flex h-86 mob">
    <div class="container-flex h-100 blue">
      <worker-text></worker-text>
    </div>
    <div class="container-flex h-100">
      <company-text></company-text>
    </div>
    <div class="h-100">
      <div class="container-flex h-100 gray">
        <identity-text></identity-text>
      </div>
    </div>
  </div>
</template>

<script>
import WorkerText from "@/components/home/info/WorkerText.vue";
import CompanyText from "@/components/home/info/CompanyText.vue";
import IdentityText from "@/components/home/info/IdentityText.vue";

export default {
  name: "Home",
  components: {
    WorkerText,
    CompanyText,
    IdentityText,
  },
};
</script>

<style scoped>
.blue {
  background-color: var(--blue-main);
}
.gray {
  background-color: var(--gray-main);
}
.h-50 {
  height: 50%;
}
.mob {
  display: none;
}
@media (max-width: 1920px) {
  .des {
    display: none;
  }
  .mob {
    display: flex;
    flex-direction: column;
  }
}
</style>
