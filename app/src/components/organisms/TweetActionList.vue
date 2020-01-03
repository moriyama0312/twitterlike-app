<template>
	<ul class="footer__action">
		<li>
			<span class="reply">
				<span class="txt">rep</span><span class="num" v-if="item.reply_num">{{ item.reply_num }}</span>
			</span>
		</li>
		<li>
			<span class="retweet">
				<span class="txt">ret</span><span class="num" v-if="item.retweet_num">{{ item.retweet_num }}</span>
			</span>
		</li>
		<li>
			<span class="favorite">
				<span class="txt">fav</span><span class="num" v-if="item.favorite_num">{{ item.favorite_num }}</span>
			</span>
		</li>
	</ul>
</template>
<script>
export default {
	props: ['item', 'replyUserList']
}
</script>