<script lang='ts' setup>
import { ref, computed } from 'vue';

const { label, type } = defineProps<{
    label: string,
    type: string,
    showEmail?: boolean
}>();

const inputValue = ref(""); 
const isEmail = computed(() => {
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailPattern.test(inputValue.value);
});

</script>

<template>
    <div class="relative lg:max-w-[588px] w-full h-[46px] flex items-center justify-center">
        <input 
            :type="type" 
            class="w-full h-[90%] px-4 rounded-xl bg-[#f8f8f8] text-sm outline-none focus:border focus:border-test-blue focus:border-solid "
            :class="{ 'is-invalid': isEmail, 'isEmailInput': showEmail }"
            v-model="inputValue"
        >

        <span 
            v-if="type==='text' && showEmail"
            class="absolute right-4 top-1/2 bottom-0 flex items-center justify-center -translate-y-1/2 text-sm"
        >
            @nicolaslabs.co
        </span>
        
        <label 
        class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[0.875rem] text-gray-400 transition-all duration-500 ease-in-out"
        :class="inputValue ? 'shrink':''"
        >
            {{ label }}
        </label>
    </div>
</template>

<style lang="scss" scoped>
    @import "@/assets/sass/_variables.scss";
    @mixin shrinkLabel{
        padding: 0 4px;
        top: 0%;
        border-radius: 2px;
        background-color: white;
        color: #0052cc;
        font-size: 12px;
        // transition: all 500ms ease-in-out;
    }
    div{
        input{
            position: relative;
            &[type='email']{
                &.isEmailInput{
                    position: relative;
                    &::after{
                        content: "@nicolaslabs.co";
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                    }
                }
                &:invalid{
                    border: 1px solid $testError;
                    &~label{
                        color: $testError;
                    }
                }
            }
            &[type='text'].is-invalid{
                border: 1px solid $testError;
                &~label{
                    color: $testError;
                }
            }
            &:focus~label{
                @include shrinkLabel();    
            }
        }
        label{
            &.shrink{
                @include shrinkLabel();
            }
        }
    }
</style>