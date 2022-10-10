<template>
    <div class=" pt-0 p-4 login-moudle po-a m-auto mt-5 mb-5 pt-4 pb-4"  >
        <div class="d-flex media-t-4 mediaju-center-to-left mt-5 mb-3 ">
            <img src="@/assets/img/portal/logon.svg" alt="">
        </div>
        <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 28px; ">
            Please verify your email
        </div>
          <div  class="d-flex media-t-3 mediaju-center-to-left mt-4"> We sent a confirmation email to: samplename@unisco.com</div>
        <div  class="d-flex media-t-3 mediaju-center-to-left mt-2">  Check your email and click on the confirmation link to continue.</div>
          <p> </p>

        <div class="d-flex media-t-3 mediaju-center-to-left  align-items-center ">
            Didn’t receive an email?
            <button class="unis-btn unis-btn-text" @click.stop.prevent="resendEmail"> Resend email</button>
        </div>
    </div>

</template>
