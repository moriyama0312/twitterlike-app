<template>
	<div class="c-search-box">
		<form>
			<input
				:placeholder="placeholder"
			>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			placeholder: 'キーワード検索'
		}
	}
}
</script>