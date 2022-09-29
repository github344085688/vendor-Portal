<template>
    <section id="primary-modal" v-if="isShowMoudal">
        <div class="modal-bg">
            <Transition name="topIn" mode="out-in">
                <transition-group name="topIn" tag="div" v-if="isShowGroup">
                    <div key="primaryModal" class="unis-modal-select d-flex  flex-column align-items-start"
                         style="margin: auto" :style="{'width':width?width+'px':'764px'}">
                        <div class="d-flex p-4 justify-content-between wid100">
                            <h2>{{title}}</h2>
                            <i class="f-24 icon-30 cursor-p" @click.stop.prevent="onClose" v-if="isShowClose"></i>
                        </div>
                        <div class="d-flex wid-100" :style="{'height':height?height+'px':'auto'}">
                            <slot/>
                        </div>
                        <div class=" mt-auto wid100  p-4">
                            <div class="d-flex justify-content-end">
                                <button class="unis-btn unis-btn-secondary mr-3" v-if="cancel" @click.stop.prevent="onCancel">{{cancel}}</button>
                                <button class="unis-btn unis-btn-primary " v-if="upload" @click.stop.prevent="onUpload">{{upload}}</button>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </transition>
        </div>
    </section>

</template>
