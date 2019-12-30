<template>
	<div class="c-modal">
		<div class="c-modal__inner">
			<div class="c-modal__contents">
				<div class="c-modal__contents__close">
					<span>×</span>
				</div>
				<HomeContentsTweetBox />
			</div>
		</div>
		<div class="c-modal__layer" />
	</div>
</template>
<script>
import HomeContentsTweetBox from '@/components/organisms/HomeContentsTweetBox.vue'
export default {
	data() {
		return {

		}
	},
	components: {
		HomeContentsTweetBox
	}
}
</script>