<template>
  <div class="container-flex h-100 des">
    <div class="center-v padding-i border-end split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Autonomy</h2>
    </div>
    <div class="center-v padding-i border-end split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Control</h2>
    </div>
    <div class="center-v padding-i split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Flexibility</h2>
    </div>
  </div>
  <div class="container-flex center-h h-100 mob">
    <div class="center-v container-flex-column center-h padding-i split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Autonomy</h2>
    </div>
    <div class="center-v container-flex-column center-h padding-i split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Control</h2>
    </div>
    <div class="center-v container-flex-column center-h padding-i split-3">
      <p class="pre-head">More</p>
      <h2 class="head">Flexibility</h2>
    </div>
  </div>
</template>

<style scoped>
.pre-head {
  color: #728b9d;
  font-weight: 600;
  margin: 0;
  font-size: var(--fs-h-xs)
}
.head {
  color: #F2F2F2;
  font-size: var(--fs-h-l);
  margin: 0;
}
.split-3 {
  width: calc(100% / 3);
}
.border-end {
  border-right: 1px solid #f2f2f2;
}
.mob {
  display: none;
}
.container-flex-column {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1920px) {
  .des {
    display: none;
  }
  .mob {
    display: flex;
    flex-direction: column;
  }
  .split-3 {
    height: calc(100% / 3);
  }

}
</style>
