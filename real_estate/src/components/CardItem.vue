<template>
  <div v-for="(a, i) in onerooms" :key="i">
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
	</div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    onerooms: Array,
  },
}
</script>

<style>

</style>