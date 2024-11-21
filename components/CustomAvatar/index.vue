<script setup lang="ts">

const { userName, bgColor, width, height } = defineProps<{
  userName: string;
  bgColor?: string;
  width?: number;
  height?: number;
}>();

// Extract initials
const initials = computed(() => {
  return userName
    .split(' ')
    .map(word => word[0]?.toUpperCase())
    .join('');
});

// Generate a random color if no bgColor is given
const bg: string = bgColor ?? `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

</script>
<template>
    <div class="avatar" :style="{ backgroundColor: bg, '--width': width ? `${width}px` : '30px', '--height': height ? `${height}px` : '30px' }">
        {{ initials }}
    </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: var(--width);
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; // Prevents shrinking
  font-size: 12px;
  letter-spacing: -0.2px;
  font-weight: 700;
  color: white;
  border-radius: 50%;
  text-transform: uppercase;
  pointer-events: none;
}

@media screen and (min-width: 1440px){
  .avatar{
    width: calc(var(--width) + 2px);
    height: calc(var(--height) + 2px);
    font-size: 14px;
  }
}

@media screen and (max-width: 1024px){
  .avatar{
    width: calc(var(--width) - 6px);
    height: calc(var(--height) - 6px);
    font-size: 10px;
  }
}
</style>