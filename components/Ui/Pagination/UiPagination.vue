<script setup lang="ts">
import UiPaginationItem from './UiPaginationItem.vue'
import UiPaginationButton from './UiPaginationButton.vue'
import ChevronRightIcon from '@/components/Icons/ChevronRightIcon.vue'

const props = defineProps<{
  elements: number
  totalElements: number
  page?: number

}>()

const emits = defineEmits<{
  (e: 'change', page: number): void
}>()

const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(props.totalElements / props.elements))

const isLastPage = computed(() => currentPage.value === totalPages.value)
const isFirstPage = computed(() => currentPage.value === 1)

function changePage(page: number) {
  currentPage.value = page
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

watch(currentPage, (newPage) => {
  emits('change', newPage)
})
</script>

<template>
  <div class="pagination">
    <UiPaginationButton
      :disabled="isFirstPage"
      @click="prevPage"
    >
      <ChevronRightIcon />
    </UiPaginationButton>

    <div>
      <UiPaginationItem
        v-for="index in totalPages"
        :key="index"
        :index="index"
        :active="currentPage === index"
        @click="changePage(index)"
      />
    </div>

    <UiPaginationButton
      :disabled="isLastPage"
      @click="nextPage"
    >
      <ChevronRightIcon />
    </UiPaginationButton>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
}
</style>
