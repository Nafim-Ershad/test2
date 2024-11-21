<script lang="ts" setup>
const { name, imgSrc, status } = defineProps<{
    name: string,
    imgSrc: string,
    status: 'active' | 'new-message' | string,
    customAvatar: boolean
}>();

</script>

<template>
    <div class="user">
        <img :src="imgSrc" alt="avatar" v-if="!customAvatar"/>
        <CustomAvatar v-if="customAvatar" :userName="name" bgColor="#00875a"/>
        <span class="name">{{ name }}</span>
        <span class="status">
            <span class="active" v-if="status === 'active'"></span>
            <span class="new-message" v-else-if="status === 'new-message'">
                1
            </span>
            <span class="last-seen" v-else>
                {{  status }}
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.user{
    position: relative;
    width: 100%;
    height: 50px;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        background-color: $testGray5;
    }
    img{
        width: 30px;
        height: 30px;
    }
    .name{
        width: 100%;
        max-width: 85px;
        height: 100%;
        margin-left: 8px;
        display: inline-block;
        text-align: left;
        vertical-align: middle;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 35px;
        letter-spacing: -0.2px;
        // Ellepsis
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .status{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        .active{
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: $testGreen;
        }
        .new-message{
            width: 12px;
            height: 12px;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $testError;
            font-weight: 700;
            font-size: 0.5rem;
            line-height: 0.625rem;
            color: white;
        }
        .last-seen{
            font-weight: 500;
            font-size: 8px;
            letter-spacing: -0.2px;
            text-align: right;
            color: $testGray;
        }
    }
}

@media screen and (min-width: 1440px){
    .user{
        height: 56px;
        padding: 0.5rem 1rem;
        img{
            width: 33px;
            height: 33px;
        }
        .name{
            max-width: 100px;
            // max-width: 138px;
            margin-left: 12px;
            font-size: 14px;
            line-height: 40px;
        }
        .status{
            .last-seen{
                font-size: 10px;
                line-height: 40px;
            }
        }
    }
}

@media screen and (max-width: 1024px){
    .user{
        img{
            width: 24px;
            height: 24px;
        }
    }
}
</style>