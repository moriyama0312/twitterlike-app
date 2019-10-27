<template>
	<div id="loggin-page">
		<SideHeader />
		<router-view />
		<SubContents />
	</div>
</template>

<script>
import SideHeader from '@/components/organisms/SideHeader.vue'
import SubContents from '@/components/organisms/SubContents.vue'
export default {
	components: {
		SideHeader,
		SubContents
	}
}
</script>
