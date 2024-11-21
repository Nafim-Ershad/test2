<script setup lang="ts">
import { Team } from '@/data/members';
import type { iActivityProjects } from '~/types/prop.type';

const { 
    name, 
    team, 
    members, 
    labels, 
    attachment, 
    workDone, 
    workRemaining, 
    deadline, 
    progress 
} = defineProps<iActivityProjects>();

const workComplete = workDone === workRemaining ? true : false;

</script>

<template>
    <div class="project">
        <div class="header">
            <div class="title">{{ name }}</div>
            <div class="sub-title">{{ team }}</div>
        </div>
        <div class="body">
            <div class="labels">
                <span v-for="color in labels" :style="{ backgroundColor: color }"></span>
            </div>
            <div class="info">
                <AttachmentContainer :attachment="attachment"/>
                <div class="completed"  :class=" workComplete ? 'done': '' ">
                    <Icon name="my-icons:project" class="icon" mode="svg"/>
                    <span class="text">{{ workDone }}/{{ workRemaining }}</span>
                </div>
                <ProjectDeadline :deadline="deadline"/>
            </div>
            <div class="progression-container">
                <ProjectProgression :progress="progress"/>
            </div>
            <div class="members">
                <MultiAvatarContainer :users="members" :maxAvatarCount="2"/>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.project{
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 94px;
    .header{
        width: 40%;
        max-width: 240px;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        div{
            width: 100%;
            display: inline-block;
            text-align: left;
            &.title{
                font-weight: 700;
                font-size: 1rem;
                letter-spacing: -0.4px;
                color: $testBlack;
            }
            &.sub-title{
                font-weight: 400;
                font-size: 12px;
                letter-spacing: -0.4px;
                color: $testGray;
            }
        }
    }
    .body{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 35px;
        .labels{
            width: 4.5rem;
            height: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            span{
                width: 2rem;
                height: 6px;
                border-radius: 0.25rem;
            }
        }
        .info{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
            .completed{
                padding: 0.125rem 0.5rem;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                background-color: $testGray20;
                &.done{
                    background-color: $testGreen20;
                    .icon{
                        fill: $testGreen !important;
                    }
                    span{
                        color: $testGreen;
                    }
                }
                .icon{
                    width: 13px;
                    height: 13px;
                    fill: $testGray !important;
                }
                span{
                    color: $testGray;
                    &.text{
                        font-weight: 500;
                        font-size: 12px;
                        letter-spacing: -0.2px;
                    }
                }
            }
        }
        .progression-container{
            width: 30%;
            max-width: 220px;
        }
        .members{
            min-width: 100px;
        }
    }
}

@media screen and (min-width: 1440px){
    .project{
        .header{
            height: 44px;
        }
        .body{
            gap: 40px;
            .info{
                .completed{
                    span{
                        &.text{
                            font-size: 14px;
                        }
                    }
                }
            }
            .progression-container{
                max-width: 240px;
            }
            .members{
                min-width: 104px;
            }
        }
    }
}
</style>