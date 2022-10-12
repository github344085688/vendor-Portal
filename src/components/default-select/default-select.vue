<template>
    <button class="unis-select unis-dropdown " :name="name" ref="defaultSelect">
        <input type="text"
               :disabled="disabled"
               v-on:focus="handleFocus"
               v-model="transitionValue"
               :placeholder="placeholder"
               :error="error"
               readonly="readonly"
        >
        <i class="icon-30 f-20 mr-3 cursor-p" v-if="allowClear"></i>
        <ul>
            <li v-for="(item, index) in priSelectdata" :key="index"  @click.stop.prevent="onItemSelect(item,$event)">
                {{filtersName(item)}}
            </li>
        </ul>
    </button>
</template>
