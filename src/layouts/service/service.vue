
<template>
    <div class="service-box pt-5">
        <div class="d-flex justify-content-between align-items-conter ">
            <div class="h1">Service</div>
            <button class="unis-btn  unis-btn-primary ">Payout funds</button>
        </div>

        <div class="car d-flex mt-4 justify-content-between ">
            <div class="col-9 pt-4 pl-4 pr-4 pb-2" style="border-right: 1px solid #E0DDDD;">
                <div class="row">
                    <div class="mr-2 pl-4">
                        <span class="f-24 f-b">$4,197.22</span>
                        <div class=" mb-1" style="width: 140px;">
                            <default-select-triangle
                                    color="#969696"
                                    name="reditCardCountry"
                                    v-model="service.business"
                                    :selectdata="['businessVerify','business','type','Status']"
                                    placeholder="Carrier name"
                                    key="name04"

                            />
                        </div>

                    </div>
                    <div class="col-7">
                        <span class="f-24 f-b" style="color:#969696">$4,197.22</span>
                        <div class=" mb-1"  >
                            <base-date-picker  v-model="service.month" @emitChoose="onSelectChartDate"/>
                        </div>
                    </div>
                </div>
                <chart-line :height="70" :chartLabels="chartLabels"   :datasets="cartData" :cartOptions="cartOptions" />
            </div>
            <div class="col-3 d-flex flex-column">
                <div class="row p-4  po-r" style="flex:1">
                    <div class="col-12">
                        <div class=" mb-2" style="width: 140px;">
                            <default-select-triangle
                                    color="#969696"
                                    name="reditCardCountry"
                                    v-model="service.business"
                                    :selectdata="['businessVerify','business','type','Status']"
                                    placeholder="Carrier name"
                                    key="name04"

                            />
                        </div>
                        <span class="f-24 f-b">$4,197.22</span>
                        <div class="mt-1"><span class="f-10 ft-grey500">Available to Payout</span></div>
                    </div>
                    <div class="icon-17 ft-grey700 car-edit"></div>
                </div>
                <div class="row p-4 br-t-1 br-grey300 po-r " style="flex:1">
                    <div class="col-12">
                        <div class=" mb-2 ft-grey500" style="width: 140px;">
                            Payouts
                        </div>
                        <span class="f-24 f-b">$5,197.51</span>
                        <div class="mt-1 "><span class="f-10 ft-grey500">Expected Today</span></div>
                    </div>
                    <div class="icon-17 ft-grey700 car-edit"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="col-6"><mixed-chart height="250" width="100%" /></div>
     <div class="col-6"><chart-line height="250" width="100%"/></div>
     <div class="col-12 row">
         <button class="unis-btn  unis-btn-primary " @click="setData">Primary</button>

     </div>-->

</template>

