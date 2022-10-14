<template>
    <section class="top-bar" :class="[isSideSpread?'':'side-spread']">
        <top-bar></top-bar>
    </section>
    <side-nav @togoaside="togoaside" :sideSpread="sideSpread"></side-nav>
    <section class="main-section roll-background" :class="[isSideSpread?'':'side-spread']">
            <router-view v-slot="{ Component, route }">
                    <keep-alive>
                        <component :is="Component" :key="route.path"/>
                    </keep-alive>
            </router-view>
    </section>
</template>
