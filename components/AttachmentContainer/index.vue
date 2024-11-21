<script setup lang="ts">
const { attachment } = defineProps<{
    attachment?: number;
}>()
</script>

<template>
    <div class="attachment" v-if="attachment">
        <Icon name="flowbite:paper-clip-outline" class="icon"/>
        <span class="attachment-number">{{ attachment }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.attachment{
    padding: 0.125rem 0.5rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: $testGray20;
    span{
        color: $testGray;
        &.attachment-number{
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.2px;
        }
    }
}

@media screen and (min-width: 1440px){
    .attachment{
        gap: 10px;
        span{
            &.attachment-number{
                font-size: 14px;
            }
        }
    }
}
</style>