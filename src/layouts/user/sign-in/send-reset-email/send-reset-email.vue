<template>
    <div class="sig-in-box" >
        <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 28px; ">
            Forgot password?
        </div>

        <div class="d-flex media-t-5 mt-4 f-24 f-b">
            Check your email
        </div>

        <div class="d-flex mt-4 ">
            We just sent you an email containing a link that will allow you to reset your password. Please check your spam folder if the email doesn’t appear within a few minutes.
        </div>


        <div class="win100 mt-4 mb-5">
            <button type="submit"
                    class="unis-btn unis-btn-primary unis-lag justify-content-center align-items-center" @click.stop.prevent="returnToLogin"
                    v-butloding="isLoding">Return to login
            </button>
        </div>
        </div>

</template>
