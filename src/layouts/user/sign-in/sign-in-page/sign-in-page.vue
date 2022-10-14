<template>
            <div  class="sig-in-box">
                <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 32px; ">
                    Vendor Log in
                </div>
                <div class="d-flex media-t-3 mediaju-center-to-left  align-items-center ">
                    Are you a new or existing customer?
                    <button class="unis-btn unis-btn-text" @click.stop.prevent="onSignInOrUp('Sign up')">Sign up</button>
                </div>
                <Form @submit="onSubmit" class="d-flex flex-column" :validation-schema="schema"
                      v-slot="{ meta, errors }"
                      @invalid-submit="onInvalidSubmit">
                    <div class="win100  po-r mb-4">
                        <label class="pb-0">Email or Username</label>
                        <Field name="firstName" type="text" class="unis-input" v-model="formData.firstName"
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
                        <label class="pb-0 ">Password </label>
                        <Field name="password" :type="isshowPassword?'password':'text'" v-model="formData.password"
                               class="unis-input" :error="errors.password"/>

                        <button class="unis-btn unis-btn-text po-a fw-4 " style="right: 10px; top: 32px"
                                @click.stop.prevent="showPassword()">Show
                        </button>
                        <div class="d-flex align-items-center mt-1"
                             style="position: absolute;top:100% ;left: 0; height: 15px">
                    <span v-if="errors.password">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5H5.5V3.5H4.5V2.5ZM4.5 4.5H5.5V7.5H4.5V4.5ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9Z"
                              fill="#E52628"/>
                    </svg>
                    </span>
                            <span class="ml-2 ft-error">{{errors.password}}</span>


                        </div>

                    </div>
                    <div class="win100 mt-5 ">
                        <button type="submit"
                                class="unis-btn unis-btn-primary unis-lag justify-content-center align-items-center"
                                v-butloding="isLoding">Log in
                        </button>
                    </div>
                </Form>
                <div class="win100 mt-3 d-flex justify-content-center align-items-center">
                    <input type="checkbox" name="layout" id="KeepMeLoggedIin" class="unis-checkbox"
                           @click="remeberMe"
                           v-model="formData.remeberMe">
                    <label for="KeepMeLoggedIin" class="m-0 pl-3_5">Keep me logged in</label>
                </div>
                <div class="win100 mt-4 d-flex justify-content-center align-items-center ">
                    <button class="unis-btn unis-btn-link " @click.stop.prevent="checkPageName('forgotPassword')">
                        Forgot password?
                    </button>
                </div>

                <div class="d-flex flex-wrap win100 align-items-center mb-5">
                    <div class="pr-sa-3 pl-0 col  d-flex justify-content-center f-b mt-4">
                        <button class="unis-btn full   unis-btn-tertiary" @click="getRegisterLoging('google')">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.501 11.2331C21.501 10.3698 21.4296 9.73975 21.2748 9.08643H11.2153V12.983H17.12C17.001 13.9514 16.3582 15.4097 14.9296 16.3897L14.9096 16.5202L18.0902 18.9349L18.3106 18.9564C20.3343 17.1247 21.501 14.4297 21.501 11.2331Z"
                                      fill="#4285F4"/>
                                <path d="M11.2147 21.5001C14.1075 21.5001 16.5361 20.5667 18.3099 18.9567L14.929 16.39C14.0242 17.0083 12.8099 17.44 11.2147 17.44C8.38142 17.44 5.97669 15.6083 5.11947 13.0767L4.99382 13.0871L1.68656 15.5955L1.64331 15.7133C3.40519 19.1433 7.02423 21.5001 11.2147 21.5001Z"
                                      fill="#34A853"/>
                                <path d="M5.11997 13.0765C4.89379 12.4232 4.76289 11.7231 4.76289 10.9998C4.76289 10.2764 4.89379 9.57645 5.10807 8.92313L5.10208 8.78398L1.75337 6.23535L1.64381 6.28642C0.917647 7.70977 0.500977 9.30814 0.500977 10.9998C0.500977 12.6915 0.917647 14.2897 1.64381 15.7131L5.11997 13.0765Z"
                                      fill="#FBBC05"/>
                                <path d="M11.2148 4.55997C13.2267 4.55997 14.5838 5.41163 15.3576 6.12335L18.3814 3.23C16.5243 1.53834 14.1076 0.5 11.2148 0.5C7.02426 0.5 3.4052 2.85665 1.64331 6.28662L5.10759 8.92332C5.97672 6.39166 8.38146 4.55997 11.2148 4.55997Z"
                                      fill="#EB4335"/>
                            </svg>

                            <span class="ml-3"> Continue with Google</span>
                        </button>

                    </div>
                    <div class="or">
                        or
                    </div>
                    <div class="pl-sa-3 pr-0 col  d-flex justify-content-center f-b mt-4">
                        <button class="unis-btn full   unis-btn-tertiary " style="background: #4267B2"
                                @click="getRegisterLoging('facebook')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                      fill="white"/>
                            </svg>

                            <span class="ft-white   ml-3">Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
</template>
