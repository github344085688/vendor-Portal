<template>
    <div class="w-64 ">
        <div class="flex items-center justify-center h-16 text-white text-xl font-semibold">
            Sidebar
        </div>
        <ul class="py-4">
            <li
                class="px-6 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                v-for="(item, index) in sidebarItems"
                :key="index"
            >
                <button
                    @click="toggleSubmenu(index)"
                    class="flex items-center justify-between w-full focus:outline-none"
                >
                    <span>{{ item.label }}</span>
                    <svg
                        v-if="item.submenu"
                        class="w-5 h-5 text-gray-400 transform transition-transform"
                        :class="{
                  'rotate-90': item.submenuOpen,
                  '-rotate-90': !item.submenuOpen
                }"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>
                <transition name="fade">
                    <ul
                        v-if="item.submenu && item.submenuOpen"
                        class="py-2 pl-8"
                    >
                        <li
                            class="px-2 py-1 text-gray-400 hover:bg-gray-700 hover:text-white"
                            v-for="(subItem, subIndex) in item.submenu"
                            :key="subIndex"
                        >
                            <a :href="subItem.link">{{ subItem.label }}</a>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>
