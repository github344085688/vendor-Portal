<template>
    <div class="side-navigation" style="background:green" :class="{'show-side-bar':isShowSidebar}">
        <div class="unis-navigation">
            <div class="aside-unfold" :class="{'aside-fold':isFold}">
                <div class="aside-controller">
                    <b class="right display-xl" @click.stop.prevent="togoaside(isFold)">
                        <i class="right-arrow1"></i>
                        <i class="right-arrow2"></i>
                    </b>
                </div>
                <div class="parent-level-big" :class="{'parent-level-small':isLevelSmall ||isFold}">
                    <div class="log-big"><img src="@/assets/img/logo.svg" alt=""></div>
                    <div class="log-nano"><img src="@/assets/img/logo-nano.svg" alt=""></div>
                    <div class="nav-link-detales" :class="[isFold?'':'overflow-y']"
                         style="height: calc(100% - 160px); ">
                        <div class="nav-link-groud" v-for="(child, navLinkindex) in navLink" :key="navLinkindex">
                            <div class="group-name" v-if="child.groupName">
                                <div class="text">{{child.groupName}}</div>
                            </div>
                            <div v-for="(item, childsIndex) in child.children" :key="childsIndex"
                                 class="item_connect">
                                <div class="item_box" @click.stop.prevent="foldDetails(isFoldDetails,item)"
                                     :class="{'active':navName==item.name}"
                                     :init="itemChildren = setItemChildren(item.children)">
                                    <div class="img-box"><img :src="item.icon"></div>
                                    <div class="pro-ab">
                                        <div class="text-box">
                                            <a href="#" class="unis-a">
                                                <div class="text but-t1">{{item.title}}</div>
                                            </a>
                                            <img src="@/assets/img/arrow-down.svg"
                                                 :class="{'transform-180':navName == item.title }"
                                                 v-if="item.children && item.children.length>0">
                                            <span v-if="(!item.children || item.children.length<1 )&&navName==item.name">
                                                 <svg width="9" height="14" viewBox="0 0 9 14" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.7072 13.7072L8.4143 6.99994L1.70718 0.292969L0.292984 1.7072L5.58587 6.99997L0.292968 12.293L1.7072 13.7072Z"
                                                      fill="white"/>
                                            </svg>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div :class="[isFold?'hover-details':'childs-box',(navName != item.name && !isFold)?'show-childs':'']"
                                     v-if="itemChildren.length>0"
                                     :style="{'height':(48* itemChildren.length)+'px'}">
                                    <div :class="[isFold?'hover-details-box':'' ]">
                                        <div class="pt-0 pb-0 pl-0" :class="[isFold?'hover-details-item':'child-item' ]"
                                             v-for="nav in itemChildren">
                                            <div class="line"></div>
                                            <div class="item-childs-link pr-2  justify-content-between align-items-center"
                                                 :class="[itemChildsLink == nav.name ? 'link_active' :'']"
                                                 @click.stop.prevent="foldChildetails(nav)"> {{nav.title}}
                                                <span v-if="itemChildsLink == nav.name">
                                                     <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                                          xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.7072 13.7072L8.4143 6.99994L1.70718 0.292969L0.292984 1.7072L5.58587 6.99997L0.292968 12.293L1.7072 13.7072Z"
                                                      fill="white"/>
                                            </svg>

                                                </span>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <button class="unis-btn compact full unis-btn-wIcon align-items-center"
                                :class="[isFold ? 'justify-content-center' : 'justify-content-start']"
                                style="color:#ECECEC " @click.stop.prevent="logOut">
                            <svg width="16" height="16" viewBox="0 0 21 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6992 0.916016H9.30339V12.7543H11.6992V0.916016ZM15.9638 3.80455L14.2268 5.52109C16.2992 6.7641 17.6888 9.00153 17.6888 11.5704C17.6888 15.4889 14.4664 18.6734 10.5013 18.6734C6.5362 18.6734 3.3138 15.4889 3.3138 11.5704C3.3138 9.00153 4.70339 6.7641 6.7638 5.50925L5.0388 3.80455C2.54714 5.50925 0.917969 8.35043 0.917969 11.5704C0.917969 16.8029 5.20651 21.041 10.5013 21.041C15.7961 21.041 20.0846 16.8029 20.0846 11.5704C20.0846 8.35043 18.4555 5.50925 15.9638 3.80455Z"
                                      fill="#ECECEC"/>
                            </svg>
                            <span class="mr-2 ml-4" v-if="!isFold">Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
