<template>
    <section class="top-bar" :class="[isSideSpread?'':'side-spread']">
        <top-bar></top-bar>
    </section>
    <side-nav @togoaside="togoaside" :sideSpread="sideSpread"></side-nav>
    <section class="main-section" :class="[isSideSpread?'':'side-spread']">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </section>
</template>
