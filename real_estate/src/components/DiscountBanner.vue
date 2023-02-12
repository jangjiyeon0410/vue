<template>
	<div class="discount">
		<h4>지금 결제하면 {{ discount }}% 할인</h4>
	</div>
</template>

<script>
export default {
	name: 'DiscountBanner',
	data(){
    return {
      discount : 30
    }
  },
	mounted(){
		let interval = setInterval(() => {
			this.discount--;
			if (this.discount == 0){
				clearInterval(interval)
			}
		}, 1000);
	},
}
</script>

<style></style>
