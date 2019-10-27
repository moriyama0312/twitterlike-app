<template>
	<li>
		<router-link :to="{name:list.linkName}">{{ list.imagePath }}</router-link>
	</li>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	props: ['list']
}
</script>