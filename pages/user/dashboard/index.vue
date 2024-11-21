<script setup lang="ts">
import { AllTeams } from '@/data/members';
import { AllProjects } from '@/data/projects';

definePageMeta({
    layout: 'user'
});


</script>

<template>
    <div class="dashboard-body">
        <div class="my_team-container">
            <div class="title">
                <span>MY TEAM</span>
                <Icon name="mdi:dots-horizontal" class="icon" />
            </div>
            <div class="team-list">
                <TeamCard v-for="team in AllTeams" :team="team.team" :teamName="team.name" :members="team.members"/>
                <AddTeamCard />
            </div>
        </div>
        <div class="my_projects-container">
            <div class="title">
                <span>MY PROJECTS</span>
                <Icon name="mdi:dots-horizontal" class="icon"/>
            </div>
            <div class="project-list">
                <ProjectCard v-for="project in AllProjects" 
                    :name="project.name"
                    :team="project.team"
                    :members="project.members"
                    :deadline="project.deadline"
                    :attachment="project.attachment"
                    :progress="project.progress"
                />
                <AddProjectCard />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.dashboard-body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    overflow-y: auto;
    .my_team-container{
        width: 100%;
        padding: 40px;
        border-radius: 1.5rem 0 0 1.5rem;
        background-color: $testGray5;
        .title{
            width: 100%;
            padding: 2px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $testGray;
            font-weight: 700;
            font-size: 10px;
            line-height: 18px;
            letter-spacing: 1px;
            span{
                &.icon{
                    width: 1.25rem;
                    height: 1.25rem;
                    cursor: pointer;
                }
            }
        }
        .team-list{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow-x: auto;
        }
    }
    .my_projects-container{
        width: 100%;
        padding: 40px;
        border-radius: 1.5rem 0 0 1.5rem;
        background-color: $testGray5;
        .title{
            width: 100%;
            padding: 2px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $testGray;
            font-weight: 700;
            font-size: 10px;
            line-height: 18px;
            letter-spacing: 1px;
            span{
                &.icon{
                    width: 1.25rem;
                    height: 1.25rem;
                    cursor: pointer;
                }
            }
        }
        .project-list{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 38px;
        }
    }
}

@media screen and (min-width: 1440px){
    .dashboard-body{
        padding: 48px;
        gap: 1.5rem;
        .my_team-container{
            padding: 45px;
            .title{
                font-size: 12px;
                line-height: 20px;
                span{
                    &.icon{
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
        }
        .my_project-container{
            padding: 45px;
            .title{
                font-size: 12px;
                line-height: 20px;
                span{
                    &.icon{
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
            .project-list{
                gap: 40px;
            }
        }
    }
}
</style>