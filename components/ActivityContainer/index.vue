<script setup lang="ts">
import type { iActivityContainer } from '@/types/prop.type';
import { dateFormatter } from '@/data/projects';
import { ref } from 'vue';

const { name, time, imgUrl, date } = defineProps<iActivityContainer>();

const isChecked1 = ref<boolean>(true);
const isChecked2 = ref<boolean>(true);

const currentDate = new Date();
const dateDifference = currentDate.getDate() - date.getDate();

</script>

<template>
    <div class="activity">
        <div class="user-img">
            <img :src="imgUrl[0]" alt="">
        </div>
        <div class="user-comment">
            <div>
                <span>{{ name[0] }}</span> commented on Task:
            </div>
            <div class="comment">Please check your email. I have sent icon references for this project.</div>
        </div>
        <div class="time-container">
            <span class="time">{{ time[0] }}</span>
            <span class="date" v-if="dateDifference > 0">&nbsp;-&nbsp;{{ dateFormatter(date) }}</span>
        </div>
        <Icon name="mdi:dots-horizontal" class="icon"/>
    </div>
    <div class="activity">
        <div class="user-img">
            <img :src="imgUrl[1]" alt="">
        </div>
        <div class="user-comment">
            <div> 
                <span>{{ name[1] }}</span> completed Task List:
            </div>
            <div class="comment">
                <div>
                    <CheckBox :checked="true" @click="() => { isChecked1 = !isChecked1}"/>
                    <p>
                        <span class="tag" :class="isChecked1 ? 'strike': ''">@nicolaslabs</span>
                        <span :class="isChecked1 ? 'strike': ''">
                            User Research
                        </span>
                    </p>
                </div>
                <div>
                    <CheckBox :checked="true" @click="() => { isChecked2 = !isChecked2}"/>
                    <p>
                        <span class="tag" :class="isChecked2 ? 'strike': ''">@nicolaslabs</span>
                        <span class="tag" :class="isChecked2 ? 'strike': ''">@nicolas</span>
                        &emsp;
                        <span :class="isChecked2 ? 'strike': ''">Create Moodboard</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="time-container">
            <span class="time">{{ time[1] }}</span>
            <span class="date" v-if="dateDifference > 0">&nbsp;-&nbsp;{{ dateFormatter(date) }}</span>
        </div>
        <Icon name="mdi:dots-horizontal" class="icon"/>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.activity{
    width: 100%;
    padding: 1rem;
    border-top: 1px solid $testGray5;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.25rem;
    .user-img{
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .user-comment{
        width: 100%;
        max-width: 600px;
        min-height: 48px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        div{
            font-weight: 400;
            font-size: 14px;
            letter-spacing: -0.4px;
            color: $testGray;
            span{
                font-weight: 700;
                font-size: 14px;
                letter-spacing: -0.4px;
                color: $testBlack;
            }
            &.comment{ 
                color: $testBlack;
                div{                                   
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 0.5rem;
                    p{
                        span{

                            &.tag{
                                color: $testBlue;
                                &.strike{
                                    text-decoration:line-through solid 1px $testBlue;
                                }
                            }
                            &.strike{
                                text-decoration: line-through solid 1px black;
                            }
                        }
                    }
                }
            }
        }
    }
    .time-container{
        width: 40%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .time{
            height: 100%;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.2px;
            color: $testGray;
        }
        .date{  
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.2px;
            color: $testGray;
        }
    }
    .icon{
        width: 1.5rem;
        height: 1.5rem;
        color: $testGray;
        cursor: pointer;
    }
}

@media screen and (min-width: 1440px){
    .activity{
        padding: 2rem 1.5rem;
        gap: 1.5rem;
        .user-comment{
            div{
                &.comment{
                    div{
                        gap: 1rem;
                    }
                }
            }
        }
        .time-container{
            .time{
                font-size: 14px;
            }
            .date{
                font-size: 14px;
            }
        }
    }
}

</style>