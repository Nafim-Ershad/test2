<script setup lang="ts">
definePageMeta({
    layout: 'user'
});
</script>

<template>
    <div class="message-body">
        <div class="container">
            <div class="inbox-container">
                <div class="direct-message">
                    <div class="title">
                        <span>DIRECT MESSAGE</span>
                        <Icon name="gg:math-plus" class="icon"/>
                    </div>
                    <div class="user-lists">
                        <ChatTab name="Nicolas" imgSrc="/images/avatars/avatar.png" status="active" :customAvatar="false"/>
                        <ChatTab name="Seth Daniels" imgSrc="/images/avatars/avatar.png" status="active" :customAvatar="true"/>
                        <ChatTab name="Genevieve Rhonda" imgSrc="/images/avatars/avatar.png" status="10 mins" :customAvatar="false"/>
                        <ChatTab name="Seth Daniels" imgSrc="/images/avatars/avatar.png" status="new-message" :customAvatar="false"/>
                        <ChatTab name="Lucy Chevez" imgSrc="/images/avatars/avatar.png" status="active" :customAvatar="false"/>
                    </div>
                </div>
                <div class="group-message">
                    <div class="title">
                        <span>GROUPS</span>
                        <Icon name="gg:math-plus" class="icon"/>
                    </div>
                    <div class="group-lists">
                        <GroupTab name="Nicolas Team"/>
                        <GroupTab name="Nicolas Plan" :counter="1"/>
                        <GroupTab name="General" :counter="8"/>
                    </div>
                </div>
            </div>
            <div class="message-container">
                <div class="message-header">
                    <div class="user">
                        <img src="/images/avatars/avatar.png" alt="avatar">
                        <div class="user-data">
                            <div class="user-name">Nicolas</div>
                            <div class="user-status">Active now</div>
                        </div>
                    </div>
                    <div class="icon-container">
                        <Icon name="tabler:phone"/>
                        <Icon name="tabler:video"/>
                        <Icon name="iconamoon:menu-kebab-vertical-bold"/>
                    </div>
                </div>
                <div class="message-history">
                    <div class="time">
                        09:24, Monday
                    </div>
                    <div class="chats">
                        <div class="from">
                            <img src="/images/avatars/avatar.png" alt="avatar">
                            <div class="content">
                                <span>Hello Nicolas!</span>
                                <span>Can you send me preview image of reading app project?</span>
                            </div>
                        </div>
                        <div class="to">
                            <div class="content">
                                <span>Okay bro! Wait a minute…</span>
                                <span>Here you are bro. Please check it</span>
                                <span class="image-container">
                                    <img src="/images/sent-image.png" alt="sent-img">
                                    <img src="/images/icons/download.png" alt="download" class="download">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message-footer"> 
                    <div class="extras">
                        <div class="avatar">
                            <img src="/images/avatars/avatar.png" alt="avatar">
                        </div>
                        <div class="icon-container">
                            <Icon name="ph:smiley-bold"/>
                            <Icon name="gridicons:attachment"/>
                        </div>
                    </div>
                    <input type="text" placeholder="Write a comment...">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.message-body{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $testGray5;
    .container{
        width: 90%;
        height: 95%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 1px;
        .inbox-container{
            width: 30%;
            max-width: 297px;
            height: 100%;
            padding: 35px 0;
            border-radius: 1rem 0 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 38px;
            background-color: white;
            .direct-message{
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .title{
                    width: 100%;
                    height: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        display: flex;
                        align-items: center;
                        font-weight: 700;
                        font-size: 0.625rem;
                        letter-spacing: 1px;
                        color: $testGray;
                        &.icon{
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }
                .user-lists{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    
                }
            }
            .group-message{
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .title{
                    width: 100%;
                    height: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        display: flex;
                        align-items: center;
                        font-weight: 700;
                        font-size: 0.625rem;
                        letter-spacing: 1px;
                        color: $testGray;
                        &.icon{
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }
                .group-lists{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    // .item{
                    //     position: relative;
                    //     width: 100%;
                    //     padding: 0.5rem 1.25rem;
                    //     border-radius: 1rem;
                    //     display: flex;
                    //     align-items: center;
                    //     justify-content: center;
                    //     cursor: pointer;
                    //     &:hover{
                    //         background: $testGray5;
                    //     }
                    //     .name{
                    //         width: 84%;
                    //         height: 24px;
                    //         font-weight: 500;
                    //         font-size: 0.875rem;
                    //         line-height: 24px;
                    //         letter-spacing: -0.2px;
                    //     }
                    // }
                }
            }
        }

        .message-container{
            width: 100%;
            height: 100%;
            border-radius: 0 1rem 1rem 0;
            padding: 1.75rem;
            padding-top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 2rem;
            background-color: white;
            .message-header{
                width: 100%;
                height: 120px;
                padding: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .user{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
                    img{
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    .user-data{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.125rem;
                        .user-name{
                            font-weight: 700;
                            font-size: 0.875rem;
                            letter-spacing: -0.4px;
                            color: $testBlack;
                        }
                        .user-status{
                            font-weight: 500;
                            font-size: 0.625rem;
                            letter-spacing: -0.2px;
                            color: $testGray;
                        }
                    }
                }
                .icon-container{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1.25rem;
                    span{
                        width: 1.5rem;
                        height: 1.5rem;
                        color: $testGray;
                        cursor: pointer;
                    }
                }
            }
            .message-history{
                width: 100%;
                height: 100%;
                padding: 0 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 1rem;
                background-color: white;
                overflow-y: auto;
                .time{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 0.5rem;
                    letter-spacing: 1px;
                    color: $testGray;
                }
                .chats{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1.25rem;
                    .from{
                        width: 100%;
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: 1rem;
                        img{
                            width: 2.5rem;
                            height: 2.5rem;
                            border-radius: 50%;
                        }
                        .content{
                            max-width: calc(100% - 2.5rem);
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 0.5rem;
                            span{
                                padding: 0.75rem 0.875rem;
                                border-radius: 1rem;
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                background-color: $testGray5;
                                font-weight: 400;
                                font-size: 0.875rem;
                                letter-spacing: -0.4px;
                                color: $testBlack;
                            }
                        };
                    }
                    .to{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: flex-start;
                        gap: 1rem;
                        .content{
                            max-width: calc(100% - 2.5rem);
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;
                            gap: 0.5rem;
                            span{
                                padding: 0.875rem 1rem;
                                border-radius: 1rem;
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                background-color: $testGray5;
                                font-weight: 400;
                                font-size: 0.875rem;
                                letter-spacing: -0.4px;
                                color: $testBlack; 
                            }
                            .image-container{
                                position: relative;
                                max-width: 320px;
                                max-height: 240px;
                                padding: 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: transparent;
                                img{
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 1rem;
                                    cursor: pointer;
                                    &:hover{
                                        &~.download{
                                            display: block;
                                        }
                                    }
                                    &.download{
                                        position: absolute;
                                        right: 1rem;
                                        top: 1rem;
                                        width: 2rem;
                                        height: 2rem;
                                        padding: 0;
                                        border-radius: 0.5rem;
                                        display: none;
                                        z-index: 1;
                                        cursor: pointer;
                                        &:hover{
                                            display: block;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .message-footer{
                position: relative;
                width: 100%;
                height: 4rem;
                .extras{   
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    pointer-events: none;
                    .avatar{
                        width: 3rem;
                        height: 3rem;
                        img{
                            width: 83.33%;
                            height: 83.33%;
                            cursor: pointer;
                            pointer-events: all;
                        }
                    }
                    .icon-container{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1.25rem;
                        span{
                            width: 1.5rem;
                            height: 1.5rem;
                            font-size: 1rem;
                            color: $testGray;
                            cursor: pointer;
                            pointer-events: all;
                        }
                    }
                }
                input{
                    width: 100%;
                    height: 100%;
                    padding: 0 5rem;
                    border-radius: 1rem;
                    background-color: $testGray5;
                    outline: none;
                    font-weight: 400;
                    font-size: 0.875rem;
                    letter-spacing: -0.4px;
                }
            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .message-body{
        .container{
            height: 90%;
            .inbox-container{
                max-width: 314px;
                padding: 40px 0;
                gap: 40px;
                .direct-message{
                    .title{
                        span{
                            font-size: 0.75rem;
                        }
                    }
                }
                .group-message{
                    .title{
                        span{
                            font-size: 0.75rem;
                        }
                    }
                }
            }
            .message-container{
                padding: 2rem;
                padding-top: 0;
                gap: 3rem;
                .message-header{
                    height: 8rem;
                    .user{
                        .user-data{
                            .user-name{
                                font-size: 1rem;
                            }
                        }
                    }
                    .icon-container{
                        gap: 1.5rem;
                    }
                }

                .message-history{
                    max-height: 590px;
                    padding: 0 40px;
                    gap: 1.5rem;
                    .time{
                        font-size: 0.75rem;
                    }
                    .chats{
                        gap: 1.5rem;
                        .to, .from {
                            span{
                                padding: 0.875rem 1rem;
                            }
                        }
                    }
                }

                .message-footer{
                    height: 72px;
                    .extras{
                        .icon-container{
                            gap: 1.5rem;
                        }
                    }
                }
            }
        }
    } 
}

@media screen and (max-width: 1024px){
    .message-body{
        .container{
            width: 98%;
            .inbox-container{
                max-width: 220px;
                .direct-message{
                    width: 90%;
                }
            }
        }
    }
}
</style>