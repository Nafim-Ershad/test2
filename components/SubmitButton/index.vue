<script lang="ts" setup>
const { label , to} = defineProps<{
    label: string,
    to?: string
}>();

</script>

<template>
    <NuxtLink :to="to ? to : ''">
        <button class="w-full h-full text-white bg-test-blue text-xs leading-5 rounded-lg">
            {{ label }}
        </button>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    a{
        width: 100%;
        height: 2rem;
    }

    @media screen and (min-width: 1440px){
        a{
            height: 2.5rem;   
        }
    }
</style>