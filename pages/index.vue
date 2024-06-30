<script setup lang="ts">
import { articlesService } from '@/services'
import { usePagination } from '@/composables'

import ArticleList from '@/components/Articles/ArticleList.vue'
import UiPagination from '@/components/Ui/Pagination/UiPagination.vue'

definePageMeta({
  layout: 'default-layout',
})

const elementsPerPage = 8

const { data: articles } = await useAsyncData('articles', () => articlesService().get())
const { currentPage, paginationItems, totalElements, isLoading } = usePagination(articles.value, elementsPerPage)

useHead({
  title: 'Articles',
  meta: [
    {
      name: 'description',
      content: 'Articles',
    },
  ],
})
</script>

<template>
  <div>
    <h1 class="title">
      Articles
    </h1>

    <ArticleList
      v-if="paginationItems.length"
      :is-loading="isLoading"
      :articles="paginationItems"
    />

    <div
      v-else
      class="fill-height"
    >
      No articles
    </div>

    <UiPagination
      v-if="totalElements"
      v-model="currentPage"
      :elements="elementsPerPage"
      :total-elements="totalElements"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 400;
  font-size: 84px;
  margin-top: 120px;
  margin-bottom: 40px;
}
</style>
