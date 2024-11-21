<script setup lang="ts">
import type { iUpdateHeader } from '~/types/prop.type';

const { date } = defineProps<iUpdateHeader>();
const currentDate = new Date();

const dateDifference = ref<number>(currentDate.getDate() - date.getDate());

const days = function(){
    switch(dateDifference.value){
        case 0:
            return 'Today';
        case 1:
            return 'Yesterday';
        default:
            return `${dateDifference} days ago`;
    }
}();

</script>

<template>
    <div class="title">
        <div class="text">{{ days }}</div>
        <Icon name="mdi:dots-horizontal" class="icon"/>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.title{
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text{
        font-weight: 700;
        font-size: 10px;
        letter-spacing: 1px;
        color: $testGray;
    }
    .icon{
        width: 1rem;
        height: 1rem;
        color: $testGray;
        cursor: pointer;
    }
}

@media screen and (min-width: 1440px){
    .title{
        height: 24px;
        .text{
            font-size: 12px;
        }
    }
}
</style>