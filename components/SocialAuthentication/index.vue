<script setup lang="ts">
const { extended, icon, text } = defineProps({
    extended: {
        type: Boolean,
        default: false,
        required: false
    },
    icon: {type: String, required: false},
    text: {type: String, required: false},
})
</script>

<template>
    <span v-if="extended" class="long-icon w-full rounded-lg flex items-center justify-center bg-[#f8f8f8]">
        <span class="h-4 px-3 flex items-center justify-center pointer-events-none">
             <Icon name="logos:google-icon"/>
        </span>
        <button class="w-full py-[10px]">
            {{ text }}
        </button>
    </span>
    <!-- Shortened version -->
    <span v-if="!extended" class="short-icon flex items-center justify-center bg-[#f8f8f8] cursor-pointer">
        <Icon :name="icon"/>
    </span>
</template>


<style lang="scss">
    span{
        height: 40px;
        &.long-icon{
            color: #171717;
            button{
                font-size: 12px;
            }
        }
        &.short-icon{
            width: 40px;
            border-radius: 12px;
            font-size: 16px;
            color: #8f92a1;
        }
    }

    @media screen and (min-width: 1440px){
        span.long-icon{
            height: 48px;
            button{
                font-size: 16px;
            }
        }
        span.short-icon{
            width: 48px;
            height: 48px;
            border-radius: 16px;
        }
    }
</style>