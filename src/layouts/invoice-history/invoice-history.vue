<template>
    <div class="shadow-1 bg-light p-4 mt-4 border-r-3">
        <div class="row ">
            <div class="col-4">
                <label class=" p-0 m-0">Account code</label>
                <input type="text" class="unis-input ">
            </div>
            <div class="col-4">   <div v-html="html" class="markdown-body"></div></div>
            <div class="col-4"><highlightjs language="HTML" :autodetect="false" :code="htmlCode"></highlightjs></div>
            <div class="col-4"><highlightjs language="TypeScript" :autodetect="false" :code="jsCode"></highlightjs></div>
        </div>
    </div>
</template>
