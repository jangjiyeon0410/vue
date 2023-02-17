<template>
	<!-- <div v-if="1 == 2">안녕하세요</div>
	<div v-else-if="1 == 3">안녕하세요2</div>
	<div v-else>안녕하세요3</div> -->

	<!-- <div class="black-bg" v-if="isModalOpen">
		<div class="white-bg">
			<h4>{{ onerooms[clicked].title }}</h4>
			<img :src="onerooms[clicked].image" alt="" style="width: 100%" />
			<p>{{ onerooms[clicked].content }}</p>
			<span>{{ onerooms[clicked].price }} 원</span>
			<button @click="isModalOpen = false">X</button>
		</div>
	</div> -->

	<!-- 
	<div class="start" :class="{end: isModalOpen}">
		<ModalItem @closeModal="isModalOpen=false" :onerooms="onerooms" :clicked="clicked" :isModalOpen="isModalOpen"/>
	</div> -->

	<transition name="fade">
		<ModalItem
			@closeModal="isModalOpen = false"
			:onerooms="onerooms"
			:clicked="clicked"
			:isModalOpen="isModalOpen"
		/>
	</transition>

	<div class="menu">
		<!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
		<a v-for="(a, i) in menus" :key="i">{{ a }}</a>
		<!-- in 자료형 -> 자료안의 데이터 갯수만큼 반복, a는 순서대로 데이터 안의 자료가 됨 -->
		<!-- 변수 작명 2개 가능, 왼쪽변수: 배열 내의 데이터. 오른쪽변수: 1씩 증가하는 정수 -->
	</div>

	<button @click="priceSort">가격순정렬</button>
	<button @click="sortBack">되돌리기</button>
	<button @click="alphabetSort">알파벳순정렬</button>
	<button @click="revertPriceSort">가격역순정렬</button>
	<button @click="lessThanFifty">50만원이하상품</button>

	<!-- <div class="discount">
		<h4>지금 결제하면 20% 할인</h4>
	</div> -->
	<DiscountBanner v-if="showDiscount == true" />

	<!-- <div v-for="(a, i) in products" :key="i">
		<img src="./assets/room0.jpg" alt="" class="room-img" />
		<h4>{{ a }}</h4>
		<p>50 만원</p>
		<button @click="declaration[i]++">허위매물신고</button
		><span>declaration: {{ declaration[i] }}</span>
	</div> -->

	<!-- <div v-for="(a, i) in onerooms" :key="i">
		<img :src="a.image" alt="" class="room-img" />
		<h4
			@click="
				isModalOpen = true;
				clicked = i;
			"
		>
			{{ a.title }}
		</h4>
		<p>{{ a.price }} 원</p>
	</div> -->
	<cardItem
		@openModal="
			isModalOpen = true;
			clicked = $event;
		"
		:oneroom="onerooms[i]"
		v-for="(a, i) in onerooms"
		:key="a"
	/>
</template>

<script>
import oneroomsData from './assets/oneroom.js';
import DiscountBanner from './components/DiscountBanner.vue';
import ModalItem from './components/ModalItem.vue';
import CardItem from './components/CardItem.vue';

export default {
	name: 'App',
	data() {
		return {
			showDiscount: true,
			clicked: 0,
			originalOnerooms: [...oneroomsData],
			onerooms: oneroomsData,
			isModalOpen: false,
			declaration: [0, 0, 0],
			menus: ['Home', 'Shop', 'About'],
			price1: 60,
			price2: 50,
			style: 'color: red',
			products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
		};
	},
	methods: {
		increase() {
			this.declaration++;
			// vue에서 함수 만들 때 주의사항** 함수 안에서 데이터 쓸 땐 this.데이터명
		},
		priceSort() {
			// this.onerooms.sort();	//문자 정렬
			// this.onerooms.sort(function(a,b){
			// 	return a-b	// a,b에 정렬할 넘버 데이터, 리턴값이 음수면 수를 왼쪽으로 보냄 -> 정렬
			// })

			this.onerooms.sort(function (a, b) {
				return a.price - b.price;
			}); //sort함수 -> 원본 데이터가 아예 번형됨.
		},
		sortBack() {
			this.onerooms = [...this.originalOnerooms];
		},
		alphabetSort() {
			this.onerooms.sort(function (a, b) {
				if (a.title > b.title) return 1;
				if (a.title === b.title) return 0;
				if (a.title < b.title) return -1;
			});
		},
		revertPriceSort() {
			this.onerooms.sort(function (a, b) {
				return b.price - a.price;
			});
		},
		lessThanFifty() {
			let underFifty = [];
			for (let i = 0; i < this.onerooms.length; i++) {
				if (this.onerooms[i].price < 500000) {
					underFifty.push(this.onerooms[i]);
				}
			}
			this.onerooms = underFifty;
		},
	},

	created() {
		//서버에서 데이터 가져오는 코드
	},

	// mounted(){
	// 	setTimeout(() => {
	// 		this.showDiscount = false;
	// 	}, 2000);
	// },	// 애로우 평션 쓰면 에러가 안난다는데 왤까?

	components: {
		DiscountBanner,
		ModalItem,
		CardItem,
	},
};
</script>

<!-- 
	동적인 UI 만드는법:
	0. ui 디자인(html)
	1. ui의 현재 상태를 데이터로 저장해둠
	2. 데이터에 따라 ui가 어떻게 보일지 작성
 -->

<style>
body {
	margin: 0;
}
div {
	box-sizing: border-box;
}

.discount {
	background: #eee;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
}

.fade-enter-from {
	transform: translateY(-1000px);
}
.fade-enter-active {
	transition: all 1s;
}
.fade-enter-to {
	transform: translateY(0);
}

.fade-leave-from {
	opacity: 1;
}
.fade-leave-active {
	transition: all 1s;
}
.fade-leave-to {
	opacity: 0;
}

/* .start{
	opacity: 0;
	transition: all 1s;
}
.end{
	opacity: 1;
} */

.black-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 20px;
}
.white-bg {
	width: 100%;
	background: #fff;
	border-radius: 8px;
	padding: 20px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.menu {
	background: darkslateblue;
	padding: 15px;
	border-radius: 5px;
}
.menu a {
	color: white;
	padding: 10px;
}

.room-img {
	width: 100%;
	margin-top: 40px;
}
</style>
