<template>
<!--    <div>
        <h2>watch 基本使用方法</h2>
        <h2>{{ counter }}</h2>
        <button @click="add">+</button>
        <button @click="minus">-</button>
        {{name}}&#45;&#45;{{age}}&#45;&#45;{{id}}
    </div>-->
    <div class="d-flex win100 flex-column justify-content-center align-items-center po-r" style="height: 100%;" >
        <div class="shadows shadows3 p-4 login-moudle po-a m-auto" style="height: 90%; width: 45%"  >
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

            <Form ref="formCom" class="form" :validation-schema="schema" v-slot="{errors}" autocomplete="off">
                <template v-if="!isMsgLogin">
                    <div class="win100 mt-4 po-r mb-2">
                        <label>Email or Username</label>
                        <Field  class="unis-input active" :class="{error:errors.account}" v-model="form.account" name="account" type="text" placeholder="请输入用户名"
                                :error="errors.account"/>
                        <pre class="message">{{errors.account}}</pre>
                    </div>

                    <div class="win100 mt-4 po-r mb-4">
                        <label>Password</label>
                        <Field label="sss" class="unis-input" :type="isshowPassword?'password':'text'"  :class="{errors:passWord}" v-model="form.passWord" name="account" type="text" placeholder="请输入用户名"
                                :error="errors.passWord"/>
                        <pre v-if="errors.passWord" class="message">{{ errors.passWord }}</pre>

                        <button class="unis-btn unis-btn-text po-a " style="right: 10px; top: 25px;"  @click.stop.prevent="showPassword()">Show</button>

                    </div>



                    <div class="form-item">
                        <div class="input">

                            <Field :class="{error:errors.password}" v-model="form.password" name="password" type="password" placeholder="请输入密码" />
                        </div>
                        <div class="error" v-if="errors.password">
                            <i class="iconfont icon-warning" />
                            {{errors.password}}
                        </div>
                    </div>
                </template>
                <!--  <template v-else>
                      <div class="form-item">
                          <div class="input">
                              <i class="iconfont icon-user"></i>
                              <Field :class="{error:errors.mobile}" v-model="form.mobile" name="mobile" type="text" placeholder="请输入手机号" />
                          </div>
                          <div class="error" v-if="errors.mobile">
                              <i class="iconfont icon-warning" />
                              {{errors.mobile}}
                          </div>
                      </div>
                      <div class="form-item">
                          <div class="input">
                              <i class="iconfont icon-code"></i>
                              <Field :class="{error:errors.code}" v-model="form.code" name="code" type="text" placeholder="请输入验证码" />
                              <span @click="send()" class="code">
                    {{time===0?'发送验证码':`${time}秒后发送`}}
                  </span>
                          </div>
                          <div class="error" v-if="errors.code">
                              <i class="iconfont icon-warning" />
                              {{errors.code}}
                          </div>
                      </div>
                  </template>-->
                <a @click="login()" href="javascript:;" class="btn">登录</a>
            </Form>
            <!-- <div class="win100 mt-4 po-r mb-2">
                 <label>Email or Username</label>
                 <input  class="unis-input large-border" type="text"
                         @keyup.enter.stop.prevent = "signIn"
                         v-on:input="inputChangeEvent"
                         :name="'userName'"
                         v-validate="'required'"
                         v-model='formData.userName'
                         :error="errors.has('userName') || formData.loginFail"
                 >
                 <pre class="message" v-if="errors.has('userName')" >{{ errors.first('userName') }}</pre>
                 <pre  class="message" v-if="formData.loginFail" >{{formData.loginFailMsg}}</pre>
             </div>
             <div class="win100 mt-4 po-r mb-4">
                 <label>Password</label>
                 <input class="unis-input large-border"  @keyup.enter.stop.prevent = "signIn" :type="isshowPassword?'password':'text'" id="password_input" v-on:input="inputChangeEvent" name="passWord" v-model='formData.passWord' v-validate="'required'" :error="errors.has('passWord')||formData.loginFail " >
                 <pre v-if="errors.has('passWord')" class="message">{{ errors.first('passWord') }}</pre>
                 <pre v-if="formData.loginFail" class="message">{{formData.loginFailMsg}}</pre>
                 <button class="unis-btn unis-btn-text po-a " style="right: 10px; top: 25px;"  @click.stop.prevent="showPassword()">Show</button>

             </div>
             <div class="win100 mt-4">
                 <button type="submit" class="unis-btn unis-btn-primary unis-lag justify-content-center" @click.stop.prevent="signIn">Log in
                     <div class="loading ml-4" v-if="isLoding">
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
             <div class="br-t-1 br-grey200 wid-100 mt-4 mb-4"></div>
             <div class="win100 mt-4 d-flex align-items-center">
                 Track a Order
             </div>
             <div class="win100 mt-2 d-flex align-items-center flex-wrap">
                 <div class="col p-0">
                     <div class="unis-multiselect " style="height: 40px">
      <span>
           <i class="icon-7 f-24"></i>
      </span>
                         <input type="text" placeholder="Search by Reference # or Tracking #" class="large-border" v-model="searchByReference">
                     </div>
                 </div>
                 <div class=" col-2 p-0 media-l-4 col-media"><button class="unis-btn unis-btn-primary unis-lag" @click.stop.prevent="trackShipment()" style="height: 40px" :disabled="!searchByReference">Track</button>
                 </div>
             </div>-->
        </div>



    </div>
</template>
