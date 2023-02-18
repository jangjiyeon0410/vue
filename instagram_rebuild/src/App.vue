<template>
	<div class="header">
		<ul class="header-button-left">
			<li @click="step = 0" v-if="step > 0">Cancel</li>
		</ul>
		<ul class="header-button-right">
			<li @click="next" v-if="step > 0">Next</li>
		</ul>
		<img src="./assets/logo.png" class="logo" />
	</div>

	<ContainerBox
		:step="step"
		:newImgUrl="newImgUrl"
		:selectedFilter="selectedFilter"
		@myContent="myContent = $event.target.value"
		@selectedFilter="selectedFilter = $event"
	/>

	<div class="footer">
		<div class="footer-button-plus">
			<input
				@change="upload"
				multiple
				accept="image/*"
				type="file"
				id="file"
				class="inputfile"
			/>
			<label for="file" class="input-plus">+</label>
		</div>
	</div>

	<button v-if="step == 0" @click="morePost">더보기</button>
</template>

<script>
// import postingData from './assets/postingData';
import ContainerBox from './components/Container.vue';
import axios from 'axios';

export default {
	name: 'App',
	data() {
		return {
			// postingData: postingData,
			clicked: 0,
			step: 0,
			newImgUrl: '',
			selectedFilter: '',
			myContent: '',
		};
	},
	methods: {
		next() {
			if (this.step == 1) {
				this.step++;
			} else if (this.step == 2) {
				const post = {
					name: 'Kim Hyun',
					userImage: 'https://placeimg.com/100/100/arch',
					postImage: this.newImgUrl,
					likes: 36,
					date: 'May 15',
					liked: false,
					content: this.myContent,
					filter: this.selectedFilter,
				};
				this.postingData.unshift(post);
				console.log(this.postingData);

				this.step = 0;
			}
		},
		morePost() {
			axios
				.get(`https://codingapple1.github.io/vue/more${this.clicked}.json`)
				.then((Response) => {
					this.postingData.push(Response.data);
					this.clicked++;
					console.log(this.postingData);
				})
				.catch((Error) => {
					console.log(Error);
				});
		},
		upload(e) {
			this.step = 1;
			const file = e.target.files;

			const objectURL = URL.createObjectURL(file[0]); //param에 들어갈 객체는 data 객체가 아닌 Blob, File, MediaSource 객체여야함
			this.newImgUrl = objectURL;
		},
	},
	// mounted() {
	// 	this.emitter.on('selectedFilter', (data) => {
	// 		this.selectedFilter = data;
	// 	});
	// },
	computed: {
		postingData() {
			return this.$store.state.postingData;
		},
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
