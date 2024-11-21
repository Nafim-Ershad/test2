<script setup lang="ts">
const searchValue = ref<string>("");

</script>
<template>
     <header>
        <div>
            <div class="logo-hi">
            <!-- Logo -->
                <Logo/>
                <!-- Hi -->
                <span>
                    👋 Hi Nicolas!
                </span>
            </div>
            <!-- SearchBar -->
            <div class="searchbar">
                <input type="search" v-model="searchValue" :class="searchValue ? 'hide': ''">
                <label>Search...</label>
                <Icon name="material-symbols:search-rounded"/>
            </div>
            <!-- Buttons -->
            <div class="interactions">
                <button>
                    <span>+</span>
                    <span>Start Project</span>
                </button>
                <div class="notification">
                    <Icon name="my-icons:bell" mode="svg"/>
                    <span class="bell-counter">1</span>
                </div>
                <div class="cart">
                    <Icon name="my-icons:cart" mode="svg"/>
                </div>
                <div class="avatar">
                    <img src="/images/avatars/avatar.png" alt="avatar">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
header{
    width: 100%;
    height: 80px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            &.logo-hi{
                max-width: 17.5rem;
                height: 1.5rem;
                gap: 4.4rem;
                span{
                    height: 1.875rem;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    letter-spacing: -0.4px;
                    text-align: left;
                    text-wrap: nowrap;
                }
            }
            &.searchbar{
                position: relative;
                width: 200px;
                height: 44.8px;
                input{
                    width: 100%;
                    height: 100%;
                    padding: 1rem;
                    font-size: 0.875rem;
                    background-color: $testGray5;
                    border-radius: 0.75rem;
                    outline: none;
                    &:focus{
                        &~label{
                            display: none;
                        }
                        &~span{
                            display: none;
                        }
                    }
                    &.hide{
                        &~label{
                            display: none;
                        }
                        &~span{
                            display: none;
                        } 
                    }
                }
                label{
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: $testGray;
                    pointer-events: none;
                }
                span{
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    width: 20px;
                    height: 20px;
                    transform: translateY(-50%);
                    color: $testGray;
                    pointer-events: none;
                    z-index: 100;
                }
            }
            &.interactions{
                max-width: 340px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                button{
                    padding: 0.45rem 0.7125rem;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.625rem;
                    background-color: $testBlue;
                    color: white;
                    span{
                        &:first-child{
                            font-size: 1.5rem;
                            font-weight: 600;
                        }
                        &:last-child{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 0.75rem;
                            line-height: 1.5rem;
                            font-weight: 700;
                            text-wrap: nowrap;
                        }
                    }
                }
                .notification{
                    position: relative;
                    width: 1.5rem;
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg{
                        width: 1.25rem;
                        height: 1.25rem;
                        fill: $testGray !important;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        top: -2px;
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: $testBlue;
                        font-size: 0.5rem;
                        color: white;
                    }
                }
                .cart{
                    width: 1.5rem;
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg{
                        width: 1.25rem;
                        height: 1.25rem;
                        fill: $testGray !important;
                    }
                }
                .avatar{
                    width: 3rem;
                    height: 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 83.33%;
                        height: 83.33%;
                        cursor: pointer;
                    }
                }
            }
        }

    }

}

@media screen and (min-width: 1440px) {
    header{
        height: 100px;
        padding: 22px 24px;
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                &.logo-hi{
                    max-width: 22rem;
                    height: 1.875rem;
                    gap: 4.4rem;
                    span{
                        width: 8.5rem;
                        height: 1.875rem;
                        font-size: 1.375rem;
                        line-height: 1.875rem;
                        letter-spacing: -0.4px;
                    }
                }
                &.searchbar{
                    width: 15.625rem;
                    height: 3.5rem;
                }
                &.interactions{
                    width: 366px;
                    height: 48px;
                    gap: 2.5rem;
                    button{
                        padding: 0.5rem 0.75rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.625rem;
                        background-color: $testBlue;
                        color: white;
                        span{
                            &:first-child{
                                font-size: 1.5rem;
                                font-weight: 600;
                            }
                            &:last-child{
                                font-size: 0.875rem;
                                line-height: 1.5rem;
                                font-weight: 700;
                            }
                        }
                    }
                    .avatar{
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px){
    header{
        width: 100%;
        height: 60px;
        padding: 0;
        div{
            width: 97%;
            gap: 17%;
            div{
                &.logo-hi{
                    width: 26%;
                    height: 1.875rem;
                    padding-left: 1.5rem;
                    justify-content: flex-start;
                    gap: 5%;
                    span{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1rem;
                        line-height: 1.25rem;
                        letter-spacing: -0.4px;
                    }
                }
                &.searchbar{
                    position: relative;
                    width: 140px;
                    height: 40px;
                    input{
                        width: 100%;
                        height: 100%;
                        padding: 0.5rem;
                        font-size: 0.875rem;
                        background-color: $testGray5;
                        border-radius: 0.75rem;
                        outline: none;
                        &::placeholder{
                            opacity: 0;
                        }
                    }
                }
                &.interactions{
                    width: 26%;
                    gap: 0.5rem;
                    button{
                        padding: 0.075rem 0.75rem;
                        span{
                            &:first-child{
                                font-weight: 500;
                                font-size: 0.75rem;
                            }
                            &:last-child{
                                display: none;
                            }
                        }
                    }
                }

            }
        }
    }
}

@media screen and (max-width: 640px){
    header{
        width: 100%;
        height: 55px;
        padding: 0;
        div{
            width: 95%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20%;
            div{
                &.logo-hi{
                    width: fit-content;
                    height: 1.875rem;
                    gap: 5%;
                    span{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1rem;
                        line-height: 1rem;
                        letter-spacing: -0.4px;
                    }
                }
                &.searchbar{
                    display: none;
                }
                &.interactions{
                    width: fit-content;
                    gap: 0.5rem;
                    button{
                        padding: 0.075rem 0.75rem;
                        span{
                            &:first-child{
                                font-weight: 500;
                                font-size: 1rem;
                            }
                            &:last-child{
                                display: none;
                            }
                        }
                    }
                    .avatar{
                        width: 2.5rem;
                        height: 2.5rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

            }
        }
    }
}
</style>