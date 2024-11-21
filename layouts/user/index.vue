<script setup lang="ts">

</script>


<template>
    <MainHeader/>
    <main class="main">
        <SideBar/>
        <section>
            <slot/>
        </section>
    </main>
</template>


<style lang="scss" scoped>
main{
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    section{
        width: 100%;
        max-width: calc(100% - 220px);
        height: 100%;
    }
}

@media screen and (max-width: 1024) {
    main{
        height: calc(100vh - 60px);
        section{
            max-width: calc(100% - 250px);
        }
    }
}

@media screen and (max-width: 1024px) {
    main{
        section{
            max-width: calc(100% - 100px);
        }
    }
}
</style>