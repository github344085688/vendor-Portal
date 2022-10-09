<template>
    <div class="unis-pager wid-100 d-flex flex-column ">
        <div class="paginate mb-2 d-flex flex-column ">
            <ul class="paginate-sm d-flex justify-content-end align-items-center">
                <li class="p-2">{{totalCount}} Results  </li>
                <li class="pr-2">Show:</li>
                <li class="pr-3">
                    <default-select
                            class="h-24 pt-1 pb-1"
                            style="min-height: 2rem; min-width: 70px; width: 70px"
                            :name="'pageSize'"
                            v-model="pageSize"
                            :selectdata="pageSizeOptions"
                            @emitChoose="pageSizePage"
                    ></default-select>
                </li>
                <li  class="prev">
                    <button class="unis-btn default" :disabled="pager.activedPage == 1 || isNext" @click="loadPrevPage">
                        <i class="icon-15"></i>
                    </button>
                </li>
                <li v-for="page in pages" :key="page.number" :class="{'prev':page.active}" >
                    <button :disabled="isNext"  @click="loadPage(page.number)" class="suspend  unis-btn" :class="{'present':page.active}">{{page.number}}</button>
                </li>
                <li   class="next">
                    <button  @click="loadNextPage" class="unis-btn default " :disabled="pager.activedPage == pager.totalPage || isNext">
                        <i class="icon-8"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>