<template>

    <Transition name="fade" mode="out-in">
        <transition-group name="fade" tag="div" v-if="isShowPageName" style="height: 100%; position: absolute;left: 20px; right: 20px; ">
            <div class="d-flex win100 flex-column justify-content-center align-items-center po-r"
                 style="height: 100%; ">
                <router-view v-slot="{ Component, route }">
                    <transition name="topInLoging">
                        <component :is="Component" :key="route.path"/>
                    </transition>
                </router-view>
            </div>
        </transition-group>
    </Transition>
</template>
