<script setup lang="ts">
import { ref, computed } from 'vue';

const calendarOptions = [
    { label: "Month", value: 'm' },
    { label: "Weeks", value: 'w' },
    { label: "Days", value: 'd' },
];
// Since our calendar starts from Monday, but JS Date start from Sunday, need to do some math
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Date helpers
const today = new Date();
const currentMonth = ref(today.getMonth()); // Gets the month number { November -> 10 }
const currentYear = ref(today.getFullYear()); // Gets the year value in Number

// Computed properties
const monthName = computed(() => {
    // Gets the current month name with long name { 10 -> November }
    return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long' });
});

const daysInMonth = computed(() => {
    // The 1 is addded to go to the next month of the current month
    // 0 in the 3rd param makes the date to go to the previous month and get the last date.
    // for currentMonth == Mar as 2, then it becomes 3 which equates to April
    // With 0 on the third params, it would return March 31, 2024
    // The getDate() gets the date number
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const startDayOfWeek = computed(() => {
    // The 1 on the 3rd params gives out the first day of the year and month
    // getDay gives out the week name in number
    // Since our calendar starts from Monday, and Js starts from Sunday, had to decrease by 1
    const startDay = new Date(currentYear.value, currentMonth.value, 1).getDay() - 1;
    return  startDay < 0 ? 6 : startDay;
});

const paddedDays = computed(() => {
    const days = [];
    // Add padding for previous month
    // Gets the number of the day of the week where the month starts
    for (let i = 0; i < startDayOfWeek.value; i++) 
    {
        // It creates empty data where empty pads for the days on the previous month 
        // should be put like a calendar. Same for the next month
        days.push({ date: ''});
    }

    // Add days for the current month
    // Loop goes through all the days in the month
    for (let day = 1; day <= daysInMonth.value; day++) 
    {
        // const isToday =
        //     day === today.getDate() &&
        //     currentMonth.value === today.getMonth() &&
        //     currentYear.value === today.getFullYear();
        // validates today's date, day and year and determines whether its today
        days.push({ date: day });
    }

    return days;
});

// Navigation
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
}
</script>


<template>
  <div class="calender-container">
    <div class="calendar-header">
        <div class="buttons-container">
            <div class="button left-button" @click="prevMonth">
                <
            </div>
            <div class="button right-button" @click="nextMonth">
                >
            </div>
            <div class="month-container">
                <div class="month">{{ monthName }}</div>
                <div class="year">{{ currentYear }}</div>
            </div>
        </div>
        <CustomSelectSchedule 
            name="calender-view" 
            :options="calendarOptions" 
            :style="{ '--custom-background': 'transparent', '--width': '110px', '--gap': '10px' }"
        />
    </div>
    <div class="calendar-body">
        <div class="calendar-grid">
            <div class="day-grid">
                <div class="day" v-for="day in daysOfWeek" :key="day">
                    {{ day }}
                </div>
            </div>
            <CalendarDateGrid :paddedDays="paddedDays" />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.calender-container{
  width: 100%;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: $testGray5;
  .calendar-header{
      width: 100%;
      height: 4rem;
      padding: 0 20px;
      margin-bottom: 1px;
      border-radius: 1rem 1rem 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      .buttons-container{
          height: 100%;
          padding: 0.5rem 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          .button{
              width: 47px;
              height: 38px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $testGray5;
              font-size: 22px;
              color: $testGray;
              cursor: pointer;
              &.left-button{
                  margin-right: 0.5px;
                  border-radius: 1rem 0 0 1rem;
              }
              &.right-button{
                  margin-left: 0.5px;
                  border-radius: 0 1rem 1rem 0;
              }
          }
          .month-container{
              margin-left: 22px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.25rem;
              .month{
                  font-weight: 700;
                  font-size: 0.875rem;
                  letter-spacing: -0.2px;
                  color: $testBlack;
              }
              .year{
                  font-weight: 500;
                  font-size: 0.75rem;
                  letter-spacing: -0.2px;
                  color: $testGray;
              }
          }
      }
  }
  .calendar-body{
    width: 100%;
    height: 100%;
    .calendar-grid {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1px;
        .day-grid{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            .day{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.875rem;
            letter-spacing: -0.4px;
            color: $testGray;
            background-color: white;
            }
        }
    }
  }
}

@media screen and (min-width: 1440px){
  .calender-container{
    padding: 3rem;
    .calendar-header{
        height: 5rem;
        padding: 1.5rem;
        .buttons-container{
            height: 2.5rem;
            .button{
                width: 3rem;
                font-size: 24px;
            }
            .month-container{
                margin-left: 1.5rem;
                .month{
                    font-size: 1rem;
                }
            }
        }
    }

    .calendar-body{
        .calendar-grid{
            .day-grid{
                .day{
                    padding: 1.5rem;
                    font-size: 1rem;
                }
            }
        }
    }
  }
}
</style>
