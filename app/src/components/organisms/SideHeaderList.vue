<template>
	<ul id="c-side-header-list">
		<SideHeaderListItem
			v-for="list in lists"
			:key="list.id"
			:list="list"
		/>
		<li id="tweet" class="js-modal">
			<a
				href="#"
				@click="modalOpen"
			>+</a>
		</li>
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
					imagePath: "B"
				},
				{
					id: "home",
					linkName: "",
					imagePath: "H"
				},
				{
					id: "notifications",
					linkName: "",
					imagePath: "N"
				},
				{
					id: "profile",
					linkName: "",
					imagePath: "P"
				}
			]
		}
	},
	components: {
		SideHeaderListItem
	},
	methods: {
		modalOpen() {
			this.$emit('modal-open')
		}
	}
}
</script>