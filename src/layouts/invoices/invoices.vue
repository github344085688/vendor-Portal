<template>
    <div class="d-flex flex-column" style="padding:25px 75px; height: 100%">
        <div class="br-b-1 br-unfinished mb-5 d-flex">
            <button class="unis-btn pl-4 pr-4  unis-btn-focus-boder mr-5 " :class="{'active':isShowMoudle=='Invoices'}" @click="routerInvoices()">Invoices</button>
            <button class="unis-btn pl-4 pr-4  unis-btn-focus-boder" :class="{'active':isShowMoudle=='Import & Export'}" @click="routerImportExport()">Import & Export</button>
        </div>
        <div class="flex-grow-1 po-r">
            <router-view v-slot="{ Component, route }">
                <transition name="fade" class="tra-inset" :init="routeChange(route.name)">
                    <keep-alive>
                        <component :is="Component" :key="route.path"/>
                    </keep-alive>
                </transition>
            </router-view>
        </div>

    </div>
</template>
