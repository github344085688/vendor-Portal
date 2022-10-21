<template>
    <div class="d-flex flex-column" style="height: 90%;">
        <div class="d-flex align-items-center justify-content-end  mb-4">
            <h2 class="mr-auto">Import & Export</h2>
            <div class="unis-adj">
                <button class="unis-btn unis-btn-secondary active">Import</button>
                <button class="unis-btn unis-btn-secondary  " @click="onExport()">Export</button>
            </div>
        </div>
        <div class="import-export ">


            <div class="f-18 f-b mt-3">Export Files</div>
            <div class="import-history-box roll-background" style="top: 100px;">
                <div class="d-flex flex-wrap justify-content-between">
                    <div class="import-history d-flex align-items-center justify-content-between" v-for="i in 1">
                        <div class="" style="width: 40%">
                            <div class="ft-grey700"> File name</div>
                            <p>Invoice_Template.xls</p>
                        </div>
                        <div class="" style="width: 40%">
                            <div class="ft-grey700">Uploaded date</div>
                            <p>2020-05-05</p>
                        </div>
                        <div class="d-flex justify-content-end align-items-center pr-3" style="width: 20%">
                            <i class="icon-37 f-24 cursor-p mr-3"></i>
                            <i class="icon-45 f-24 cursor-p ft-red700"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
