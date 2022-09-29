<template>
    <div style="padding:25px 75px;">
        <div class="br-b-1 br-unfinished mb-5 d-flex">
            <button class="unis-btn pl-4 pr-4  unis-btn-focus-boder active mr-5">Invoices</button>
            <button class="unis-btn pl-4 pr-4  unis-btn-focus-boder">Import & Export</button>
        </div>
        <div class="d-flex align-items-center justify-content-end  mb-4">
            <h2 class="mr-auto">Invoices</h2>
            <button class="unis-btn  unis-btn-outline mr-2 ">
                <i class="icon-37 f-18 mr-2"></i>
                <span class="mr-2">Export</span>
            </button>
            <button class="unis-btn  unis-btn-primary " @click ="onShowMoudal(isShowMoudal)">Edit</button>
        </div>


        <table class="unis-data-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>User First</th>
                <th>User Last</th>
                <th>Email</th>
                <th>Platform access</th>
                <th>Create date</th>
                <th>Create by</th>
                <th>Last modify date</th>
                <th>Last modify by</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="index in 15" :key="index">
                <td>{{index}}</td>
                <td>[UNIS] Your shipment PRO#400004...</td>
                <td>8582295099</td>
                <td class="f-13 f-b ft-succeedHint">Success</td>
                <!---->
                <td>12/20/20 9:52 AM</td>
                <td>12/20/20 9:52 AM</td>
                <td>12/20/20 9:52 AM</td>
                <td>12/20/20 9:52 AM</td>
                <td>12/20/20 9:52 AM</td>
                <td>Twilio.text</td>
            </tr>

            </tbody>
        </table>
        <primary-modal :show="isShowMoudal"
                       @cancel="isShowMoudal = false"
                       :width = 600
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
