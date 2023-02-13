<template>
  <div v-for="(a,i) in blogPost" :key="a"  class="list-group">
		<div @click="$router.push({ path: '/detail/' + i })"
			href="#"
			class="list-group-item list-group-item-action"
			aria-current="true"
		>
			<div class="d-flex w-100 justify-content-between">
				<h5 class="mb-1">{{ blogPost[i].title }}</h5>
				<small>{{ blogPost[i].date }}</small>
			</div>
			<p class="mb-1">{{ blogPost[i].content }}</p>
		</div>

    <router-view name="commentView"></router-view>
	</div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    blogPost: Array
  }
}
</script>

<style>

</style>

