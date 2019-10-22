<template>
	<div>
		<SideHeader />
		<router-view />
	</div>
</template>

<script>
import SideHeader from '@/components/organisms/SideHeader.vue'
export default {
	components: {
		SideHeader
	}
}
</script>
