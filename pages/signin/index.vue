<script lang="ts" setup>

const languageOptions = [
    {
        value: "en-US",
        label: "English (USA)"
    },
    {
        value: "en-UK",
        label: "English (UK)"
    },
    {
        value: "de-DEU",
        label: "German (DEU)"
    }
]

</script>

<template>
    <div class="relative w-screen h-screen flex flex-col items-center justify-between">
        <!--********************** Header **********************-->
        <header class="w-full flex items-center justify-between">
            <!-- Logo Container -->
            <div>
                <Logo/>
            </div>
            <!-- Language Selector -->
            <div>
                <CustomSelect :options="languageOptions" name="language"/>
            </div>
        </header>
        <!--********************** Body **********************-->
        <div class="w-full h-full flex items-center justify-between">
            <div class="lg:w-1/2 w-full h-full flex flex-col items-center justify-center gap-6">
                <!-- Heading -->
                <div class="form-heading xs:w-[70%] w-[85%] flex flex-col items-start justify-center 2xl:gap-3 gap-2">
                    <span class="form-title">
                        Let's Sign You In
                    </span>
                    <span class="form-subtitle">
                        Don't have an account? <NuxtLink to="/signup" class="text-test-blue font-bold">Sign Up</NuxtLink>
                    </span>
                </div>
                <!-- SignUp Form -->
                <div class="xs:w-[70%] w-[85%] flex flex-col items-center justify-center gap-5">
                    <InputField type="text" label="Username"/>
                    <InputField type="password" label="Password"/>
                    <div class="w-full flex items-center justify-between gap-5">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <input 
                                type="checkbox" 
                                class="appearance-none checked:appearance-auto w-3 h-3 rounded-[2px] bg-[#deebff] checked:bg-white cursor-pointer"
                            />
                        </div>
                        <div class="w-full h-6 flex items-center justify-between text-xs text-gray-400">
                            <span class="text-xs text-test-black font-normal flex items-center justify-start">Remember Me</span>
                            <span class="text-xs text-test-blue font-bold flex items-center justify-end">Forgot Password</span>
                        </div>
                    </div>
                </div>
                <!-- SignUp Buttons -->
                <div class="relative xs:w-[70%] w-[85%] flex flex-col items-center justify-center gap-8">
                    <SubmitButton label="Login" to="/user/dashboard"/>
                    
                    <div class="relative w-full h-[1px] bg-slate-300">
                        <span class="or absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-2 flex items-center justify-center bg-white text-xs text-[#8f92a1]">OR</span>
                    </div>

                    <div class="w-full flex items-center justify-between gap-6">
                        <SocialAuthentication :extended="true" icon="logos:google-icon" text="Continue with Google"/>
                        <SocialAuthentication icon="mdi:facebook-box"/>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 w-0 h-full lg:flex lg:items-center lg:justify-end hidden">
                <div class="absolute right-0 top-0 -z-50 lg:w-[560px] w-0 h-screen bg-[#f2f6fc]">

                </div>
                <div class="w-full h-full">
                    <img 
                        src="/images/bg.png" 
                        alt="authentication"
                        class="w-full"
                    >
                </div>
            </div>  
        </div>
    </div>
</template>


<style lang="scss">
    div{
        header{
            height: 80px;
            padding: 0 64px;
        }
        div{
            div{
                &.form-heading{
                    margin-bottom: 0.5rem;
                }
                span{
                    max-height: 30px;
                    &.form-title{
                        font-size: 22px;
                        font-weight: bold;
                        line-height: 25px;
                        letter-spacing: -0.4px;
                    }
                    &.form-subtitle{
                        font-size: 14px;
                        line-height: 18px;
                        letter-spacing: -0.25px;
                        font-weight: 500;
                        color: #8f92a1;
                    }
                }
            }
            div{
                div{
                    span{
                        &.or{
                            font-size: 10px;
                            letter-spacing: 17px;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1440px) {
        div{
            header{
                height: 100px;
                padding: 0 80px;
            }
            div{
                div{
                    &.form-heading{
                        margin-bottom: 1.5rem;
                    }
                    span{
                        max-height: 40px;
                        &.form-title{
                            font-size: 30px;
                            font-weight: bold;
                            line-height: 36px;
                            letter-spacing: -0.4px;
                        }
                        &.form-subtitle{
                            font-size: 16px;
                            line-height: 21px;
                            letter-spacing: 0.25px;
                            font-weight: 500;
                            color: #8f92a1;
                        }
                    }
                }
            }
            div{
                div{
                    span{
                        &.or{
                            font-size: 12px;
                            letter-spacing: 20px;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
        }  
    }
</style>