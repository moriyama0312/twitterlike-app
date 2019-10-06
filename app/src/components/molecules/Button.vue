<template>
    <div class="c-button">
        <button :type="type">{{ text }}</button>
    </div>
</template>
<script>
export default {
    props: ['type', 'text'],
    methods: {
    }
}
</script>