<template>
    <div class="d-flex flex-column" style="height: 90%;">
        <div class="d-flex align-items-center justify-content-end  mb-4">
            <h2 class="mr-auto">Import & Export</h2>
            <button class="unis-btn  unis-btn-primary  mr-2 ">
                <span class="mr-2">Import</span>
            </button>
            <button class="unis-btn  unis-btn-outline  " @click="onShowMoudal(isShowMoudal)">Export</button>
        </div>
        <div class="import-export ">
            <import-drap/>
           <!-- <div class="unis-uploading multi-file flex-wrap p-4 " style="height: 150px;">
                <input type="file">
                <div class="col-12 d-flex justify-content-center p-0 align-items-center ">
                    <i class="icon-74 mr-2"></i>Drag and drop files here or
                    <span class="ft-aLink ml-2 ft-accentblue900">browse</span>
                </div>
                <div class="col-12 d-flex justify-content-center p-0 ">
                    <button class="unis-btn compact unis-btn-primary " @click="routerInvoices()">Upload file</button>
                </div>
            </div>-->
            <div class="f-18 f-b mt-3">Import History</div>
            <div class="import-history-box roll-background">
                <div class="d-flex flex-wrap justify-content-between">
                    <div class="import-history d-flex align-items-center justify-content-between" v-for="i in 31">
                        <div class="" style="width: 40%">
                            <div class="ft-grey700"> File name</div>
                            <p>2020-08.xls</p>
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
