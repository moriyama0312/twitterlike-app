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
					link: "",
					imagePath: ""
				},
				{
					id: "home",
					link: "",
					imagePath: ""
				},
				{
					id: "notifications",
					link: "",
					imagePath: ""
				},
				{
					id: "profile",
					link: "",
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