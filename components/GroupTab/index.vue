<script setup lang="ts">
const { name, counter } = defineProps<{
    name: string,
    counter?: number
}>()
</script>


<template>
    <div class="item">
        <div class="name"># {{ name }}</div>
        <div class="counter" v-if="counter && counter > 0">{{ counter }}</div>
    </div>
</template>

<style lang="scss"scoped>
@import "@/assets/sass/_variables.scss";
.item{
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background: $testGray5;
    }
    .name{
        width: 84%;
        height: 24px;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 24px;
        letter-spacing: -0.2px;
    }
    .counter{
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 0.875rem;
        height: 0.875rem;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $testError;
        font-weight: 700;
        font-size: 8px;
        line-height: 0.875rem;
        color: white;
        z-index: 10;
    }
}

@media screen and (min-width: 1440px){
    .item{
        height: 40px;
        .counter{
            width: 1rem;
            height: 1rem;
            font-size: 10px;
            line-height: 1rem;
        }
    }
    
}
</style>