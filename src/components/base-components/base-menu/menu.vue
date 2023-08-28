<template>
<!--        <div class="relative inline-block text-left">
            <Menu>
        <span class="rounded-md shadow-sm">
          <MenuButton
                  class="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800"
          >
            <span>Options</span>
            <svg class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
              />
            </svg>
          </MenuButton>
        </span>

                <MenuItems
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                >
                    <div class="px-4 py-3 px-3 py-2 bg-indigo-600 text-white">
                        <p class="text-sm leading-5">Signed in as</p>
                    </div>

                    <div class="py-1 px-4">
                        <CustomMenuItem href="#account-settings">Account settings</CustomMenuItem>
                    </div>
                    <div class="py-3 px-4">
                        <CustomMenuItem href="#sign-out">Sign out</CustomMenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>-->
    <Menu as="div"  class="relative inline-block text-left ">
        <MenuButton  class="
        focus:shadow-outline-gray
        text-white
        bg-gray-500
        inline-flex
        w-full
        justify-center
        rounded-md
        border border-gray-300
        bg-white
        px-4 py-2
        text-sm
        font-medium
        leading-5
        text-gray-700
        transition
        duration-150
        ease-in-out
        hover:text-white
        focus:border-blue-300
        focus:outline-none
        active:bg-gray-50
        active:text-gray-800"
        >Options</MenuButton>
        <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
            <MenuItem
                v-for="link in links"
                :key="link.href"
                v-slot="{ active }"
            >
                <button
                    :class="[ active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                >
                    <EditIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                    />
                    {{ link.label }}
                </button>

            </MenuItem>
<!--            <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                    >
                        <EditIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                        />
                        Edit
                    </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                    >
                        <DuplicateIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                        />
                        Duplicate
                    </button>
                </MenuItem>
            </div>
            <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                    >
                        <ArchiveIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                        />
                        Archive
                    </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                    >
                        <MoveIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                        />
                        Move
                    </button>
                </MenuItem>
            </div>

            <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                    >
                        <DeleteIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                        />
                        Delete
                    </button>
                </MenuItem>
            </div>-->
        </MenuItems>
    </Menu>
</template>
