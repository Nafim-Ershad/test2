<script setup lang="ts">
import { AllProjects, changedLastUpdate } from '~/data/projects';

definePageMeta({
    layout: 'user'
});

const data = [
    {
        id: 1,
        project: AllProjects[1],
        chatNames: ['Nicolas', 'Jorge Bowman'],
        times: ['04:25 pm', '08:00 am'],
        imgUrls: ['/images/avatars/avatar.png', '/images/avatars/jorge-bowman.png'],
        labels: ['#0052cc', '#00875a'],
        date: changedLastUpdate(),
    },
    {
        id: 2,
        project: AllProjects[3],
        chatNames: ['Kathryn Farmer', 'Esther Medina '],
        times: ['04:25 pm', '08:00 am'],
        imgUrls: ['/images/avatars/kathryn-farmer.png', '/images/avatars/esther-medina.png'],
        labels: ['#00875a', '#5243aa'],
        date: changedLastUpdate(1),
    }
]

</script>

<template>
    <div class="activity-body">
        <div class="update" v-for="d in data" :key="d.id">
            <UpdateHeader :date="d.date"/>
            <div class="item-container">
                <ActivityProject 
                :name="d.project.name"
                :team="d.project.team"
                :members="d.project.members"
                :labels="d.labels"
                :attachment="d.project.attachment"
                :workDone="d.project.workDone"
                :workRemaining="d.project.workeRemaining"
                :deadline="d.project.deadline"
                :progress="d.project.progress"
                />
                <ActivityContainer :name="d.chatNames" :time="d.times" :imgUrl="d.imgUrls" :date="d.date"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.activity-body{
    width: 100%;
    height: 100%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    background-color: $testGray5;
    overflow-y: auto;
    .update{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .item-container{
            width: 100%;
            border-radius: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-color: white;
        }
    }
}

@media screen and (min-width: 1440px){
    .activity-body{
        gap: 2rem;
        .update{
            gap: 1.5rem;
            .item-container{
                padding: 1.5rem;
            }
        }
    }
}
</style>