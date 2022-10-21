<template>
            <div class="sig-in-box" >
                <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 28px; ">
                    Forgot password?
                </div>

                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }"
                      @invalid-submit="onInvalidSubmit">
                    <div class="win100  po-r mb-4">
                        <label class="pb-0">Email address</label>
                        <Field name="email" type="text" class="unis-input" v-model="formData.email"
                               :error="errors.email"/>
                        <div class="d-flex align-items-center mt-1"
                             style="position: absolute;top:100% ;left: 0; height: 15px">
                    <span v-if="errors.email">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5H5.5V3.5H4.5V2.5ZM4.5 4.5H5.5V7.5H4.5V4.5ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9Z"
                              fill="#E52628"/>
                    </svg>
                    </span>
                            <span class="ml-2 ft-error">{{errors.email}}</span>


                        </div>

                    </div>


                    <div class="win100 mt-5 ">
                        <button type="submit"
                                class="unis-btn unis-btn-primary unis-lag justify-content-center align-items-center" @click.stop.prevent="sendResetEmail"
                                v-butloding="isLoding">Send reset email
                        </button>
                    </div>
                </Form>
                <div class="d-flex media-t-5 mediaju-center-to-left  align-items-center mt-5 ">
                    Are you a new or existing customer?
                    <button class="unis-btn unis-btn-text" @click.stop.prevent="onSignInOrUp('Sign up')">Sign up</button>
                </div>

                <div class="d-flex media-t-5 mediaju-center-to-left mt-2 mb-5  align-items-center ">
                    <button class="unis-btn unis-btn-link " @click.stop.prevent="returnToLogin">Return to login</button>
                </div>
            </div>
</template>
