<template>
  <div class="h-20 gray h-100">
    <div class="padding-i padding h-flex container-flex">
      <div class="width-1-4 border-end h-100">
        <p>hello</p>
      </div>
      <div class="width-1-4 border-end h-100">
        <p>hello</p>
      </div>
      <div class="width-1-4 border-end h-100">
        <p>hello</p>
      </div>
      <div class="width-1-4 h-100">
        <p>hello</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>