<template>
	<div class="modal">
		<div class="innerBg">
			<img :src="onerooms[clicked].image" alt="" class="itemImage" />
			<h4>{{ onerooms[clicked].title }}</h4>
			<p>{{ onerooms[clicked].content }}</p>
			<input v-model="month" type="text" />
			<p>개월수: {{ month }} 총금액: {{ onerooms[clicked].price * month }}</p>
			<span @click="$emit('closeModal')">XXX</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'modalItem',
	data() {
		return {
			month: 1,
		};
	},
	props: {
		onerooms: Object,
		clicked: Number,
	},
	watch: {
		month(a) {
			if (isNaN(a) == true) {
				alert('문자입력하지마라');
				this.month = 1;
			}
		},
	},
};
</script>

<style>
.modal {
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
}
.innerBg {
	background: #fff;
	padding: 20px;
	margin: 30px;
	border-radius: 10px;
}
</style>
