<script setup lang="ts">
const { team } = defineProps<{
    team: {
        id: number,
        name: string,
        avatarUrl?: string
    }[];
    teamName: string,
    members: number
}>()

</script>

<template>
    <div class="team_card-container">
        <div class="title">
            <!-- Logo -->
            <img src="/images/white-lightning.png" alt="white">
            <div class="information-container">
                <!-- Name -->
                <span class="team-name">{{ teamName }}</span>
                <!-- Members -->
                <span class="team-members">{{ members }} Members</span>
            </div>
            <Icon name="mdi:dots-horizontal" class="icon"/>
        </div>
        <div class="members-container">
            <MultiAvatarContainer :users="team" :maxAvatarCount="7"/>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.team_card-container{
    width: 30%;
    max-width: 320px;
    height: 148px;
    padding: 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    .title{
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        img{
            width: 3rem;
            height: 3rem;
            margin-right: 15px;
        }
        .information-container{
            width: 100%;
            height: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            span{
                width: 100%;
                &.team-name{
                    font-weight: 700;
                    font-size: 1rem;
                    letter-spacing: -0.4px;
                    color: $testBlack;
                }
                &.team-members{
                    font-weight: 400;
                    font-size: 12px;
                    letter-spacing: -0.4px;
                }
            }
        }
        .icon{
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
    .members-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}

@media screen and (min-width: 1440px) {
    .team_card-container{
        max-width: 338px;
        .title{
            img{
                margin-right: 1rem;
            }
        }
    }
}
</style>