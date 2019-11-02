<template>
	<div class="c-tweet__contents__footer">
		<div class="footer__options">
			<OptionAddImage />
			<OptionStatistics />
			<OptionAddStamp />
		</div>
		<div class="footer__actions">
			<div class="footer__actions__inner">
				<div class="state">
					<div class="state__inner">
					</div>
				</div>
				<Button
					type="submit"
					text="ツイート"
					addClass="type-tweet"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import OptionAddImage from '@/components/molecules/OptionAddImage.vue'
import OptionStatistics from '@/components/molecules/OptionStatistics.vue'
import OptionAddStamp from '@/components/molecules/OptionAddStamp.vue'
import Button from '@/components/molecules/Button.vue'
export default {
	components: {
		OptionAddImage,
		OptionStatistics,
		OptionAddStamp,
		Button
	}
}
</script>