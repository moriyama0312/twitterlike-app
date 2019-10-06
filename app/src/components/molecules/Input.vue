<template>
    <div class="c-input">
        <input
            :name="name"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="inputHandler"
        >
    </div>
</template>
<script>
export default {
    props: ['type', 'name', 'value', 'placeholder'],
    methods: {
        inputHandler(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>