<script setup lang="ts">
import type { Article } from '@/types'
import ArticleList from '@/components/Articles/ArticleList.vue'
import UiPagination from '@/components/Ui/Pagination/UiPagination.vue'

definePageMeta({
  layout: 'default-layout',
})

const articles: Article[] = [
  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },

  {
    id: 1,
    createdAt: '2021-04-23T05:11:54.250Z',
    title: 'Licensed Granite Chair',
    preview:
      'programming the port won\'t do anything, we need to copy the auxiliary USB system!',
    image: 'https://i.pinimg.com/564x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg',
    decription: 'fasfsaf',
  },
]
</script>

<template>
  <div>
    <h1 class="title">
      Articles
    </h1>

    <ArticleList :articles="articles" />

    <UiPagination
      :elements="8"
      :total-elements="articles.length"
      @change="console.log"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 50px;
  font-weight: 400;
  font-size: 84px;
  margin-top: 120px;
  margin-bottom: 40px;
}
</style>
