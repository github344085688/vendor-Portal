<template>
    <div class="season_base_date_picker">
        <button type="button" class="unis-select  br-0 button unis-select-icon-47" v-on:focus="handleFocus" :disabled="disabled">
           <div style="margin-top: -4px;"> {{datePickerData}}</div>

        </button>
        <date-picker
                class="date-picker-box"
                type="date"
                range
                v-model:open="open"
                @change="handleChange"
                :placeholder="time3"
        ></date-picker>
    </div>
</template>
<style  lang="scss" src='./base-date-picker.scss'></style>

