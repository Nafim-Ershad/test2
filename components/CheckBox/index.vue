<script lang="ts" setup>
import { ref } from 'vue';
import type { iCheckbox } from '@/types/prop.type';

const { checked = false, cursor = true } = defineProps<iCheckbox>();

const isChecked = ref<boolean>(checked);

function changeChecked(): void
{
    if(cursor){
        isChecked.value = !isChecked.value;
        return;
    }
    return;
}

</script>

<template>
    <div 
        class="checkbox-container" 
        :class="isChecked ? 'checked' : ''" @click="changeChecked"
    >
        <Icon name="my-icons:tick" class="icon" mode="svg" v-if="isChecked"/>
    </div>
</template>

<style lang="scss" scoped>
.checkbox-container{
    width: 13px !important;
    height: 13px !important;
    padding: 3px 2px;
    border: 1px solid #8f92a1;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.checked{
        border: 1px solid white;
        background-color: #0052cc;
    }
    .icon{
        width: 8px;
        height: 6px;
        fill: white !important;
    }
}
</style>