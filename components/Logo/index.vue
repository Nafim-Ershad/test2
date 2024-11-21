
<script setup lang="ts">

</script>

<template>
    <NuxtLink to="/" class="flex items-center justify-between">
        <img src="~/assets/svg/logo_full.svg" alt="logo" class="long-logo">
        <img src="@/assets/svg/logo_short.svg" alt="logo" class="short-logo">
    </NuxtLink>
</template>


<style lang="scss" scoped>
    a{ 
        width: 120px;
        height: 18px;
        img{
            width: 100%;
            height: 100%;
            &.long-logo{
                display: block;
            }
            &.short-logo{
                display: none;
            }
        }
    }
    @media screen and (min-width: 1440px){
        a{ 
            width: 155px;
            height: 24px;
            img{
                width: 100%;
                height: 100%;
                &.long-log{
                    display: block;
                }
                &.short-logo{
                    display: none;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        a{ 
            width: 24px;
            height: 24px;
            img{
                width: 100%;
                height: 100%;
                &.long-logo{
                    display: none;
                }
                &.short-logo{
                    display: block;
                }
            }
        } 
    }
</style>