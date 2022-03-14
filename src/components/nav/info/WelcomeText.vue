<template>
  <div class="landing">
    <div class="welcome">
      <h2 class="h2">
        Changing the Workplace. <br />
        Empowering the User.
      </h2>
      <h1 class="h1">FlexWurx</h1>
      <h3 class="h3">
        Powering the future of work <br />
        starting with customer support.
      </h3>
    </div>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  justify-content: center;
  height: 85%;
  flex-direction: column;
  position: absolute;
}
@media (max-width: 1280px) {
  .welcome {
    justify-content: center;
  }
}
.welcome {
  margin-bottom: 10%;
}
.h1 {
  font-size: var(--fs-h-xl);
  font-weight: 600;
  margin: 3% 0;
}
.h2 {
  font-size: var(--fs-h-m);
  font-weight: 300;
  margin: 0;
  color: #2e6ff2;
}
.h3 {
  font-size: var(--fs-h-s);
  font-weight: 400;
  margin: 0;
  color: #728b9d;
}

@media (max-width: 1280px) {
  .h3 {
    color: var(--gray-main);
  }
}
</style>