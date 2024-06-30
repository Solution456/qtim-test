export function usePagination<T extends Record<string, any> = Record<string, any>>(items: Ref<T[]> | null, perPage: number) {
  const currentPage = ref(1)
  const isLoading = ref(false)

  const paginationItems = computed(() => {
    if (!items)
      return []

    const record = isRef(items) ? items.value : items

    return record.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
  })

  const totalElements = computed(() => {
    if (!items)
      return 0

    const record = isRef(items) ? items.value : items
    return record.length
  })

  watch(currentPage, () => {
    isLoading.value = true

    if (window) {
      window.scrollTo(0, 0)
    }

    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  })

  return {
    currentPage,
    totalElements,
    paginationItems,
    isLoading,
  }
}
