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
	<ModalItem @closeModal="isModalOpen=false" :onerooms="onerooms" :clicked="clicked" :isModalOpen="isModalOpen"/>
	<!-- <자식: data = 'data'> -->

	<div class="menu">
		<!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
		<a v-for="(a, i) in menus" :key="i">{{ a }}</a>
		<!-- in 자료형 -> 자료안의 데이터 갯수만큼 반복, a는 순서대로 데이터 안의 자료가 됨 -->
		<!-- 변수 작명 2개 가능, 왼쪽변수: 배열 내의 데이터. 오른쪽변수: 1씩 증가하는 정수 -->
	</div>

	<!-- <div class="discount">
		<h4>지금 결제하면 20% 할인</h4>
	</div> -->
	<DiscountBanner/>

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
<CardItem @openModal="isModalOpen=true; clicked=$event" :oneroom="onerooms[i]" v-for="(a,i) in onerooms" :key="a"/>

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
			clicked: 0,
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
	},
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
