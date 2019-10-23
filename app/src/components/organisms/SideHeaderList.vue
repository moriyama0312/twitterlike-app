<template>
	<ul>
		<SideHeaderListItem
			v-for="list in lists"
			:key="list.id"
		/>
		<li id="tweet" class="js-modal">+</li>
	</ul>
</template>
<script>
import SideHeaderListItem from '@/components/molecules/SideHeaderListItem.vue'
export default {
	data() {
		return {
			lists: [
				{
					id: "bird",
					linkName: "",
					imagePath: ""
				},
				{
					id: "home",
					linkName: "",
					imagePath: ""
				},
				{
					id: "notifications",
					linkName: "",
					imagePath: ""
				},
				{
					id: "profile",
					linkName: "",
					imagePath: ""
				}
			]
		}
	},
	components: {
		SideHeaderListItem
	}
}
</script>