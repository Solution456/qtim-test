<script setup lang="ts">
import UiButton from '@/components/Ui/UiButton.vue'
</script>

<template>
  <header class="header">
    <div class="header-container px-10">
      <div class="header-logo">
        <NuxtImg
          src="/logo.png"
          alt="logo"
        />
      </div>

      <div class="header-right">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink to="/">
                Work
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <button>Get in touch</button>
          <UiButton rounded>
            Let’s work
          </UiButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.header {
  height: $header-height;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: $background-primary;
  margin: auto;

  &-container {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  &-right {
    display: flex;
    align-items: center;
    gap: 90px;
    justify-content: space-between;
  }

  .nav {
    margin: 0;
    padding: 0;

    &-list {
      display: inline-flex;
      list-style: none;
      text-decoration: none;
      text-transform: none;
      gap: 58px;
      margin: 0;
      padding: 0;

      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>
