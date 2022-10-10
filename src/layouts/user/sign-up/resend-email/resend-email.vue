<template>
    <div class=" pt-0 p-4 login-moudle po-a m-auto mt-5 mb-5 pt-4 pb-4"  >
        <div class="d-flex media-t-4 mediaju-center-to-left mt-5 mb-3 ">
            <img src="@/assets/img/portal/logon.svg" alt="">
        </div>
        <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 28px; ">
            You’re almost there!
        </div>
          <div  class="d-flex media-t-3 mediaju-center-to-left mt-4">Thank you for signing up for Unis! Click the button below to<br> verify your company email, and we’ll help you get started.</div>


        <div class="d-flex media-t-3 mediaju-center-to-left mt-5 align-items-center ">
            <button class="unis-btn  unis-btn-primary " @click.stop.prevent="verifyEmailAddress">Verify email address</button>
        </div>
    </div>

</template>
