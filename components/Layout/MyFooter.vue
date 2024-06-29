<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        Is there a project?
      </p>

      <div class="footer__body">
        <h1 class="title">
          Let's work together
        </h1>

        <div class="footer__contacts">
          <p class="footer__text">
            For all questions
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.footer {
  background-color: $color-secondary;

  padding-top: 140px;
  margin-top: 140px;

  &__text {
    font-size: 16px;
  }

  .title {
    font-size: 112px;
    font-weight: 400;
    line-height: 1;
    max-width: 464px;
  }

  &__body {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
