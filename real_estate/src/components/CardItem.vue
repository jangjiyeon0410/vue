<template>
  <div>
		<img :src="oneroom.image" alt="" class="room-img" />
		<h4 @click="send">{{ oneroom.title }}</h4>
		<p>{{ oneroom.price }} 원</p>
	</div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    oneroom: Object,
  },
  methods: {
    send(){
      this.$emit('openModal', this.oneroom.id)
    },
  },
}
</script>

<style>

</style>