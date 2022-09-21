<template>
    <div class="unis-topBar">
        <div class="search-box br-defaultHover"
             :class="{'search-box-in':isInSearchBox}">
            <input type="text"
                   v-on:focus="handleFocus($event)"
                   v-on:blur="handleBlur" >
            <div class="placeholder"
                 :class="{'placeholder-in':isInSearchBox}">Search here
            </div>
            <i class="icon-7 " :class="{'ft-themePressed':isInSearchBox}"></i>
        </div>
        <div class="bell-box" @click.stop.prevent="onShowNotif"
             :class="{'active':isShowNotif}">
            <button class="unis-icon-btn br-white h-w-40">
                <i class="newicon-95 f-20" ></i>
            </button>
            <div class="hint-box">1</div>
            <div v-show="isShowNotif" class="notifications">

                <div class="title-box">Notifications</div>
                <div class="messages_connect">
                    <div class="messages-box">
                        <div class="message-lable">
                            <span>Messages (3)</span>
                            <span class="vew-all">View All</span>
                        </div>
                        <div class="detal_box" v-for="item in 3">
                            <div class="message-detals">
                                <div class="img-box"></div>
                                <div class="detal-message">
                                    <div class="title">Nick Mahncke
                                    </div>
                                    <div class="name">Shipment Name
                                    </div>
                                    <div class="note">@User, good
                                        afternoon and thank you for your
                                        request.
                                    </div>
                                </div>
                                <div class="detal-stage"></div>
                            </div>
                            <div class="d-flex justify-content-end align-items-center">
                                <div class="unis-button">Show</div>
                            </div>
                        </div>
                    </div>
                    <div class="messages-box">
                        <div class="message-lable">
                            <span>Tasks (1)</span>
                            <span class="vew-all">View All</span>
                        </div>
                        <div class="detal_box" v-for="item in 1">
                            <div class="message-detals">
                                <div class="img-box"></div>
                                <div class="detal-message">
                                    <div class="title">Nick Mahncke
                                    </div>
                                    <div class="name">Shipment Name
                                    </div>
                                    <div class="note">@User, good
                                        afternoon and thank you for your
                                        request.
                                    </div>
                                </div>
                                <div class="detal-stage"></div>
                            </div>
                            <div class="d-flex justify-content-end align-items-center">
                                <div class="unis-button mr-4">Mark as
                                    read
                                </div>
                                <div class="unis-button">Show</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="user_box " @click.stop.prevent="onShowUser"
             :class="{'active':isShowUser}">
            <button class="unis-icon-btn br-white h-w-40">
                <div class="w-h-32">  <div class="user">U</div></div>

            </button>

            <div v-show="isShowUser" class="user-connect">
                <div class="user-detal">
                    <div class="title">User</div>
                    <div class="eml">name@unisco.com</div>
                    <div class="manage">User settings</div>
                </div>
                <div class="user-detal">
                    <div class="title">UNIS</div>
                    <div class="manage">Manage account</div>
                </div>
                <div class="logout">Logout</div>
            </div>

        </div>
        <div v-show="isShowNotif || isShowUser" style="position: fixed; top: 0; right: 0; left: 0;
   bottom: 0; z-index:0" @click.stop.prevent="closeWin"></div>
    </div>
</template>
