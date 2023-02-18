<template>
	<div>
		<div v-if="tapsBtn == 0" class="items">
			<PostItems
				:postingData="postingData[i]"
				v-for="(a, i) in postingData"
				:key="a"
				:selectedFilter="selectedFilter"
			/>
		</div>

		<!-- 필터선택페이지 -->
		<div class="filter" v-if="tapsBtn == 1">
			<div
				:class="`upload-image ${selectedFilter}`"
				:style="`background-image:url(${imageUrl})`"
			></div>
			<div class="filters">
				<FilterBox
					v-for="filter in filtersName"
					:key="filter"
					:filter="filter"
					:imageUrl="imageUrl"
				>
					<span>{{ filter }}</span>
				</FilterBox>
			</div>
		</div>

		<!-- 글작성페이지 -->
		<div class="writing" v-if="tapsBtn == 2">
			<div
				:class="`upload-image ${selectedFilter}`"
				:style="`background-image:url(${imageUrl})`"
			></div>
			<div class="write">
				<textarea @input="$emit('postMyContent', data)">write!</textarea>
			</div>
		</div>
	</div>
</template>

<script>
import PostItems from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
	name: 'ContainerBox',
	data() {
		return {
			filtersName: [
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
		postingData: Array,
		tapsBtn: Number,
		imageUrl: String,
		selectedFilter: String,
	},
	components: {
		PostItems,
		FilterBox,
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
