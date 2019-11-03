<template>
	<div class="c-textarea">
		<textarea
			:placeholder="placeholder"
			:value="value"
			@input="inputHandler"
		></textarea>
	</div>
</template>
<script>
export default {
	props: ['placeholder', 'value'],
	methods: {
		inputHandler(e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>