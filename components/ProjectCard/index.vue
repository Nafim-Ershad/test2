<script setup lang="ts">
import type { TeamMember } from '~/types/team.type';

const { name, team, deadline, attachment, members, progress } = defineProps<{
    name: string;
    team: string;
    deadline: number;
    attachment?: number;
    members: TeamMember[];
    progress: number;
}>()
</script>

<template>
    <div class="project-card">
        <div class="card-header">
            <div class="title-container">
                <div class="title">{{ name }}</div>
                <div class="sub-title">{{ team }}</div>
            </div>
            <Icon name="mdi:dots-horizontal" class="icon"/>
        </div> 
        <div class="project-info">
            <AttachmentContainer :attachment="attachment"/>
            <ProjectDeadline :deadline="deadline"/>
        </div>
        <ProjectProgression :progress="progress"/>
        <div class="project-members">
            <MultiAvatarContainer :users="members" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.project-card{
    width: 33%;
    max-width: 320px;
    padding: 22px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    background-color: white;
    .card-header{
        width: 100%;
        height: 42px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .title-container{
            width: 100%;
            max-width: 230px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .title{
                display: inline-block;
                width: 100%;
                font-weight: 700;
                font-size: 15px;
                letter-spacing: -0.4px;
                color: $testBlack;
                // Ellipsis
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .sub-title{
                font-weight: 400;
                font-size: 10px;
                letter-spacing: -0.4px;
                color: $testGray;
            }
        }
        .icon{
            width: 1rem;
            height: 1rem;
            color: $testGray;
            cursor: pointer;
        }
    }
    .project-info{
        width: 100%;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }
    .project-members{
        width: 100%;
    }
}

@media screen and (min-width: 1440px) {
    .project-card{
        max-width: 338px;
        padding: 1.5rem;
        gap: 1rem;
        .card-header{
            height: 44px;
            max-width: 242px;
            .title-container{
                .title{
                    font-size: 1rem;
                }
                .sub-title{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>