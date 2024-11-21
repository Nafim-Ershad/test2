<script setup lang="ts">

</script>

<template>
    <div class="add_project-card">
        <Icon name="gg:math-plus" class="icon"/>
        <span class="text">Add Project</span>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.add_project-card{
    width: 33%;
    max-width: 320px;
    height: 192px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $testGray5;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    span{
        color: $testBlack;
        transition: all 350ms ease-in-out;
        &.icon{
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }
        &.text{
            font-weight: 700;
            font-size: 12px;
            letter-spacing: -0.2px;
        }
    }
    &:hover{
        background-color: $testGray;
        span{
            color: white;
            &.icon{
                width: 2rem;
                height: 2rem;
            }
            &.text{
                font-size: 1rem;
            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .add_project-card{
        max-width: 338px;
        height: 196px;
        span{
            &.text{
                font-size: 14px;
            }
        }
    }
}
</style>