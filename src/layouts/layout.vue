<template>
    <div class="d-flex h-100" >
        <side-nav @togoaside="togoaside" :sideSpread="sideSpread"/>
        <div class="col p-0">
            <div class="d-flex flex-column h-100" >
                <top-bar/>
                <div class="component-view">
                    <router-view v-slot="{ Component, route }">
                        <keep-alive>
                            <component :is="Component" :ref="treeRef" :key="route.path" :init="changeView(route)"/>
                        </keep-alive>
                    </router-view>

                </div>
            </div>
        </div>

    </div>
    <!--    <section class="top-bar" :class="[isSideSpread?'':'side-spread']">-->
    <!--      -->
    <!--    </section>-->

    <!--    <section class="main-section roll-background px-5" :class="[isSideSpread?'':'side-spread']">-->
    <!--            -->
    <!--    </section>-->
</template>
