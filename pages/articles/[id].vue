<script setup lang="ts">
import { articlesService } from '@/services/articles'

definePageMeta({
  layout: 'default-layout',
})

const route = useRoute()

const { data: article } = await useAsyncData('article', () => articlesService().getOne(route.params.id as string))

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useHead({
  title: article.value.value.title,
  meta: [
    {
      name: 'description',
      content: article.value.value.description,
    },
  ],
})
</script>

<template>
  <article
    v-if="article"
    class="article"
  >
    <h1 class="title-1">
      {{ article.value.title }}
    </h1>

    <div class="article-image">
      <NuxtImg
        :src="article.value.image"
        alt=""
      />
    </div>

    <div class="article-body">
      <h5 class="subtitle body-sm">
        About
      </h5>

      <p class="article-text body-lg">
        {{ article.value.description }}
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  gap: 80px;

  &-image {
    img {
      width: 100%;
      height: 700px;
      object-fit: cover;
    }
  }

  &-body {
    width: 700px;
  }
}
</style>
