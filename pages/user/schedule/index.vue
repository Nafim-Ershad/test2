<script setup lang="ts">

definePageMeta({
    layout: 'user'
});

const scheduleOptions = [
    {label: 'All Schedule', value: 'all'},
    {label: 'Today', value: 'today'}
]


</script>

<template>
    <div class="schedule-body">
        <div class="top">
            <CustomSelectSchedule
                name="schedule" 
                :options="scheduleOptions" 
                :style="{ '--custom-background': 'transparent', '--width': '110px', '--gap': '10px' }"
            />
        </div>
        <div class="bottom">
            <Calendar />
            <ScheduleTaskContainer />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.schedule-body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    .top{
        width: 100%;
        height: 38px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .bottom{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }
}

@media screen and (min-width: 1440px) and (min-height: 1024px){
    .schedule-body{
        gap: 2rem;
        .top{
            top: 40px;
        }
        .bottom{
            gap: 2rem;
        }
    }
}
</style>