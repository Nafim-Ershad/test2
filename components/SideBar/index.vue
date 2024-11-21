<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const AppStore = useAppStore();

const { setActiveSideTab } = AppStore;

watch(route, (r) => {
    switch(r.path){
        case '/user/dashboard':
            setActiveSideTab('dashboard');
            break;
        case '/user/messages':
            setActiveSideTab('messages');
            break;
        case '/user/projects':
            setActiveSideTab('projects');
            break;
        case '/user/schedule':
            setActiveSideTab('schedule');
            break;
        case '/user/activity':
            setActiveSideTab('activity');
            break;
        default:
            break;
    }
});

onMounted(() => {
    switch(route.path){
        case '/user/dashboard':
            setActiveSideTab('dashboard');
            break;
        case '/user/messages':
            setActiveSideTab('messages');
            break;
        case '/user/projects':
            setActiveSideTab('projects');
            break;
        case '/user/schedule':
            setActiveSideTab('schedule');
            break;
        case '/user/activity':
            setActiveSideTab('activity');
            break;
        default:
            break;
    }
})

</script>

<template>
    <aside>
        <div class="menu">
            <SideBarTab iconName="dashboard" label="Dashboard" url="/user/dashboard" name="dashboard"/>
            <SideBarTab iconName="message" label="Messages" url="/user/messages" name="messages" :notifications="1"/>
            <SideBarTab iconName="project" label="Projects" url="/user/projects" name="projects"/>
            <SideBarTab iconName="schedule" label="Schedule" url="/user/schedule" name="schedule"/>
            <SideBarTab iconName="activity" label="Activity" url="/user/activity" name="activity"/>
        </div>

        <div class="team">
            <div class="label">TEAMS</div>
            <div class="user">
                <div class="avatar">
                    <img src="/images/avatars/avatar.png" alt="avatar">
                </div>
                <div class="user-info">
                    <span class="name">Seth Daniels</span>
                    <span class="username">@sethdaniels</span>
                </div>
            </div>
            <div class="new-team">
                <Icon name="material-symbols:add-2" class="icon"/>
                <span>Add New Button</span>
            </div>
            <!-- <div></div> -->
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
aside{
    width: 30%;
    max-width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    div{
        &.menu{
            width: 100%;
            height: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &.team{
            width: 100%;
            height: 9.75rem;
            margin-bottom: 2.3rem;
            padding-left: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 1rem;
            .label{
                width: 205px;
                height: 1.25rem;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 0.75rem;
                line-height: 1.25rem;
                font-weight: 700;
                color: $testGray;
                background: white;
            }
            .user{
                width: 100%;
                height: 4.25rem;
                padding: 1rem 0 0 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.625rem;
                .avatar{
                    position: relative;
                    width: 2.5rem;
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 100%;
                        aspect-ratio: 1;
                    } 
                    &::after{
                        content: "";
                        position: absolute;
                        top: 22px;
                        left: 22px;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 50%;
                        background-color: $testGreen;
                    }
                }
                .user-info{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    .name{
                        width: 100%;
                        height: 1.25rem;
                        font-size: 0.875rem;
                        line-height: 1.5rem;
                        font-weight: 700;
                    }
                    .username{
                        width: 100%;
                        height: 1.25rem;
                        font-size: 0.75rem;
                        line-height: 1.25rem;
                        font-weight: 500;
                        color: $testGray;
                    }
                }
            }
            .new-team{
                width: 12rem;
                height: 2.5rem;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                background: $testGray5;
                cursor: pointer;
                span{
                    font-size: 0.75rem;
                    font-weight: 700;
                    line-height: 1.5rem;
                    letter-spacing: -0.2px;
                    &.icon{
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1440px){
    aside{
        max-width: 250px;
        div{
            &.menu{
                width: 100%;
                height: 280px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            &.team{
                height: 10.25rem;
                margin-bottom: 2.5rem;
                .user{
                    height: 4.5rem;
                    .avatar{
                        width: 2.5rem;
                        aspect-ratio: 1;
                        &::after{
                            content: "";
                            position: absolute;
                            top: 24px;
                            left: 24px;
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                            background-color: $testGreen;
                    }
                    }
                    .new-team{
                        padding: 0.5rem 3.75rem;
                        span{
                            font-size: 0.875rem;
                            font-weight: 700;
                            line-height: 1.5rem;
                            letter-spacing: -0.2px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    aside{
        max-width: 80px;
        div{
            &.team{
                padding-left: 0;
                .label{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .user{
                    padding: 0 1rem;
                    .avatar{
                        height: 2.5rem;
                        &::after{
                            top: 80%;
                            left: 80%;
                        }
                    }
                    .user-info{
                        span{
                            display: none;
                        }
                    }
                }
                .new-team{
                    width: 100%;
                    border-radius: 0.25rem;
                    gap: 0;
                    span{
                        display: none;
                        &.icon{
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>