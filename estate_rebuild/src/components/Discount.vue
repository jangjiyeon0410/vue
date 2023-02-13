<template>
	<div class="discountBanner">
		<p>지금 결제하면 {{ discount }}%할인</p>
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
.discountBanner {
	background: #eee;
	padding: 20px;
	margin: 20px;
	border-radius: 10px;
}
</style>
