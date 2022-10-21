<template>
    <div class=" transition-5 br-ra4 pt-0 p-4 login-moudle po-a m-auto parent" :class="[isShowShadows?'shadows ':'shadows-no']" >
        <div class="d-flex media-t-4 mediaju-center-to-left">
            <img src="@/assets/img/portal/logon.svg" alt="">
        </div>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" :init="routeChange(route.name)" >
            <keep-alive>
                <component :is="Component" :key="route.path"/>
            </keep-alive>
        </transition>
    </router-view>
    </div>
</template>
