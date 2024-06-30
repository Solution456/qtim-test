<script setup lang="ts">
import UiPaginationItem from './UiPaginationItem.vue'
import UiPaginationButton from './UiPaginationButton.vue'
import ChevronRightIcon from '@/components/Icons/ChevronRightIcon.vue'

const props = defineProps<{
  elements: number
  totalElements: number | undefined
  page?: number

}>()

const model = defineModel({ required: true, default: 1 })

const totalPages = computed(() => Math.ceil(props.totalElements ? props.totalElements / props.elements : 0))

const isLastPage = computed(() => model.value === totalPages.value)
const isFirstPage = computed(() => model.value === 1)

function changePage(page: number) {
  model.value = page
}

function prevPage() {
  if (model.value > 1) {
    model.value -= 1
  }
}

function nextPage() {
  if (model.value < totalPages.value) {
    model.value += 1
  }
}

// watch(model, (newPage) => {
//   emits('change', newPage)
// })
</script>

<template>
  <div class="pagination">
    <UiPaginationButton
      :disabled="isFirstPage"
      @click="prevPage"
    >
      <ChevronRightIcon />
    </UiPaginationButton>

    <div class="pagination__items">
      <UiPaginationItem
        v-for="index in totalPages"
        :key="index"
        :index="index"
        :active="model === index"
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

  &__items {
    display: flex;
    gap: 10px;
  }
}
</style>
