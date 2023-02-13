<template>
	<ul class="itemList">
		<li>
			<img :src="onerooms.image" alt="" class="itemImage" />
			<h4 @click="$emit('modalOpen', onerooms.id)">{{ onerooms.title }}</h4>
			<span>{{ onerooms.price }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'ItemList',
	props: {
		onerooms: Object,
	},
};
</script>

<style>
.itemImage {
	width: 100%;
}
</style>
