<template>
    <Transition name="top" mode="out-in" appear>
        <section id="message" v-if="msgOueue.length > 0">
            <transition-group name="top">
                <div
                        class="d-flex align-items-center br-ra4 br-red100  br-1 p-4 message"
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
                    <span class=" ml-5" :class="item.config.icon"></span>
                    <div class="f-18">{{ item.config.content }}</div>
                </div>
            </transition-group>
        </section>
    </transition>
</template>

<style lang="scss"  src="./popup-head.scss"/>
