<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAppStore, type tSideTab } from '@/stores/app.store';

const { label, iconName, url, name, notifications = 0 } = defineProps<{
    label: string;
    iconName: string;
    url: string;
    name: tSideTab;
    notifications?: number;
}>();

const AppStore = useAppStore();

const { currentSideTab } = storeToRefs(AppStore);

</script>

<template>
    <NuxtLink :to="url" :class="currentSideTab === name ? 'active': ''">
        <div>
            <span class="icon-container">
                <Icon :name="`my-icons:${iconName}`" mode="svg" class="icon"/>
            </span>
            <span class="notification" v-if="notifications">
                {{ notifications }}
            </span>
            <span class="label-container">
                {{ label }}
            </span>
        </div>
    </NuxtLink>
</template>


<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
a{
    position: relative;
    width: 100%;
    height: 50px;
    padding: 1rem 3rem 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &.active{
        &::after{
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%) rotateZ(180deg);
            width: 3px;
            height: 24px;
            border-radius: 100px 0 0 100px;
            background-color: $testBlue;
        }
        div{
            span{
                color: $testBlue;
                &.icon-container{
                    svg{
                        fill: $testBlue !important;
                    }
                }
            }
        }
    }
    div{
        width: 157px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        span{
            &.notification{
                position: absolute;
                top: 50%;
                right: 1.25rem;
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.5rem;
                font-weight: 700;
                color: white;
                background-color: $testError;
            }
            &.label-container{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 0.75rem;
                font-weight: 700;
                line-height: 1.5rem;
                letter-spacing: -0.2px;
            }
            &.icon-container{
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    width: 20px;
                    height: 20px;
                    fill: $testGray !important;
                }
            }
        }
    }
}

@media screen and (min-width: 1440px) and (min-height: 1024px) {
    a{
        height: 56px;
        div{
            span{
                width: 138px;
                height: 1.5rem;
                &.notification{
                    width: 0.875rem;
                    height: 0.875rem;
                }
                &.icon-container{
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    a{
        padding: 1rem;
        div{
            span{
                &.notification{
                    right: 0.5rem;
                }
                &.label-container{
                    display: none;
                }
            }
        }
    }
}
</style>