import type { UseFetchOptions } from '#app'

export function useApi<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> },
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
