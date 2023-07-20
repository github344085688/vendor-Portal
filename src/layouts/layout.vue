<template>
    <section class="top-bar" :class="[isSideSpread?'':'side-spread']">
        <top-bar/>
    </section>
    <side-nav @togoaside="togoaside" :sideSpread="sideSpread"  />
    <section class="main-section roll-background px-5" :class="[isSideSpread?'':'side-spread']">
            <router-view v-slot="{ Component, route }"  >
                    <keep-alive>
                        <component :is="Component" :ref="treeRef" :key="route.path" :init="changeView(route)" />
                    </keep-alive>
            </router-view>
    </section>
</template>
