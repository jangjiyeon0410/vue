<template>
  <div class="black-bg" v-if="isModalOpen==true">
		<div class="white-bg">
			<h4>{{ onerooms[clicked].title }}</h4>
			<img :src="onerooms[clicked].image" alt="" style="width: 100%" />
			<p>{{ onerooms[clicked].content }}</p>
			<span>{{ onerooms[clicked].price }} 원</span>
			<button @click="$emit('closeModal')">X</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ModalItem',
  props:{
    onerooms: Array,
    clicked: Number,
    isModalOpen: Boolean,
  },
}
</script>

<style>

</style>