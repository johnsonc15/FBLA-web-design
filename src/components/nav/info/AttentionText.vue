<template>
  <div class="container-flex padding-i h-100 des">
    <div class="center-v border-end split-3 container-flex center-h">
      <div>
        <p class="pre-head">More</p>
        <h2 class="head">Autonomy</h2>
      </div>
    </div>
    <div class="center-v border-end split-3 container-flex center-h">
      <div>
        <p class="pre-head">More</p>
        <h2 class="head">Control</h2>
      </div>
    </div>
    <div class="center-v split-3 container-flex center-h">
      <div>
        <p class="pre-head">More</p>
        <h2 class="head">Flexibility</h2>
      </div>
    </div>
  </div>
  <div class="container-flex center-h h-100 mob">
    <div uk-slideshow="autoplay: true; autoplay-interval: 7000" class="h-100 uk-light">
      <ul
        class="uk-slideshow-items slideshow h-100"
        style="min-height: 100% !important"
      >
        <li>
          <div
            class="center-v container-flex-column center-h padding-o h-100 w-content center"
          >
            <div class="center-h"></div>
            <p class="pre-head">More</p>
            <h2 class="head">Autonomy</h2>
          </div>
        </li>
        <li>
          <div
            class="center-v container-flex-column center-h padding-o h-100 w-content center"
          >
            <p class="pre-head">More</p>
            <h2 class="head">Control</h2>
          </div>
        </li>
        <li>
          <div
            class="center-v container-flex-column center-h padding-o h-100 w-content center"
          >
            <p class="pre-head">More</p>
            <h2 class="head">Flexibility</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.w-content {
  width: fit-content;
}
.slideshow {
  min-height: auto !important;
}
.padding {
  padding-inline: 12rem;
}
.padding-r {
  padding-right: 12rem;
}
.center {
  margin: auto;
}
.pre-head {
  color: #728b9d;
  font-weight: 600;
  margin: 0;
  font-size: clamp(1rem, 1vw, 1.27rem);
}
.head {
  color: #f2f2f2;
  font-size: clamp(2.32rem, 2.3vw, 2.93rem);
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
@media (max-width: 960px) {
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
