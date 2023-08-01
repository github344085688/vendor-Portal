
<template>
    <div class="side-navigation" style="background:green" :class="{'show-side-bar':isShowSidebar}">
        <div class="unis-navigation">
            <div class="aside-unfold" :class="{'aside-fold':isFold}">
                <div class="aside-controller"  @click.stop.prevent="togoaside(isFold)">
                    <i  :class="[isFold ? 'right-arrow2':'right-arrow1'] "></i>
                </div>
                <div class="parent-level " :class="[(isLevelSmall ||isFold)?'parent-level-small sm:parent-level':'',  isClickParentLevel?'':'sm:parent-level']">
                    <div class="log-big"><img src="@/assets/img/logo.svg" alt=""></div>
                    <div class="log-nano"><img src="@/assets/img/logo-nano.svg" alt=""></div>
                    <div class="nav-link-detales" :class="[isFold?'':'overflow-y']">
                        <div class="nav-link-groud" v-for="(child, navLinkindex) in navLink" :key="navLinkindex">
                            <div class="group-name" v-if="child.groupName">
                                <div class="text">{{child.groupName}}</div>
                            </div>
                            <div v-for="(item, childsIndex) in child.children" :key="childsIndex"
                                 class="item_connect " >
                                <div class="item_box" @click.stop.prevent="foldDetails(isFoldDetails,item)"
                                     :class="{'active':navName==item.title}">
                                    <div class="img-box"><img :src="item.icon"></div>
                                    <div class="pro-ab">
                                        <div class="text-box">
                                            <a href="#" class="unis-a">
                                                <div class="text but-t1">{{item.title}}</div>
                                            </a>
                                            <img src="@/assets/img/arrow-down.svg"
                                                 :class="{'rotate180':navName == item.title }"
                                                 v-if="item.children && item.children.length>0">
                                        </div>
                                    </div>
                                </div>
                                <div class="childs-box" :class="[(navName != item.title && !isFold)?'show-childs':'']"
                                     v-if="item.children && item.children.length>0"
                                     :style="{'height':(42* item.children.length)+'px'}">
                                        <div class="child-item"  v-for="nav in item.children" @click.stop.prevent="foldChildetails($event,nav)">
                                            <div class="line"></div>
                                            <div class="item-childs-link pr-2   justify-content-between align-items-center"
                                                 :class="[itemChildsLink == nav.name ? 'link_active' :'']"
                                                 @click.stop.prevent="foldChildetails($event,nav)"> {{nav.title}}
                                                <svg v-if="itemChildsLink == nav.name" width="9" height="14"
                                                     viewBox="0 0 9 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.7072 13.7072L8.4143 6.99994L1.70718 0.292969L0.292984 1.7072L5.58587 6.99997L0.292968 12.293L1.7072 13.7072Z"
                                                          fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


