<script setup lang="ts">
import MyFooterContactItem from './MyFooterContactItem.vue'
import { CONTACTS, LINKS } from '@/constants'
import UiIconButton from '@/components/Ui/UiIconButton.vue'
import TelegramIcon from '@/components/Icons/TelegramIcon.vue'

const firstLinkItems = LINKS.slice(0, 3)
const secondLinkItems = LINKS.slice(3, 6)
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
          <MyFooterContactItem
            v-for="contact in CONTACTS"
            :key="contact.title"
            v-bind="contact"
          >
            <template
              v-if="contact.link"
              #links
            >
              <UiIconButton
                is="a"
                width="32"
                href="contact.link"
              >
                <TelegramIcon />
              </UiIconButton>
            </template>
          </MyFooterContactItem>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__bottom_links">
          <ul>
            <li
              v-for="link in firstLinkItems"
              :key="link.title"
            >
              <NuxtLink
                class="link"
                :to="link.link"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer__bottom_center">
          <span>go</span>
        </div>

        <div class="footer__bottom_links">
          <ul>
            <li
              v-for="link in secondLinkItems"
              :key="link.title"
            >
              <NuxtLink
                class="link"
                :to="link.link"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
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
  overflow: hidden;

  &__text {
    font-size: 16px;
  }

  .title {
    font-size: 112px;
    font-weight: 400;
    line-height: 1;

    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
    max-width: 464px;
  }

  &__body {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 152px;
  }

  &__bottom {
    margin-top: 143px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    &_links {
      ul {
        display: flex;
        gap: 32px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        border-bottom: 1px solid rgba(16, 16, 16, 0.4);
      }

      .link {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: $text-primary;
        text-transform: capitalize;
        transition: all 0.3s ease;
      }
    }

    &_center {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: 400;
      line-height: 1.5;
      color: $text-white;

      span {
        position: relative;
        display: inline-block;
        z-index: 2;
        text-transform: capitalize;

        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -60%;
          left: 50%;
          transform: translate(-50%, -20%);
          border-radius: 50%;
          width: 358px;
          height: 358px;
          background-color: $color-black;
        }
      }
    }
  }
}
</style>
