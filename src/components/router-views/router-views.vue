<template>
    <router-view v-slot="{ Component, route }">
        <transition name="topInLoging" >
            <keep-alive>
                <component :is="Component" :key="route.path"/>
            </keep-alive>
        </transition>
    </router-view>
</template>
