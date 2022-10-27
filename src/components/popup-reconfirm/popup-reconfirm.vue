<template>
    <Transition name="topIn" mode="out-in" >
        <section id="popup-reconfirm" v-if="options.show" style="z-index: 99">
            <transition-group name="topIn" tag="div" >
            <div class="unis-modal-primary d-flex flex-column" key="lorem" >
                <div class=" d-flex pl-4 pr-4  pt-4 justify-content-between wid100">
                    <h2>{{options.title}}</h2>
                    <i class="f-24 icon-30 cursor-p" @click.stop.prevent="onClose"></i>
                </div>
                <div class="content-box  pl-4 pb-3 pr-4 pb-4" v-html="options.content"> </div>
                <div class=" mt-auto wid100 pr-4 pl-4 pb-2">
                    <div class="d-flex justify-content-end">
                        <button class="unis-btn unis-btn-secondary mr-3" @click.stop.prevent="onCancel">{{options.cancel? options.cancel:'Go Back'}}</button>
                        <button class="unis-btn unis-btn-primary "  @click.stop.prevent="onDetermine">{{options.confirm? options.confirm:'Ok'}}</button>
                    </div>
                </div>
            </div>
        </transition-group>
        </section>
    </transition>
</template>
