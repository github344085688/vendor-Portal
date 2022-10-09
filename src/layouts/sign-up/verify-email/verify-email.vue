<template>
    <div style="display: flex; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%">
        <div class="d-flex" style="height: 100%" v-if="moudleState=='operation'">

            <div class="col-8 media-pl-80 col-media pr-0">
                <div class="d-flex media-t-4 align-items-center">
                    <img src="@/assets/img/portal/logon.svg" alt=""/>
                    <span class="media-d-no"> <span style="color: #777879" @click="linkBusiness()" class="cursor-p"
                                                    :class="{'login-up-link':moudleName =='welcomeToUnis'}">About you</span>&nbsp;&nbsp;<i
                            class="icon-8"></i>&nbsp;&nbsp; <span style="color: #777879"
                                                                  :class="{'login-up-link':(moudleName =='tellUsAboutYourBusiness')}">About your business</span></span>
                </div>




                <div class="wid100 d-flex media-t-4 flex-wrap" style="position: relative">
                    <div class="col-8 col-media media-pl-80 pr-0" v-if="moudleName =='welcomeToUnis'">
                        <Form @submit="onSubmit" class="d-flex flex-column" :validation-schema="schema"
                              v-slot="{ meta, errors }" @invalid-submit="onInvalidSubmit">
                            <div class="media-t-4 f-b " style="font-size: 32px; ">
                                Welcome to Unis!
                            </div>
                            <div class="win100 mt-4 po-r mb-2">
                                <label>First Name <span class="ft-red900">*</span></label>
                                <Field name="firstName" type="text" class="unis-input br-b-1"
                                       v-model='verifyEmail.firstname'
                                       :error="errors.firstName"/>

                                <pre class="message"
                                     v-if="errors.firstName">{{errors.firstName}}
                                </pre>
                            </div>
                            <div class="win100 mt-4 po-r mb-2">
                                <label>Last Name <span class="ft-red900">*</span></label>
                                <Field name="lastname" type="text" class="unis-input br-b-1"
                                       v-model='verifyEmail.lastname' :error="errors.lastname"/>

                                <pre class="message"
                                     v-if="errors.lastname">{{errors.lastname}}
                                </pre>

                            </div>

                            <div class="win100 mt-4 po-r mb-2">
                                <label>Email address<span class="ft-red900">*</span></label>
                                <Field name="email" type="text" class="unis-input br-b-1" v-model='verifyEmail.email' placeholder="name@company.com"
                                       disabled style="background: none; border-color: #6a6a6a; border-style: dashed" :error="errors.email"/>


                                <pre class="message"
                                     v-if="errors.email">{{errors.email}}
                                </pre>


                            </div>


                            <div class="win100 po-r mb-4 mt-2">
                                <label>Password<span class="ft-red900">*</span></label>
                                <Field name="password" :type="isshowPassword?'password':'text'"
                                       v-model="verifyEmail.password"
                                       class="unis-input br-b-1" :error="errors.password"/>

                                <button type="button" class="unis-btn unis-btn-text po-a fw-4 "
                                        style="right: 10px; top: 32px"
                                        @click.stop.prevent="showPassword()">Show
                                </button>
                                <div class="d-flex align-items-center mt-1"
                                     style="position: absolute;top:100% ;left: 0; height: 15px">
                                    <span class="ft-error">{{errors.password}}</span>


                                </div>
                                <div class="po-a media-d-no"
                                     style="right: -220px; top: 30px; width: 200px; height: 150px;">
                                    <div class="win100 mt-1 po-r mb-2">
                                        Password must include
                                    </div>
                                    <div class="win100 mt-1 po-r mb-1  ">
                                        <span class="po-a" style="font-size: 40px; top: -32px;">.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                        At least 8 characters
                                    </div>
                                    <div class="win100 mt-1 po-r mb-1">
                                        <span class="po-a" style="font-size: 40px; top: -32px;">.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                        Contain a number
                                    </div>
                                    <div class="win100 mt-1 po-r mb-1">
                                        <span class="po-a" style="font-size: 40px; top: -32px;">.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                        Uppercase letter
                                    </div>
                                    <div class="win100 mt-1 po-r mb-1">
                                        <span class="po-a" style="font-size: 40px; top: -32px;">.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                        Lowercase letter
                                    </div>
                                </div>

                            </div>

                            <div class="win100 mt-4 po-r mb-2">
                                <label>Confirm password<span class="ft-red900">*</span></label>
                                <Field name="password_confirmation" type="text" class="unis-input br-b-1"
                                       v-model='verifyEmail.password_confirmation' :error="errors.email"/>

                                <pre class="message"
                                     v-if="errors.password_confirmation">{{errors.password_confirmation}}
                                </pre>
                                <button type="button" class="unis-btn unis-btn-text po-a fw-4 "
                                        style="right: 10px; top: 32px"
                                        @click.stop.prevent="showPassword()">Show
                                </button>


                            </div>

                            <div class="win100 mt-4 po-r mb-2">
                                <button type="submit" class="unis-btn  compact unis-btn-primary " >Continue
                                </button>
                            </div>
                        </form>
                    </div>




                    <div class="col-8 col-media media-pl-80 pr-0" v-if="moudleName =='tellUsAboutYourBusiness'">
                        <div class="media-t-4 f-b " style="font-size: 32px; ">
                            Tell us about your business
                        </div>
                        <Form @submit="onTellUsAboutSubmit" class="d-flex flex-column" :validation-schema="schema" v-slot="{ meta, errors }" @invalid-submit="onInvalidSubmit">

                            <div class="win100 mt-4 po-r mb-2">
                                <label>Company name <span class="ft-red900">*</span></label>
                                <Field name="companyName" type="text" class="unis-input br-b-1"
                                       v-model='businessVerify.companyName'
                                       :error="errors.companyName"/>

                                <pre class="message"
                                     v-if="errors.firstName">{{errors.firstName}}
                                </pre>
                            </div>
                            <div class="win100 mt-4 po-r mb-2">
                                <label>Business type</label>
                                <default-select
                                        :name="'reditCardCountry'"
                                        v-model="businessVerify.business_type"
                                        :selectdata="['businessVerify','business','type','Status']"
                                        :placeholder="'Status'"
                                        key="name04"
                                        class="wid100 br-b-1"
                                ></default-select>

                            </div>
                        </Form>

                    </div>
                </div>


            </div>
            <div class="col-4 p-0 media-d-no" style="height: 100%; text-align: right">
                <img src="@/assets/img/portal/track.svg" style="height: 100%; width: auto"/>
            </div>
        </div>
        <div class="d-flex flex-wrap" v-if="moudleState=='complete'">
            <div class="col-12 col-media p-0">
                <div class="d-flex media-t-4 align-items-center media-pl-80">
                    <img src="@/assets/img/portal/logon.svg" alt=""/>
                </div>
            </div>
            <div class="col-12 p-0 ">
                <div class="d-flex justify-content-center">
                    <img src="@/assets/img/portal/ches.svg" class="media-logo"
                         style="width: auto; height: 100%;padding:0;margin: 0 "/>
                </div>
                <div class="d-flex justify-content-center media-t-4">
                    <div class=" f-b " style="font-size: 32px; ">
                        Welcome to Unis!
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <div class="">
                        Thank you for choosing UNIS. Your account is now set up.
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button type="button" @click="returnToSignIn()" class="unis-btn  compact unis-btn-primary ">Return
                        to sign in
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
