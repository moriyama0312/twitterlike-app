<template>
	<div id="c-side-header">
		<div id="c-side-header__inner">
			<SideHeaderList
				@modal-open="modalOpen"
			/>
		</div>
	</div>
</template>
<script>
import SideHeaderList from '@/components/organisms/SideHeaderList.vue'
export default {
	components: {
		SideHeaderList
	},
	methods: {
		modalOpen() {
			this.$emit('modal-open')
		}
	}
}
</script>
