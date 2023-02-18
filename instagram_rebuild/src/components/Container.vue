<template>
	<div>
		<PostItems
			v-for="(a, i) in postingData"
			:key="a"
			:postingData="postingData[i]"
		/>
	</div>
</template>

<script>
import PostItems from './Post.vue';

export default {
	name: 'ContainerBox',
	props: {
		postingData: Array,
	},
	components: {
		PostItems,
	},
};
</script>

<style></style>
