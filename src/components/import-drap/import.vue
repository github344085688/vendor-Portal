<template>
    <div class="unis-uploading multi-file flex-wrap p-4 dropbox align-items-start " :style="{'height':height}" ref="select_frame" id="drop_area">
        <input type="file"
               style="width: 100%; display: block;opacity:0; filter:alpha(opacity=0);height: 100%;position: absolute;left: 0; top:0;z-index:1; cursor: pointer; "
               @change="addImg" ref="inputer" name="file"
               :accept="accept"
               v-if="!isLoading"
        >
        <div class="col-12 d-flex justify-content-center p-0 align-items-center ">
            <i class="icon-74 mr-2"></i>Drag and drop files here or
            <span class="ft-aLink ml-2 ft-accentblue900">browse</span>
        </div>
        <div style="position: absolute; bottom: 25px; z-index: 2; left: 0; right: 0; margin: auto; width: 180px;"
        >
            <button class="unis-btn compact unis-btn-primary " type="button" :disabled="isDisabled"
                    @click.stop.prevent="onUpload">Upload file
                <div class="loading" style="margin-left: 15px;" v-if="isLoading"></div>
            </button>
        </div>
    </div>

</template>
