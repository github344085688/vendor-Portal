<template>
    <Transition name="topInLoging" mode="out-in">
        <transition-group tag="div" v-if="isShowPageName" class="transition-5" style="height: 100%; ">
            <div key="sign-in" class="d-flex  justify-content-center align-items-center" style="height: 100%; ">
                <router-views/>
            </div>
        </transition-group>
    </Transition>
</template>
