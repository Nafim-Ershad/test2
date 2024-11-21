<script setup lang="ts">
const { progress } = defineProps<{
    progress: number;
}>()
</script>

<template>
    <div class="project-progression">
        <div class="progress-bar" :style="{'--width': `${progress}%` }"></div>
        <div class="percent">{{ progress }}%</div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.project-progression{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .progress-bar{
        position: relative;
        width: 100%;
        height: 4px;
        border-radius: 3px;
        background-color: $testGray5;
        &::after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: var(--width);
            height: 100%;
            border-radius: 3px;
            background-color: $testBlue;
        }
    }
    .percent{
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: -0.4px;
        color: $testBlack;
    }
}

@media screen and (min-width: 1440px){
    .project-progression{
        height: 18px;
        gap: 12px;
        .percent{
            width: 26px;
            font-size: 12px;
        }
    }
}
</style>