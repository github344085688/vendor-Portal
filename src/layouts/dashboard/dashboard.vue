<template>
    <div class="p-4 wid-100">
        <div class="d-flex align-items-start br-ra4 br-succeed br-1 p-4 bg-succeed">
            <div v-html="markedHtml" class="markdown-body"></div>
        </div>

        <div class="d-grid xs:grid-1 sm:grid-2 md:grid-3 lg:grid-4 grid-6 mt-4">
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
            <div class=" br-succeed br-1" style="width: 100%;height: 100px; background: #ffffff"></div>
        </div>
        <div class="w-100 mt-5">
            <highlightjs language="HTML" :autodetect="false" :code="htmlGrildCode"></highlightjs>
        </div>

    </div>
</template>
