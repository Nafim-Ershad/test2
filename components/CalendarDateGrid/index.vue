<script setup lang="ts">
import { ref, watch } from 'vue';
import { TaskData } from '@/data/tasks';
const { paddedDays } = defineProps<{
    paddedDays: { date: number | ""}[]
}>();

const activeIndex = ref<number | null>(null);

function setActive(index: number): void
{   
    if(paddedDays[index].date){
        if(activeIndex.value !== index)
        {
            activeIndex.value = index;
            return;
        }
        
        activeIndex.value = null;
    }
}

// For the task and the small circles
const dates = TaskData.map(date => {
    const d = new Date(date.date);
    return d.getDate();
});

// 'paddedDays' is a deconstructed props. So it needs to be passed as a getter function.
watch(() => paddedDays, () => {
    // watches for changes in the paddedDays array
    activeIndex.value = null;
})

</script>

<template>
    <div class="date-grid">
        <div
            class="date"
            v-for="(day, idx) in paddedDays"
            :key="idx"
            :class="{ 'active': activeIndex === idx }"
            @click="() => setActive(idx)"
        >
            <span class="date-number">
                {{ day.date }}
            </span>
            <template v-for="(date, idx) in dates" :key="idx">
                <div v-if="date === day.date"class="task-balls-container">
                    <span  v-for="(task, idx2) in TaskData[idx].tasks" :key="idx2" class="task-ball">
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.date-grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1px;
    .date {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        cursor: pointer;
        &.active {
            color: $testBlue;
            &::before{
                content: '';
                position: absolute;
                width: 85%;
                height: 85%;
                border-radius: 1rem;
                background-color: $testBlue10;
            }
        }
        &:hover{
            border: 2px solid $testBlue;
        }
        .date-number{
            pointer-events: none;
            font-weight: 700;
            font-size: 0.875rem;
            letter-spacing: -0.4px;
        }
        .task-balls-container{
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
            .task-ball{
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: $testBlue;
            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .date-grid{
        .date{
            &.active{
                &::before{
                    border-radius: 1.5rem;
                }
            }
            .date-number{
                font-size: 1rem;
            }
            .task-balls-container{
                .task-ball{
                    width: 6px;
                    height: 6px;
                }
            }
        }
    }
}

</style>