<template>
	<ul class="menu">
		<li><a href="#">Home</a></li>
		<li><a href="#">Shop</a></li>
		<li><a href="#">About</a></li>
	</ul>

	<DiscountBanner v-if="showDiscount == true" />

	<CardItem
		@modalOpen="
			modalOpen = true;
			clicked = $event;
		"
		:onerooms="onerooms[i]"
		v-for="(a, i) in onerooms"
		:key="a"
	/>

	<div class="start" :class="{ end: modalOpen }">
		<ItemDescription
			@closeModal="modalOpen = false"
			:onerooms="onerooms"
			:clicked="clicked"
			:modalOpen="modalOpen"
		/>
	</div>
</template>

<script>
import oneroomsData from './assets/oneroom';
import CardItem from './components/CardItem.vue';
import ItemDescription from './components/ItemDescription.vue';

import DiscountBanner from './components/DiscountBanner.vue';

export default {
	name: 'App',
	data() {
		return {
			onerooms: oneroomsData,
			modalOpen: false,
			cliked: 0,
			showDiscount: true,
		};
	},

	components: {
		CardItem,
		ItemDescription,
		DiscountBanner,
	},

	// mounted() {
	// 	setTimeout(() => {
	// 		this.showDiscount = false;
	// 	}, 2000);
	// },
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
div {
	box-sizing: border-box;
}

#app {
	text-align: center;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
}

.menu {
	background: tomato;
	display: flex;
	justify-content: space-between;
	padding: 10px 20%;
}
.menu a {
	color: #fff;
}

.start {
	opacity: 0;
	transition: all 1s;
}
.end {
	opacity: 1;
}
</style>
