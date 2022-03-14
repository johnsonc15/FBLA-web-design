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
  <div class="container-flex padding">
    <why-cust-service></why-cust-service>
  </div>
  <div class="container-flex padding">
    <why-blockchain></why-blockchain>
  </div>
  <div class="container-flex-column h-43 blue center-h">
    <the-cta></the-cta>
  </div>
</template>

<script>
import WorkerText from "@/components/home/info/WorkerText.vue";
import CompanyText from "@/components/home/info/CompanyText.vue";
import IdentityText from "@/components/home/info/IdentityText.vue";
import WhyCustService from "@/components/home/info/WhyCustService.vue";
import WhyBlockchain from "@/components/home/info/WhyBlockchain.vue";
import TheCta from "@/components/home/info/CTA.vue";

export default {
  name: "Home",
  components: {
    WorkerText,
    CompanyText,
    IdentityText,
    WhyCustService,
    WhyBlockchain,
    TheCta
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
.padding {
  padding-block: 8rem;
}
.container-flex-column {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1280px) {
  .des {
    display: none;
  }
  .mob {
    display: flex;
    flex-direction: column;
  }
  .padding {
    padding-block: 4rem;
  }
}
</style>
