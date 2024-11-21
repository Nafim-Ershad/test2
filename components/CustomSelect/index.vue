
<script setup lang="ts">

interface iOptions{
    value: string,
    label: string
}

interface iSelectProps{
    options: iOptions[],
    name: string
}

const { options, name} = defineProps<iSelectProps>();

</script>

<template>
    <div>
        <select 
            :name="name"
            :value="options[0].value"
        >
            <template v-for="option in options">
                <option :value="option.value">
                    {{ option.label }}
                </option>
            </template>
        </select>
        <span>
            <img src="@/assets/icons/arrow-down-1.svg" alt="arrow-down">
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
div{
    position: relative;
    width: var( --width, 140px);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap, 6px);
    select{
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        height: 100%;
        padding: 0.375rem 0.56rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
        background-color: var(--custom-background, $testGray5);
        outline: none;
    }
    span{
        position: absolute;
        right: 0.75rem;
        top: 50%;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
    }
}

@media screen and (min-width: 1440px) {
    div{
        height: 40px;
        select{
            padding: 0.5rem 0.75rem;
            font-size: 14px;
            line-height: 24px;
            font-weight: 700;
        } 
    }
}
</style>