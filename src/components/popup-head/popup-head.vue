<template>
    <Transition name="topIn" mode="out-in" appear>
        <section id="message" style="z-index: 99" >
            <transition-group  >
                <div  class="d-flex align-items-center justify-content-start br-ra4 br-red100  br-1 p-4 message"
                        v-for="item in msgOueue"
                        :key="item.uid"
                        :style="
            'color:' +
            item.config.color +
            ';background:' +
            item.config.background +
            ';border-color:' +
            item.config.borderColor +
            ';'
          "
                >

                    <div class="f-18">{{ item.config.content }}</div>
                    <div class="icon_box ml-auto" @click.prevent.stop = "onClose"  :style="
            'background:' +
            item.config.color
          "><i class="icon-30"></i></div>
                </div>
            </transition-group>
        </section>
    </transition>
</template>
