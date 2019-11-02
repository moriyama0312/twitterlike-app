<template>
    <div :class="'c-button ' + addClass">
        <button :type="type">{{ text }}</button>
    </div>
</template>
<script>
export default {
    // props: ['type', 'text', 'addClass'],
    props: {
        type: {
            require: true,
            type: String
        },
        text: {
            require: true,
            type: String
        },
        addClass: {
            require: false,
            type: String
        }
    },
    methods: {
    }
}
</script>