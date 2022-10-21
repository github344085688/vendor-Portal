<template>
    <div class="sig-in-box"  >
        <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 32px; ">
            Create your Vendor account
        </div>
        <div class="d-flex media-t-3 mediaju-center-to-left  align-items-center ">
            Already have an account?
            <button class="unis-btn unis-btn-text" @click.stop.prevent="onSignInOrUp('Sign in')">Sign in</button>
        </div>
        <Form @submit="onSubmit" class="d-flex flex-column" :validation-schema="schema"
              v-slot="{ meta, errors }"
              @invalid-submit="onInvalidSubmit">
            <div class="win100  po-r mb-4">
                <label class="pb-0">Email address*</label>

                <Field name="firstName" type="text" :class = "[errors.firstName?'':'br-grey900']" class="unis-input br-b-1  bg-no" v-model="formData.firstName" placeholder="name@company.com"
                       :error="errors.firstName"/>
                <div class="d-flex align-items-center mt-1"
                     style="position: absolute;top:100% ;left: 0; height: 15px">
                    <span v-if="errors.firstName">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5H5.5V3.5H4.5V2.5ZM4.5 4.5H5.5V7.5H4.5V4.5ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9Z"
                              fill="#E52628"/>
                    </svg>
                    </span>
                    <span class="ml-2 ft-error">{{errors.firstName}}</span>


                </div>

            </div>

            <div class="win100 po-r mb-4 mt-2">
                <h3> What’s your role related to UNIS?</h3>
                <p class="mt-4"><input type="checkbox" name="layout" id="TMS" v-model="roleRelated.tms" class="unis-checkbox">
                    <label for="TMS">TMS</label>
                </p>
                <div    :class="[roleRelated.tms ? 'tram-ov':'tram-hi']">
                    <label class=" p-0 m-0">Account code</label>
                    <input type="text"  class="unis-input br-b-1 br-grey900 bg-no mt-0">
                </div>
                <p class="mt-2"><input type="checkbox" name="layout" id="SERVICE" v-model="roleRelated.service" class="unis-checkbox">
                    <label for="SERVICE">SERVICE</label>
                </p>
                <div    :class="[roleRelated.service ? 'tram-ov':'tram-hi']">
                    <label class=" p-0 m-0">Account code</label>
                    <input type="text" class="unis-input br-b-1 mt-0 br-grey900 bg-no">
                </div>
                <p class="mt-2"><input  type="checkbox" name="layout" id="BROKERAGE" v-model="roleRelated.brokerage" class="unis-checkbox">
                    <label for="BROKERAGE">BROKERAGE</label>
                </p>
                <div    :class="[roleRelated.brokerage ? 'tram-ov':'tram-hi']">
                    <label class=" p-0 m-0">Account code</label>
                    <input type="text" class="unis-input br-b-1 mt-0 br-grey900 bg-no">
                </div>
                </div>


            <div class="win100 ">
                <button type="submit"
                        class="unis-btn unis-btn-primary unis-lag justify-content-center align-items-center"
                        v-butloding="isLoding">Sign up
                </button>
            </div>
        </Form>

        <div class="win100 mt-4 d-flex justify-content-center align-items-center ">
            By creating an account, you agree to <button class="unis-btn unis-btn-link " style="color: #0288D1" @click.stop.prevent="checkPageName('forgotPassword')">
            Unis’s website
            </button>
        </div>


    </div>
</template>
