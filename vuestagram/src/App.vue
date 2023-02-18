<template>
	<div class="header">
		<ul class="header-button-left">
			<li v-if="tapsBtn > 0">Cancel</li>
		</ul>
		<ul class="header-button-right">
			<li v-if="tapsBtn == 1" @click="tapsBtn++">Next</li>
			<li v-if="tapsBtn == 2" @click="publish">Publish</li>
		</ul>
		<img src="./assets/logo.png" class="logo" />
	</div>

	<ContainerBox
		:imageUrl="imageUrl"
		:tapsBtn="tapsBtn"
		:postingData="postingData"
		:selectedFilter="selectedFilter"
		@postMyContent="myContent = $event.target.value"
	/>
	<button @click="more">더보기</button>

	<div class="footer">
		<ul class="footer-button-plus">
			<input
				@change="upload"
				multiple
				accept="image/*"
				type="file"
				id="file"
				class="inputfile"
			/>
			<label for="file" class="input-plus">+</label>
		</ul>
	</div>

	<!-- <div v-if="tapsBtn == 0">내용0</div>
	<div v-if="tapsBtn == 1">내용1</div>
	<div v-if="tapsBtn == 2">내용2</div> -->
	<!-- <button @click="tapsBtn = 0">포스트</button>
	<button @click="tapsBtn = 1">필터</button>
	<button @click="tapsBtn = 2">글쓰기</button> -->

	<!-- <h1>안녕{{ $store.state.name }}</h1>
	<button @click="changeName">버튼</button>

	<h2>나이 {{ $store.state.age }}</h2>
	<button @click="changeAge(10)">버튼</button> -->

	<!-- <p>{{ $store.state.more }}</p>
	<button @click="$store.dispatch('getData')">더보기</button> -->

	<!-- <p>{{ now2 }}{{ counter }}</p>
	<p>{{ 작명 }}{{ name }}{{ age }}{{ likes }}</p>
	<button @click="counter++">버튼</button> -->
</template>

<script>
import postingData from './assets/postingData';
import ContainerBox from './components/Container.vue';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
	name: 'App',
	data() {
		return {
			postingData: postingData,
			clickedMore: 0,
			tapsBtn: 0,
			imageUrl: '',
			myContent: '',
			selectedFilter: '',
			counter: 0,
		};
	},
	mounted() {
		this.emitter.on('selectedFilter', (selectedFilter) => {
			this.selectedFilter = selectedFilter;
		});
	},
	methods: {
		//vuex mutations 함수들 넣기
		...mapMutations(['setMore', 'changeName', 'changeAge', 'clickedLikes']),

		publish() {
			let myPost = {
				name: 'Kim Hyun',
				userImage: 'https://placeimg.com/100/100/arch',
				postImage: this.imageUrl,
				likes: 36,
				date: 'May 15',
				liked: false,
				content: this.myContent,
				filter: this.selectedFilter,
			};
			this.postingData.unshift(myPost);
			this.tapsBtn = 0;
			console.log(this.postingData);
		},

		more() {
			// axios.post('URL', { name: 'kim' }).then().catch(err=>{
			// 	//에러났을때 출력할 코드
			// });

			axios
				.get(`https://codingapple1.github.io/vue/more${this.clickedMore}.json`)
				.then((result) => {
					//요청성공시 실행할 코드
					this.postingData.push(result.data);
				});
			this.clickedMore++;
		},
		upload(e) {
			let file = e.target.files;
			this.tapsBtn = 1;
			let url = URL.createObjectURL(file[0]);
			this.imageUrl = url;
		},
		now() {
			return new Date();
		},
		// methods함수는 사용할 때마다 실행됨
	},
	computed: {
		// 사용해도 실행되지 않음. 처음 실행하고 값을 간직함. 계산결과저장용 함수들
		// store의 state를 저장하는 개념!!!

		// now2() {
		// 	return new Date();
		// },

		name() {
			return this.$store.state.name;
		},
		...mapState(['name', 'age', 'likes']), //축약형 -> import 필요
		...mapState({ 작명: 'name' }),
	},
	components: {
		ContainerBox,
	},
};
</script>

<style>
body {
	margin: 0;
}
ul {
	padding: 5px;
	list-style-type: none;
}
.logo {
	width: 22px;
	margin: auto;
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	top: 13px;
}
.header {
	width: 100%;
	height: 40px;
	background-color: white;
	padding-bottom: 8px;
	position: sticky;
	top: 0;
}
.header-button-left {
	color: skyblue;
	float: left;
	width: 50px;
	padding-left: 20px;
	cursor: pointer;
	margin-top: 10px;
}
.header-button-right {
	color: skyblue;
	float: right;
	width: 50px;
	cursor: pointer;
	margin-top: 10px;
}
.footer {
	width: 100%;
	position: sticky;
	bottom: 0;
	padding-bottom: 10px;
	background-color: white;
}
.footer-button-plus {
	width: 80px;
	margin: auto;
	text-align: center;
	cursor: pointer;
	font-size: 24px;
	padding-top: 12px;
}
.sample-box {
	width: 100%;
	height: 600px;
	background-color: bisque;
}
.inputfile {
	display: none;
}
.input-plus {
	cursor: pointer;
}
#app {
	box-sizing: border-box;
	font-family: 'consolas';
	margin-top: 60px;
	width: 100%;
	max-width: 460px;
	margin: auto;
	position: relative;
	border-right: 1px solid #eee;
	border-left: 1px solid #eee;
}
</style>
