<template>
    <div class="d-flex win100 flex-column justify-content-center align-items-center po-r" style="height: 100%;" >
        <div class="shadows shadows3 pt-0 p-4 login-moudle po-a m-auto"  >
            <div class="d-flex media-t-4 mediaju-center-to-left">
                <svg width="162" height="64" viewBox="0 0 162 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.63713 45.2463C9.63713 51.1203 13.1456 54.9301 19.3074 54.9301C25.4637 54.9301 28.9445 51.1203 28.9445 45.2463V17.1172H38.5816V46.1686C38.5816 56.297 31.0849 63.1537 19.3074 63.1537C7.52987 63.1537 0 56.297 0 46.1686V17.1172H9.63713V45.2463Z" fill="#D61515"/>
                    <path d="M77.5938 33.8663C77.5938 27.9924 74.0853 24.1825 67.9235 24.1825C61.7672 24.1825 58.2864 27.9924 58.2864 33.8663V61.9955H48.6548V32.9441C48.6548 22.8156 56.1516 15.959 67.9291 15.959C79.701 15.959 87.2309 22.8156 87.2309 32.9441V61.9955H77.5938V33.8663Z" fill="#009D48"/>
                    <path d="M96.6309 61.996V17.1343H106.268V61.996H96.6309Z" fill="#009BD9"/>
                    <path d="M95.9355 6.28098C95.9355 3.24518 98.451 0.846191 101.463 0.846191C104.48 0.846191 106.957 3.24518 106.957 6.28098C106.957 9.28383 104.475 11.6828 101.463 11.6828C98.451 11.6828 95.9355 9.27834 95.9355 6.28098Z" fill="#009BD9"/>
                    <path d="M153.24 23.892C153.24 21.4546 155.176 19.5332 157.62 19.5332C160.069 19.5332 162 21.4546 162 23.892C162 26.3294 160.069 28.2563 157.62 28.2563C155.176 28.2618 153.24 26.3294 153.24 23.892ZM161.283 23.892C161.283 21.8498 159.677 20.2469 157.62 20.2469C155.573 20.2469 153.957 21.8553 153.957 23.892C153.957 25.9287 155.573 27.5481 157.62 27.5481C159.677 27.5481 161.283 25.9342 161.283 23.892ZM155.976 25.9781V21.6193H157.951C158.811 21.6193 159.446 22.1518 159.446 22.9588C159.446 23.6614 159.026 24.1171 158.409 24.2433L159.644 25.9781H158.811L157.636 24.3367H156.66V25.9781H155.976ZM156.66 23.7438H157.763C158.403 23.7438 158.701 23.4748 158.701 22.9752C158.701 22.5196 158.387 22.2396 157.785 22.2396H156.66V23.7438Z" fill="#808080"/>
                    <path d="M137.623 35.8478L132.073 34.695C126.678 33.5421 124.477 31.8897 124.477 29.0516C124.477 25.5272 127.666 23.2545 132.487 23.2545C137.132 23.2545 140.502 25.637 140.966 29.2931C140.999 29.5511 141.032 29.9683 141.032 30.3471H150.04C150.04 30.3471 150.04 29.8366 150.035 29.4194V29.3261C149.748 21.377 142.571 15.8599 132.421 15.8599C121.796 15.8599 114.807 21.4099 114.807 29.7927C114.807 36.6164 118.922 40.8269 127.312 42.5727L133.309 43.8518C138.958 45.065 141.252 46.7832 141.252 49.7422C141.252 53.2336 137.711 55.693 132.702 55.693C127.279 55.693 123.512 53.294 123.065 49.55C123.004 49.0944 123.01 48.5729 123.01 48.5729H113.726L113.742 49.2975L113.77 49.83C114.272 57.9877 121.344 63.137 132.189 63.137C143.74 63.137 150.856 57.5869 150.856 48.6113C150.862 41.6778 146.874 37.7802 137.623 35.8478Z" fill="#FFCB05"/>
                </svg>

            </div>
            <div class="d-flex media-t-4 mediaju-center-to-left f-b " style="font-size: 32px; ">
                Vendor Log in
            </div>
            <div class="d-flex media-t-4 mediaju-center-to-left f-b align-items-center ">
                Are you a new or existing customer?<button class="unis-btn unis-btn-text" @click.stop.prevent="onSignUp()">Sign up</button>
            </div>
            <div class="win100  po-r mb-5">
                <label>Email or Username</label>
                <input class="unis-input large-border" type="text"
                        v-model="formData.firstName"
                       :error="v$.formData.firstName.$silentErrors.length>0 ? true: null"
                />
                <div class="d-flex align-items-center mt-1" style="position: absolute;top:100% ;left: 0" v-if="v$.formData.firstName.$silentErrors.length>0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5H5.5V3.5H4.5V2.5ZM4.5 4.5H5.5V7.5H4.5V4.5ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9Z" fill="#E52628"/>
                    </svg>

                    <div class="d-flex" v-for="error of v$.formData.firstName.$silentErrors" :key="error.$uid">
                        <div class="error ml-2">{{error.$message}}</div>
                    </div>

                </div>

            </div>

            <div class="win100 po-r mb-5">
                <label>Password </label>
                <input class="unis-input large-border"
                       v-model="formData.passWord"
                       :type="isshowPassword?'password':'text'"
                       :error="v$.formData.passWord.$silentErrors.length>0 ? true: null"
                />
                <button class="unis-btn unis-btn-text po-a " style="right: 10px; top: 38px;"  @click.stop.prevent="showPassword()">Show</button>
                <div class="d-flex align-items-center mt-1" style="position: absolute;top:100% ;left: 0" v-if="v$.formData.passWord.$silentErrors.length>0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5H5.5V3.5H4.5V2.5ZM4.5 4.5H5.5V7.5H4.5V4.5ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9Z" fill="#E52628"/>
                    </svg>

                    <div class="d-flex" v-for="error of v$.formData.passWord.$silentErrors" :key="error.$uid">
                        <div class="error ml-2">{{error.$message}}</div>
                    </div>

                </div>

            </div>
            <div class="win100 mt-4">
                <button type="submit" class="unis-btn unis-btn-primary unis-lag justify-content-center" @click.stop.prevent="signIn">Log in
                    <div class="loading ml-4" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div></button>
            </div>




            <div class="win100 mt-4 d-flex justify-content-center align-items-center">
                <input type="checkbox" name="layout" id="KeepMeLoggedIin" class="unis-checkbox"  @click="remeberMe" v-model="formData.remeberMe">
                <label for="KeepMeLoggedIin" class="m-0 pl-3_5">Keep me logged in</label>
            </div>
            <div class="win100 mt-4 d-flex justify-content-center align-items-center mb-4">
                <button class="unis-btn unis-btn-link " @click.stop.prevent="showModal" > Forgot password?</button>
            </div>
            <div class="d-flex ft-grey700 justify-content-center win100" style="height: 10px">                or

            </div>
            <div class="d-flex flex-wrap win100 ">
                <div class="pr-sa-3 pl-0 col-md-6 d-flex justify-content-center f-b mt-4">
                    <button  class="unis-btn full   unis-btn-tertiary" @click="getRegisterLoging('google')">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.501 11.2331C21.501 10.3698 21.4296 9.73975 21.2748 9.08643H11.2153V12.983H17.12C17.001 13.9514 16.3582 15.4097 14.9296 16.3897L14.9096 16.5202L18.0902 18.9349L18.3106 18.9564C20.3343 17.1247 21.501 14.4297 21.501 11.2331Z" fill="#4285F4"/>
                            <path d="M11.2147 21.5001C14.1075 21.5001 16.5361 20.5667 18.3099 18.9567L14.929 16.39C14.0242 17.0083 12.8099 17.44 11.2147 17.44C8.38142 17.44 5.97669 15.6083 5.11947 13.0767L4.99382 13.0871L1.68656 15.5955L1.64331 15.7133C3.40519 19.1433 7.02423 21.5001 11.2147 21.5001Z" fill="#34A853"/>
                            <path d="M5.11997 13.0765C4.89379 12.4232 4.76289 11.7231 4.76289 10.9998C4.76289 10.2764 4.89379 9.57645 5.10807 8.92313L5.10208 8.78398L1.75337 6.23535L1.64381 6.28642C0.917647 7.70977 0.500977 9.30814 0.500977 10.9998C0.500977 12.6915 0.917647 14.2897 1.64381 15.7131L5.11997 13.0765Z" fill="#FBBC05"/>
                            <path d="M11.2148 4.55997C13.2267 4.55997 14.5838 5.41163 15.3576 6.12335L18.3814 3.23C16.5243 1.53834 14.1076 0.5 11.2148 0.5C7.02426 0.5 3.4052 2.85665 1.64331 6.28662L5.10759 8.92332C5.97672 6.39166 8.38146 4.55997 11.2148 4.55997Z" fill="#EB4335"/>
                        </svg>

                        <span class="ml-3"> Continue with Google</span>
                    </button>

                </div>
                <div class="pl-sa-3 pr-0 col-md-6 d-flex justify-content-center f-b mt-4">
                    <button  class="unis-btn full   unis-btn-tertiary " style="background: #4267B2" @click="getRegisterLoging('facebook')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white"/>
                        </svg>

                        <span class="ft-white   ml-3">Continue with Facebook</span>
                    </button>

                </div>

            </div>
        </div>



        <!--
                <div class="shadows shadows3 p-4 d-flex flex-column " v-if="isForgotPassword"
                     style="height: 750px; width: 45%">

                    <div class="d-flex flex-column pl-4 pr-4">
                        <label>Email address</label>
                        <input class="unis-input large-border" type="text" id="forgot_email_input" v-model='formData.forgotEmail' v-on:input="inputForgotPassword" :error="formData.sendForgotEmailstaus === -1" >
                        <pre v-if="formData.sendForgotEmailstaus === -1" class="help is-danger">{{formData.sendForgotEmailMsg}}</pre>
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4">
                        <div class="win100 mt-4 d-flex justify-content-center align-items-center mb-4">
                            <button class="unis-btn unis-btn-primary unis-lag " :disabled="!formData.forgotEmail" @click.stop.prevent="confirmModal" > Send reset email</button>
                        </div>
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4 mb-4">
                        <div class="win100 mt-4 d-flex justify-content-center align-items-center mb-4">
                            <button class="unis-btn unis-btn-link  " @click.stop.prevent="closeModal" > Return to login</button>
                        </div>
                    </div>
                </div>

                <div class="shadows shadows3 p-4 d-flex flex-column " v-if="isResetPassword"
                     style="height: 750px; width: 45%">
                    <div class="d-flex mt-4 justify-content-center">
                        <img src="../../assets/img/svgs/unis-logo-color.svg" style="height: 63px;"/>
                    </div>
                    <div class="d-flex mt-4 justify-content-center f-b " style="font-size: 32px; ">
                        Reset Password
                    </div>
                    <div class="d-flex mt-4 justify-content-center">
                        Enter your new password below:
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4 mt-4 po-r">
                        <label >New Password</label>
                        <div class="po-r">
                            <input type="password" class="unis-input "  v-model = "newPassword"
                                   v-validate="{ rules: { regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/} }"
                                   :name="'newPassword'"
                                   :error="errors.has('newPassword') ">
                            <div class="message">{{ errors.first('form-signup.newPassword1')=='Required' ? 'Required':'At least 8 characters,Uppercase letter,Lowercase letter, a number ' }}</div>
                        </div>
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4 po-r mt-4">
                        <label >Re-type New Password</label>
                        <div class="po-r">
                            <input type="password" class="unis-input " v-model = "retypePassword"
                                   v-validate="{'required': 'true', 'is': newPassword}"
                                   :name="'retypePassword'"
                                   :error="errors.has('retypePassword') ">
                            <div class="message">{{ errors.first('form-signup.newPassword2')=='Required' ? 'Required':'2 password do not match' }}</div>
                        </div>
                        <div v-if="validatePassword" class="message pl-4">Password is not match</div>
                    </div>

                    <div class="win100  p-4">
                        Password must include:<br>
                        - At least 8 characters<br>
                        - Uppercase letter<br>
                        - Lowercase letter<br>
                        - a number  <br>
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4 po-r">
                        <div class="win100 mt-4 d-flex justify-content-center align-items-center mb-4">
                            <button class="unis-btn unis-btn-primary unis-lag " :disabled=" !newPassword||newPassword!=retypePassword" @click.stop.prevent="confirmReset" > Reset Password</button>
                        </div>
                    </div>
                    <div class="d-flex flex-column pl-4 pr-4 mb-4">
                        <div class="win100 mt-4 d-flex justify-content-center align-items-center mb-4">
                            <button class="unis-btn unis-btn-link  " @click.stop.prevent="closeModal" > Return to login</button>
                        </div>
                    </div>
                </div>

                <div class=" p-4 login-moudle " v-if="isSignUp">
                    <form @submit.stop.prevent="onSubmitSignUp('signUp')" data-vv-scope="signUp">
                        <div class="d-flex media-t-4 mediaju-center-to-left">
                            <img src="../../assets/img/svgs/unis-logo-color.svg" class="media-logo"/>
                        </div>
                        <div class="d-flex media-t-4 justify-content-center f-b " style="font-size: 32px; ">
                            Create your free account
                        </div>
                        <div class="d-flex media-t-4 mediaju-center-to-left f-b align-items-center ">
                            Already have an account?<button class="unis-btn unis-btn-text " @click.stop.prevent="onSignIn()">Sign in</button>
                        </div>
                        <div class="win100 media-t-4 po-r mb-2 d-flex flex-wrap">
                            <div class="col-6 col-media p-0 mt-2">
                                <input type="radio" name="accountCode" id="accountCode" v-model= "signUp.isAccountCode " value="yes" class="unis-radio">
                                <label for="accountCode">
                                    <span class="pl-3_5">I have an account code</span>
                                </label>
                            </div>
                            <div class="col-6 col-media p-0 mt-2">
                                <input type="radio" name="accountCode" id="noAccountCode" v-model= "signUp.isAccountCode " value="no"  class="unis-radio" >
                                <label for="noAccountCode">
                                    <span class="pl-3_5">No account code</span>
                                </label>
                            </div>
                        </div>
                        <div class="win100 po-r mb-2 ">
                            <button class="unis-btn unis-btn-text " @click.stop.prevent="onWhatAccountCode()">What’s an account code?</button>
                        </div>
                        <div class="win100 mt-4 po-r mb-2">
                            <label>Email address*</label>
                            <input  class="unis-input large-border" type="email"
                                    :name="'email'"
                                    placeholder="name@company.com"
                                    v-validate="'required|email'"
                                    v-model='signUp.email'
                                    :error="errors.has('signUp.email') || signUpEmailErr "
                            >
                            <pre class="message" v-if="errors.has('signUp.email')" >{{ errors.first('signUp.email') }}</pre>
                            <pre class="message" v-if="!errors.has('signUp.email') && signUpEmailErr " >{{signUpEmailErr}}</pre>
                        </div>
                        <div class="win100 mt-4 po-r mb-2 " style="color:#777879">
                            Please provide your account code (provided by sales) and company’s website URL to confirm your account.
                        </div>
                        <div class="win100 mt-4 po-r mb-2" v-if="signUp.isAccountCode=='yes'">
                            <label>Account code*</label>
                            <input  class="unis-input large-border" type="text"
                                    :name="'code'"
                                    placeholder="code"
                                    v-validate="'required'"
                                    v-model='signUp.code'
                                    :error="errors.has('signUp.code')||accountCodeErr"
                            >
                            <pre class="message" v-if="errors.has('signUp.code')" >{{ errors.first('signUp.code') }}</pre>
                            <pre class="message" v-if="!errors.has('signUp.code') &&  accountCodeErr " >{{accountCodeErr}}</pre>
                        </div>
                        <div class="win100 mt-4 po-r mb-2">
                            <label>Company URL</label>
                            <input  class="unis-input large-border" type="text"
                                    :name="'companyUrl'"
                                    placeholder=""
                                    v-model='signUp.companyUrl'
                            >
                        </div>
                        <div class="win100 mt-4">
                            <button type="submit" class="unis-btn unis-btn-primary unis-lag justify-content-center">Sign up
                                <div class="loading ml-4" v-if="isSignUpLoding">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div></button>
                        </div>
                        <div class="win100 mt-4  mediaju-center-to-left">
                            By creating an account, you agree to Unis’s website <a @click.stop.prevent="onSignIn()"> Terms of Service</a>
                        </div>
                        <div class="d-flex ft-grey700 justify-content-center win100 mt-4" style="height: 10px">                OR

                        </div>
                        <div class="d-flex flex-wrap win100 ">
                            <div class="pr-sa-3 pl-0 col-md-6 d-flex justify-content-center f-b mt-4">
                                <button  class="unis-btn  unis-btn-tertiary" @click="getRegisterLoging('google')">
                                    <img class="mr-3" src="../../assets/img/goolge.svg"/>
                                    <span class=""> Continue with Google</span>
                                </button>

                            </div>
                            <div class="pl-sa-3 pr-0 col-md-6 d-flex justify-content-center f-b mt-4">
                                <button  class="unis-btn  unis-btn-tertiary " style="background: #4267B2" @click="getRegisterLoging('facebook')">
                                    <img class="mr-3" src="../../assets/img/facebook.svg"/>
                                    <span class="ft-white">Continue with Facebook</span>
                                </button>

                            </div>

                        </div>
                        <div  style="height: 20px"></div>
                    </form>
                </div>


                <div class=" p-4 login-moudle " v-if="isVerifyEmail">
                    <div class="d-flex mt-4   mediaju-center-to-left">
                        <img src="../../assets/img/svgs/unis-logo-color.svg" class="media-logo"/>
                    </div>
                    <div class="d-flex mt-4 justify-content-center f-b " style="font-size: 32px; ">
                        Please verify your email
                    </div>
                    <div class="d-flex mt-4 mediaju-center-to-left f-b align-items-center flex-wrap">
                        <div class="col-12 p-0">We sent a confirmation email to: {{signUp.email}}</div>
                        <div class="col-12 mt-1 p-0">Check your email and click on the confirmation link to continue.</div>
                        <div class="col-12 mt-3 d-flex  mediaju-center-to-left align-items-center p-0">Didn’t receive an email? <span class="login-up-link" @click.stop.prevent="onResendEmail()">Resend email</span>

                        </div>
                    </div>
                </div>
                <div style="position: fixed; left: 0; right: 0; top:0;bottom: 0; background: rgba(0,0,0,0.3);" v-if="isProductModal" >
                    <div class="unis-modal-select d-flex  flex-column align-items-start product-modal productModal-animation m-t-20" :class="{'m-t-20':isProductModal}" >
                        <div class="d-flex p-4 justify-content-between wid100">
                            <h2>Account code</h2>
                            <i class="f-24 icon-30 cursor-p" @click.stop.prevent="closeReset()"></i>
                        </div>
                        <div class="d-flex wid-100 mb-4">
                            <div class="col pl-4 align-self-stretch content">
                                <div>When registering to become a Unis customer, you are given a code by your sales representative to create your Unis account. Some benefits you get as a Unis customer include:
                                    <div class="mt-3">1. Discounted lanes</div>
                                    <div class="mt-3 mb-3">2. benefit 2</div>
                                    <span style="font-size: 18px;color: #0288D1">Don’t have an account code? </span>You can still ship via the Unis portal as a non-Unis customer! Simply select “No account code” and create your account. Note that your rates will be based on a generic tariff until you later choose to become a Unis customer.</div>
                                <div>
                                    <p></p>
                                    <div>Contact &nbsp;&nbsp;&nbsp;&nbsp; <a href="Mailto:sales@unisco.com" style="font-size: 18px;color: #0288D1">sales@unisco.com</a>&nbsp;&nbsp;&nbsp;&nbsp; for information on becoming a </div>
                                    <div>customer.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->

    </div>
</template>
