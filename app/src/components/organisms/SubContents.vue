<template>
	<div id="c-sub-contents">
		<div id="c-sub-contents__inner">
			<SearchBox />
			<RecommendArea />
		</div>
	</div>
</template>
<script>
import SearchBox from '@/components/molecules/SearchBox.vue'
import RecommendArea from '@/components/organisms/RecommendArea.vue'
export default {
	components: {
		SearchBox,
		RecommendArea
	}
}
</script>