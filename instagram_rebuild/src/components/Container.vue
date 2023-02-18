<template>
	<div v-if="step == 0">
		<PostItems
			v-for="(a, i) in postingData"
			:key="a"
			:postingData="postingData[i]"
			@click="likes(a)"
		/>
	</div>

	<!-- 필터선택페이지 -->
	<div v-if="step == 1">
		<div
			:class="`upload-image ${selectedFilter}`"
			:style="`background-image: url(${newImgUrl})`"
		></div>
		<div class="filters">
			<filterItem
				v-for="filter in filterList"
				:class="filter"
				:key="filter"
				:newImgUrl="newImgUrl"
				@click="$emit('selectedFilter', filter)"
			/>
		</div>
	</div>

	<!-- 글작성페이지 -->
	<div v-if="step == 2">
		<div
			:class="`upload-image ${selectedFilter}`"
			:style="`background-image: url(${newImgUrl})`"
		></div>
		<div class="write">
			<textarea @input="$emit('myContent', $event)" class="write-box">
write!</textarea
			>
		</div>
	</div>
</template>

<script>
import PostItems from './Post.vue';
import filterItem from './Filter.vue';

export default {
	name: 'ContainerBox',
	data() {
		return {
			filterList: [
				'aden',
				'_1977',
				'brannan',
				'brooklyn',
				'clarendon',
				'earlybird',
				'gingham',
				'hudson',
				'inkwell',
				'kelvin',
				'lark',
				'lofi',
				'maven',
				'mayfair',
				'moon',
				'nashville',
				'perpetua',
				'reyes',
				'rise',
				'slumber',
				'stinson',
				'toaster',
				'valencia',
				'walden',
				'willow',
				'xpro2',
			],
		};
	},
	props: {
		// postingData: Array,
		step: Number,
		newImgUrl: String,
		selectedFilter: String,
	},
	methods: {
		likes(a) {
			if (a.liked == false) {
				a.likes++;
				a.liked = true;
			} else {
				a.likes--;
				a.liked = false;
			}
		},
	},
	computed: {
		postingData() {
			return this.$store.state.postingData;
		},
	},
	components: {
		PostItems,
		filterItem,
	},
};
</script>

<style>
.upload-image {
	width: 100%;
	height: 450px;
	background: cornflowerblue;
	background-size: cover;
	background-position: center;
}
.filters {
	overflow-x: scroll;
	white-space: nowrap;
}
.filter-1 {
	width: 100px;
	height: 100px;
	background-color: cornflowerblue;
	margin: 10px 10px 10px auto;
	padding: 8px;
	display: inline-block;
	color: white;
	background-size: cover;
}
.filters::-webkit-scrollbar {
	height: 5px;
}
.filters::-webkit-scrollbar-track {
	background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
	background: #555;
}
.write-box {
	border: none;
	width: 90%;
	height: 100px;
	padding: 15px;
	margin: auto;
	display: block;
	outline: none;
}
</style>
