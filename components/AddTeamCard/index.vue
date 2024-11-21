<script setup lang="ts">

</script>

<template>
    <div class="add_item-container">
        <Icon name="gg:math-plus" class="icon"/>
        <span class="text">Add Item</span>
    </div>

</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.add_item-container{
    width: 30%;
    max-width: 338px;
    height: 148px;
    padding: 1.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: $testGray5;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    &:hover{
        background-color: $testGray;
        span{
            &.icon{
                width: 2rem;
                height: 2rem;
                color: white;
            }
            &.text{
                font-size: 1rem;
                color: white;
            }
        }
    }
    span{
        transition: all 350ms ease-in-out;
        &.icon{
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $testBlack;
        }
        &.text{
            font-weight: 700;
            font-size: 14px;
            letter-spacing: -0.2px;
            color: $testBlack;
            opacity: 0.8;
        }
    }
}
</style>