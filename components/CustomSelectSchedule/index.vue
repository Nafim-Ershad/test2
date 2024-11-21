
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
        <label>Show:</label>
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
    max-width: 182px;
    height: 38px;
    padding: 7.5px 11px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: $testGray5;
    label{
        font-weight: 500;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.2px;
        color: $testGray;
    }
    select{
        appearance: none;
        -webkit-appearance: none;
        height: 100%;
        border-radius: 0.75rem;
        padding-right: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
        background-color: var(--custom-background, $testGray5);
        outline: none;
        cursor: pointer;
    }
    span{
        position: absolute;
        right: 0.25rem;
        top: 50%;
        width: 1.5rem;
        height: 1.5rem;
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
        max-width: 192px;
        height: 40px;
        padding: 0.5rem 0.75rem;
        label{
            font-size: 14px;
        }
        select{
            padding-right: 1.75rem;
            font-size: 14px;
            line-height: 24px;
            font-weight: 700;
        } 
    }
}
</style>