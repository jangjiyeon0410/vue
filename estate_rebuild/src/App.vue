<template>
	<ul class="menu">
		<li><a href="#">Home</a></li>
		<li><a href="#">Shop</a></li>
		<li><a href="#">About</a></li>
	</ul>

	<div class="order">
		<button @click="orderPrice">가격순정렬</button>
		<button @click="orderReverse">가격역순정렬</button>
		<button @click="sortBack">원래대로</button>
		<button @click="sortAlphabet">가나다순</button>
		<button @click="sortUnderFifty">50만원이하</button>
	</div>

	<DiscountBanner />
	<ItemList
		:onerooms="onerooms[i]"
		v-for="(a, i) in onerooms"
		:key="a"
		@modalOpen="
			isModalOpen = true;
			clicked = $event;
		"
	/>

	<Transition name="modal">
		<ModalItem
			v-if="isModalOpen"
			:clicked="clicked"
			:onerooms="onerooms"
			@closeModal="isModalOpen = false"
		/>
	</Transition>
</template>

<script>
import onerooms from './assets/oneroom';
import ItemList from './components/ItemList.vue';
import DiscountBanner from './components/Discount.vue';
import ModalItem from './components/ModalItem.vue';

export default {
	name: 'App',
	data() {
		return {
			originalOnerooms: [...onerooms],
			onerooms: onerooms,
			isModalOpen: false,
			clicked: 0,
		};
	},

	methods: {
		orderPrice() {
			this.onerooms.sort(function (a, b) {
				return a.price - b.price;
			});
		},
		sortBack() {
			this.onerooms = [...this.originalOnerooms];
		},
		orderReverse() {
			this.onerooms.sort(function (a, b) {
				return b.price - a.price;
			});
		},
		sortAlphabet() {
			this.onerooms.sort(function (a, b) {
				if (a.title > b.title) return 1;
				if (a.title === b.title) return 0;
				if (a.title < b.title) return -1;
			});
		},
		sortUnderFifty() {
			let underFifty = [];
			for (let i = 0; i < this.onerooms.length; i++) {
				if (this.onerooms[i].price < 500000) {
					underFifty.push(this.onerooms[i]);
				}
			}
			this.onerooms = underFifty;
		},
	},
	components: {
		ItemList,
		DiscountBanner,
		ModalItem,
	},
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

.modal-enter-from {
	opacity: 0;
}
.modal-enter-active {
	transition: all 1s;
}
.modal-enter-to {
	opacity: 1;
}

.modal-leave-from {
	opacity: 1;
}
.modal-leave-active {
	transition: all 1s;
}
.modal-leave-to {
	opacity: 0;
}

/* ************** */
</style>
