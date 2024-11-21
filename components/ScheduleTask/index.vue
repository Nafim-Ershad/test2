<script setup lang="ts">
import { ref } from 'vue';

const { tags, title, subtitle, time, status } = defineProps<{
    tags: string[];
    title: string;
    subtitle: string,
    time: string;
    status: string;
    today: string;
    date: string;
}>()

</script>

<template>
    <div class="task-card-holder">
        <div class="task-info">
            <div class="task-left">
                <CheckBox :checked="status === 'complete' ? true : false" :cursor="false"/>
            </div>
            <div class="task-right">
                <div class="tags">
                    <span v-for="(tag, indx) in tags" :key="indx">@{{ tag }}&emsp;</span>
                </div>
                <div class="task-name">
                    <div class="title" :class="status === 'complete' ? 'completed':''">{{ title }}</div>
                    <div class="subtitle">{{ subtitle }}</div>
                </div>
                <div class="deadline" :class="status === 'complete' ? 'completed':''">
                    <Icon :name="status === 'complete' ? 'my-icons:tick' : 'my-icons:activity'" mode="svg"/>
                    <span>{{ status === 'complete' ? 'Completed': `${date === today ? `${time} Today` : date}`}}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.task-card-holder{
    width: 100%;
    height: 100%;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 22px;
    .task-info{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        .task-left{
            padding: 5px;
        }
        .task-right{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.5rem;
            .tags{
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                span{
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: -0.4px;
                    color: $testBlue;
                }
            }
            .task-name{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 2px;
                .title{
                    width: fit-content;
                    position: relative;
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: -0.4px;
                    color: $testBlack;
                    &.completed::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 100%;
                        height: 1px;
                        background-color: black;
                    }
                }
                .subtitle{
                    font-weight: 400;
                    font-size: 0.625rem;
                    letter-spacing: -0.4px;
                    color: $testGray;
                }
            }                    
            .deadline{
                padding: 0.125rem 0.5rem;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 6px;
                background-color: $testGray20;
                svg{
                    width: 10px;
                    height: 10px;
                    fill: $testGray !important;
                }
                span{
                    font-weight: 500;
                    font-size: 0.75rem;
                    letter-spacing: -0.2px;
                    color: $testGray;
                }
                &.completed{
                    background-color: $testGreen20;
                    svg{
                        fill: $testGreen !important;
                    }
                    span{
                        color: $testGreen;
                    }
                }
            }
        }
    }
        
}

@media screen and (min-width: 1440px) and (min-height: 1024px) {
    .task-card-holder{
        gap: 1.5rem;
        .task-info{
            .task-right{
                .tags{
                    span{
                        font-size: 0.875rem;
                    }
                }
                .task-name{
                    .title{
                        font-size: 0.875rem;
                    }
                    .subtitle{
                        font-size: 0.75rem;
                    }
                }
                .deadline{
                    span{
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>