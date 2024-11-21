<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { TeamMember } from '@/types/team.type';

const { users, maxAvatarCount } = defineProps<{
    users: TeamMember[];
    maxAvatarCount?: number; // Optional maximum number of avatars to show
}>();

const containerRef = ref<HTMLElement | null>(null);
const maxAvatar = maxAvatarCount || 7;
const visibleAvatars = ref<TeamMember[]>([]);
const remainingCount = ref(0);

const calculateVisibleAvatars = () => 
{
    if (!containerRef.value) return;

    const avatarWidth = 24; // Assume each avatar is 24px in width
    const containerWidth = containerRef.value.offsetWidth; // Supposed to get the parent width
    // const maxVisible = Math.min(Math.floor(containerWidth / avatarWidth), maxAvatar);
    const maxVisible = Math.min(Math.floor(containerWidth / avatarWidth), maxAvatar);
    // console.log(containerWidth)

    visibleAvatars.value = users.slice(0, maxVisible);
    remainingCount.value = users.length - maxVisible;
};

// Recalculate when the component is mounted or when the user list changes
onMounted(calculateVisibleAvatars);
watch(() => users, calculateVisibleAvatars);

</script>

<template>
    <div ref="containerRef" class="avatar-container">
        <div v-for="member in visibleAvatars" :key="member.id" class="image-container">
            <img :src="member.avatarUrl" :alt="member.name" v-if="member.avatarUrl"/>
            <CustomAvatar :userName="member.name" :width="24" :height="24" :bgColor="member.bg" v-else/>
        </div>
        <span v-if="remainingCount > 0" class="extra-count">
            +{{ remainingCount }}
        </span>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.avatar-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem; // 4px
    .image-container {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        // margin-left: 10px;
        img{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
        }
    }
    
    .extra-count {
        width: 24px;
        height: 24px;
        margin-left: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 10px;
        color: $testGray;
        background-color: $testGray5;
    }
}

</style>