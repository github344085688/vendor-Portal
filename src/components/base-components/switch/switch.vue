<template>

        <SwitchGroup as="div" class="flex items-center space-x-4">
            <SwitchLabel>Enable notifications</SwitchLabel>

            <Switch
                    as="button"
                    v-model="state"
                    :class="resolveSwitchClass({ checked: state })"
                    v-slot="{ checked }"
            >
        <span
                class="inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"
                :class="{ 'translate-x-5': checked, 'translate-x-0': !checked }"
        />
            </Switch>
        </SwitchGroup>

</template>



