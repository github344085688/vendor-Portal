<template>
    <div class="">
        <strong style="  text-decoration: none;" v-if="status=='Paid'">
        <span style="padding: 5px 10px; font-weight: 300; background: #DAD5F8; color:#472ddd; border-radius: 4px ">
        <slot></slot></span>
        </strong>
        <strong style="text-decoration: none;"
                v-else-if="status=='Schedule pick up'">
        <span style="padding: 5px 10px; font-weight: 300; background: #ccebd6; color:#009934; border-radius: 4px ">
            <slot></slot>
        </span>

        </strong>
        <strong style="text-decoration: none;"
                v-else-if="status=='Out for Delivery'">
            <span style="padding: 5px 10px; font-weight: 300; background: #def9f3 ; color:#06a59a; border-radius: 4px "> <slot></slot></span>
        </strong>
        <strong style="text-decoration: none;"
                v-else-if="status=='Shipment delayed'">
            <span style="padding: 5px 10px; font-weight: 300; background: #ffefcd; color:#d17933; border-radius: 4px "> <slot></slot></span>
        </strong>
        <strong style=" text-decoration: none;"
                v-else-if="status=='In-Process'">
            <span style="padding: 5px 10px; font-weight: 300; background: #ffdaf6; color:#b2158b; border-radius: 4px "><slot></slot></span>
        </strong>
        <strong style=" text-decoration: none;"
                v-else-if="status=='Processing'">
            <span style="padding: 5px 10px; font-weight: 300;; border-radius: 4px  "><slot></slot></span>
        </strong>
        <strong style="color: #d0f0fd;text-decoration: none;"
                v-else-if="status=='Delivered'">
            <span style="padding: 5px 10px; font-weight: 300; background: #d0f0fd; color:#0b76b7; border-radius: 4px "> <slot></slot></span>
        </strong>
        <strong style="color: #0288D1;text-decoration: none;"
                v-else-if="status=='Invoived'">
            <span style="padding: 5px 10px; font-weight: 300; background: #d0f0fd; color:#0b76b7; border-radius: 4px "><slot></slot></span>
        </strong>
        <strong v-else>
            <span style="padding: 5px 10px; font-weight: 300; background: #d0f0fd; color:#0b76b7; border-radius: 4px "><slot></slot></span>
        </strong>

    </div>

</template>
