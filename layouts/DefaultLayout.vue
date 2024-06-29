<script setup lang="ts">

import MyHeader from '@/components/Layout/MyHeader.vue'
</script>

<template>

    <MyHeader />
    <main class="container">
        <slot />
    </main>
</template>



<style scoped lang="scss"></style>