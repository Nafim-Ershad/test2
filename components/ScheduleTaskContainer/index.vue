<script setup lang="ts">
import { ref } from 'vue';

import { TaskData } from '@/data/tasks';

const today = ref<string>(new Date().toLocaleString('en-US', { month: 'long', day:'2-digit', year: 'numeric' }));

</script>

<template>
    <div class="task-container">
        <template  v-for="(data, idx) in TaskData" :key="idx">
            <div class="title">
                <span v-if="today === data.date">Today -</span>
                <span>&nbsp; {{ data.date }}</span>
            </div>

            <div class="task-list">
                <ScheduleTask 
                    v-for="(task, idx2) in data.tasks" 
                    :key="idx2" 
                    :title="task.title"
                    :subtitle="task.subtitle"
                    :date="data.date"
                    :today="today"
                    :time="task.time"
                    :status="task.status"
                    :tags="task.tags"
                />
            </div>
        </template>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.task-container{
    width: 100%;
    height: 100%;
    max-width: 240px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    overflow-y: auto;
    .title{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        font-weight: 700;
        font-size: 10px;
        letter-spacing: 1px;
        color: $testGray;
    }

    .task-list{
        position: relative;
        width: 100%;
        height: 100%;
        padding-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 14px;
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(50%);
            width: 100%;
            height: 1px;
            background-color: $testGray;
            opacity: 0.1;
        }
    }
}

@media screen and (min-width: 1440px) and (min-height: 1024px) {
    .task-container{
        max-width: 254px;
        margin-right: 2rem;
        gap: 1.5rem;
        .title{
            font-size: 0.75rem;
        }
        .task-list{
            padding-bottom: 2rem;
            gap: 1rem;
        }
    }
}

</style>