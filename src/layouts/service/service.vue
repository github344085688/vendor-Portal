<template>
    <div class="row mt-5">
        <div class="col-6"><mixed-chart height="250" width="100%" :datasets="cartData"/></div>
        <div class="col-6"><chart-line height="250" width="100%"/></div>
        <div class="col-12 row">
            <button class="unis-btn  unis-btn-primary " @click="setData">Primary</button>

        </div>
    </div>

</template>
