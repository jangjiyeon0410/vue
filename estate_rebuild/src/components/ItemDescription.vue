<template>
	<div class="modal" v-if="modalOpen == true">
		<div class="contentBg">
			<img :src="onerooms[clicked].image" alt="" style="width: 100%" />
			<h4>{{ onerooms[clicked].title }}</h4>
			<p>{{ onerooms[clicked].content }}</p>
			<input @input="month = Number($event.target.value)" type="text" />
			<p>{{ month }}개월 선택함: {{ onerooms[clicked].price * month }}원</p>
			<button @click="$emit('closeModal')">X</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemDescription',
	data() {
		return {
			month: 1,
		};
	},
	watch: {
		month(a) {
			if (a >= 13) {
				alert('13이상 입력 안됨');
			} else if (isNaN(a)) {
				alert('숫자만 입력하세요');
				this.month = 1;
			}
		},
	},
	props: {
		onerooms: Array,
		clicked: Number,
		modalOpen: Boolean,
	},
};
</script>

<style>
.modal {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 20px;
	top: 0;
}
.contentBg {
	width: 100%;
	background: #fff;
	border-radius: 10px;
	padding: 20px;
}
</style>
