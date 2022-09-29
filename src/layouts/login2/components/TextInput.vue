
<template>
    <div class="TextInput"  >
        <label :for="name">{{ label }}</label>
        <input
                :name="name"
                :id="name"
                :type="type"
                :value="inputValue"
                :placeholder="placeholder"
                @input="handleChange"
                @blur="handleBlur"
        />

        <p class="help-message" v-show="errorMessage || meta.valid">
            {{ errorMessage || successMessage }}
        </p>
    </div>
</template>

<style scoped>
    .TextInput {
        position: relative;
        margin-bottom: calc(1em * 1.5);
        width: 100%;
    }

    label {
        display: block;
        margin-bottom: 4px;
        width: 100%;
    }

    input {
        border-radius: 5px;
        border: 2px solid transparent;
        padding: 15px 10px;
        outline: none;
        background-color: #f2f5f7;
        width: 100%;
        transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
    }

    input:focus {

    }

    .help-message {
        position: absolute;
        bottom: calc(-1.5 * 1em);
        left: 0;
        margin: 0;
        font-size: 14px;
    }

    .TextInput.has-error input {
        /*background-color: var(--error-bg-color);
        color: var(--error-color);*/
    }

    .TextInput.has-error input:focus {
        /*border-color: var(--error-color);*/
    }

    .TextInput.has-error .help-message {
        /*color: var(--error-color);*/
    }

    .TextInput.success input {
        /*background-color: var(--success-bg-color);*/
        /*color: var(--success-color);*/
    }

    .TextInput.success input:focus {
        /*border-color: var(--success-color);*/
    }

    .TextInput.success .help-message {
        /*color: var(--success-color);*/
    }
</style>
