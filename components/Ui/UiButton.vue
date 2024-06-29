<script setup lang="ts">


const props  = defineProps<{
    rounded?: boolean
 }>()


const classes = computed(() => {

    return {
        'ui-button--rounded': props.rounded
    }
})
</script>


<template>
    <button class="ui-button" :class="classes">
        <slot/>
    </button>
</template>



<style scoped lang="scss">
@import '@/assets/variables.scss';


.ui-button {
    border: none;
    outline: none;
    padding: 16px 32px;
    background-color: $color-black;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 20px;

    &--rounded {
        border-radius: 999px;
    }
}

</style>