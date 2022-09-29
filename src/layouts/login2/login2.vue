<template>
    <div>
        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
            <Field name="email" type="email" class="unis-input large-border"/>
            <ErrorMessage name="email" />
            <Field name="password" type="password"  class="unis-input large-border"/>
            <ErrorMessage name="password" />
            <button>Submit</button>
        </Form>
    </div>
</template>