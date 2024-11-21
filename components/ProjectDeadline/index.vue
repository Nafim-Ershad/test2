<script setup lang="ts">
const { deadline } = defineProps<{
    deadline: number;
}>()
</script>

<template>
    <div class="deadline" :class=" deadline >= 10 ? 'safe' : deadline >= 5 ? 'warn' : 'alert'">
        <Icon name="mdi:clock-time-three-outline" class="icon"/>
        <span class="text">{{ deadline }} day{{ deadline === 1 ? '' : 's' }} left</span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.deadline{
    padding: 0.125rem 0.5rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: $testOrange20;
    text-wrap: nowrap;
    span{
        color: $testOrange;
        &.icon{
            width: 13px;
            height: 13px;
        }
        &.text{
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.4px;
        }
    }
    &.safe{
        background-color: $testGray20;
        span{
            color: $testGray;
        }
    }
    &.warn{
        background-color: $testOrange20;
        span{
            color: $testOrange;
        }  
    }
    &.alert{
        background-color: $testError20;
        span{
            color: $testError;
        }
    }
}
</style>