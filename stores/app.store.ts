import { defineStore } from "pinia";

export type tSideTab = 'dashboard' | 'messages' | 'projects' | 'activity' | 'schedule';

export const useAppStore = defineStore("app", () => {
    const currentSideTab = ref<tSideTab>("dashboard");

    
    function setActiveSideTab(tab: tSideTab){
        currentSideTab.value = tab;
    }

    return {
        currentSideTab,
        setActiveSideTab
    }
})