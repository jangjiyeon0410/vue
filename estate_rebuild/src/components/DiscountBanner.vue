<template>
	<div class="banner">
		<p>지금 결제하면 {{ discount }}% 할인</p>
	</div>
</template>

<script>
export default {
	name: 'DiscountBanner',
	data() {
		return {
			discount: 30,
		};
	},
	mounted() {
		let interval = setInterval(() => {
			this.discount--;
			if (this.discount == 0) {
				clearInterval(interval);
			}
		}, 1000);
	},
};
</script>

<style>
.banner {
	background: #eee;
	margin: 20px;
	padding: 30px;
	border-radius: 10px;
}
</style>
