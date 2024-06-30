import { useApi } from '@/composables'
import type { Article } from '@/types'

export function articlesService() {
  return {
    async get() {
      const { data: articles } = await useApi<Article[]>('/posts')
      return articles
    },

    async getOne(id: number | string) {
      const { data: article } = await useApi<Article>(`/posts/${id}`)
      return article
    },
  }
}
