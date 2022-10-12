<template>
    <div class="wid100">
       <div class="d-flex align-items-center justify-content-end  mb-4">
            <h2 class="mr-auto">Invoices</h2>
            <button class="unis-btn  unis-btn-outline mr-2 ">
                <i class="icon-37 f-18 mr-2"></i>
                <span class="mr-2">Export</span>
            </button>
            <button class="unis-btn  unis-btn-primary " @click="onShowMoudal(isShowMoudal)">Edit</button>
        </div>

        <div class="d-flex align-items-center  mb-4">
            <div class="col-3 pl-0">
                <div class="unis-multiselect">
                    <i class="icon-7 f-20 f-b"></i>
                    <input type="text" placeholder="Search here">
                </div>
            </div>
            <div class="col-3 pl-0">
                <div class="d-flex wid100">
                    <button class="unis-icon-btn h-w-40 br-grey400"
                            style="border-right: 0; border-radius: 2px 0 0 2px ">
                        <i class="icon-78"></i>
                    </button>
                    <default-select
                            name="reditCardCountry"
                            v-model="searchParams.business"
                            :selectdata="['businessVerify','business','type','Status']"
                            placeholder="Carrier name"
                            key="name04"
                            class="wid100 justify-content-start"
                            style=" border-radius:0 2px 2px 0"
                    ></default-select>
                </div>

            </div>
            <div class="col-3 pl-0">
                <default-select
                        name="reditCardCountry"
                        v-model="searchParams.business_type"
                        :selectdata="['businessVerify','business','type','Status']"
                        placeholder="Select carrier"
                        key="name04"
                        class="wid100 justify-content-start"
                ></default-select>
            </div>
            <div class="col-2 pl-0 ml-auto">
                <div class="unis-btn justify-content-end">
                    <span class="icon-60 f-24"></span>
                    <span class=" ml-3 mr-2 ">Customize fields</span>
                </div>

            </div>

        </div>


        <table class="unis-data-table">
            <thead>
            <tr>
                <th rowspan="2" class="pl-2 pr-2 br-r-c">Status</th>
                <th rowspan="2" class="pl-2 pr-2 br-r-c">PRO #</th>
                <th rowspan="2" class="pl-2 pr-2 br-r-c">Invoice #</th>
                <th colspan="5" class="pl-2 pr-2 br-r-c" style="text-align: center">Carrier Invoiced</th>
                <th rowspan="2" class="pl-2 pr-2 br-r-c">Ship Date</th>
                <th rowspan="2" class="pl-2 pr-2 br-r-c t-center">POD</th>
                <th rowspan="2" class="pl-2 pr-2">Dispute</th>
            </tr>
            <tr>
                <th class="pl-2 pr-2 br-t-n" style="border-left: none;">Base</th>
                <th class="pl-2 pr-2 br-t-n br-r-c">Acc.</th>
                <th class="pl-2 pr-2 br-t-n br-r-c">FSC</th>
                <th class="pl-2 pr-2 br-t-n br-r-c">Discount</th>
                <th class="pl-2 pr-2 br-t-n">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="index in 5" :key="index">
                <td class="pl-2 pr-2 br-r-c">
                    <status-colors bg="#D6FCE7" color="#268C55">Paid</status-colors>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">121.30</td>
                <td class="pl-2 pr-2 br-r-c">34.00</td>
                <td class="pl-2 pr-2 br-r-c">30.63</td>
                <td class="pl-2 pr-2 br-r-c">0.00%</td>
                <td class="pl-2 pr-2 br-r-c">130.00</td>
                <td class="pl-2 pr-2 br-r-c">08/18/22</td>
                <td class="pl-2 pr-2 br-r-c">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="icon-17 f-20 ft-oceanblue700 mr-2"/>
                        |
                        <i class="icon-43 f-20 ft-oceanblue700 ml-2"/>
                    </div>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn compact unis-btn-text ">Click Here</button>
                </td>
            </tr>
            <tr v-for="index in 3" :key="index">
                <td class="pl-2 pr-2 br-r-c" width="130px">
                    <status-colors bg="#FFEFCD" color="#CE7129">Waiting for Inv.</status-colors>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">121.30</td>
                <td class="pl-2 pr-2 br-r-c">34.00</td>
                <td class="pl-2 pr-2 br-r-c">30.63</td>
                <td class="pl-2 pr-2 br-r-c">0.00%</td>
                <td class="pl-2 pr-2 br-r-c">130.00</td>
                <td class="pl-2 pr-2 br-r-c">08/18/22</td>
                <td class="pl-2 pr-2 br-r-c">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="icon-17 f-20 ft-oceanblue700 mr-2"/>
                        |
                        <i class="icon-43 f-20 ft-oceanblue700 ml-2"/>
                    </div>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn compact unis-btn-text ">Click Here</button>
                </td>
            </tr>
            <tr v-for="index in 3" :key="index">
                <td class="pl-2 pr-2 br-r-c" width="130px">
                    <status-colors bg="#FFEFCD" color="#CE7129">Pending</status-colors>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">121.30</td>
                <td class="pl-2 pr-2 br-r-c">&#45;&#45;</td>
                <td class="pl-2 pr-2 br-r-c">30.63</td>
                <td class="pl-2 pr-2 br-r-c">0.00%</td>
                <td class="pl-2 pr-2 br-r-c">130.00</td>
                <td class="pl-2 pr-2 br-r-c">08/18/22</td>
                <td class="pl-2 pr-2 br-r-c">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="icon-17 f-20 ft-oceanblue700 mr-2"/>
                        |
                        <i class="icon-43 f-20 ft-oceanblue700 ml-2"/>
                    </div>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button disabled class="unis-btn compact unis-btn-text ">N/A</button>
                </td>
            </tr>
            <tr v-for="index in 1" :key="index">
                <td class="pl-2 pr-2 br-r-c" width="130px">
                    <status-colors bg="#D6FCE7" color="#268C55">Approved</status-colors>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn unis-btn-link compact ">14211864</button>
                </td>
                <td class="pl-2 pr-2 br-r-c">121.30</td>
                <td class="pl-2 pr-2 br-r-c">&#45;&#45;</td>
                <td class="pl-2 pr-2 br-r-c">30.63</td>
                <td class="pl-2 pr-2 br-r-c">0.00%</td>
                <td class="pl-2 pr-2 br-r-c">130.00</td>
                <td class="pl-2 pr-2 br-r-c">08/18/22</td>
                <td class="pl-2 pr-2 br-r-c">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="icon-17 f-20 ft-oceanblue700 mr-2"/>
                        |
                        <i class="icon-43 f-20 ft-oceanblue700 ml-2"/>
                    </div>
                </td>
                <td class="pl-2 pr-2 br-r-c">
                    <button class="unis-btn compact unis-btn-text ">Click Here</button>
                </td>
            </tr>
            </tbody>
        </table>

        <pager :totalCount="paging.totalSize" :currentPage="paging.currentPage"
               :customizePageSize="paging.pageSize" @reloadContent="getList"></pager>

        <primary-modal :show="isShowMoudal"
                       @cancel="isShowMoudal = false"
                       :width=600
                       :upload="'Send to Unis'"
                       @emitUpload=''
                       :title="'Upload POD'"
        >
            <div class="col pl-4  pr-4  align-self-stretch content-box">
                <h4>Payment method</h4>
                <div class="mt-4 pr-4">
                    <label>Choose payment method</label>
                    <div class="unis-select ft-grey500">Mastercard ending in 1244</div>
                </div>
                <div class="mt-4 pr-4">
                    <input type="checkbox" name="layout" id="1name2" class="unis-checkbox">
                    <label for="1name2" class="m-0 pl-3_5">Apply UNIS credit $200.00 available</label>
                </div>
            </div>
            <div class="align-self-stretch partition" style="width: 1px;"></div>
            <div class="col  align-self-stretch pl-4 pr-4 content-box">
                <h4>(2) Invoices outstanding</h4>
                <div class="mt-4 d-flex justify-content-between">
                    <span>Invoice #2773225-1</span>
                    <span>$100.00</span>
                </div>
                <div class="mt-4 d-flex justify-content-between">
                    <span>Invoice #2773225-1</span>
                    <span>$100.00</span>
                </div>
            </div>


        </primary-modal>
    </div>
</template>
