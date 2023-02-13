<template>
  <ul>
    <li class="items">
      <img :src="onerooms.image" alt="" class="roomImg">
      <h4 @click="$emit('modalOpen', onerooms.id)" class="title">{{ onerooms.title }}</h4>
      <p>{{ onerooms.price }}원</p>
    </li>
  </ul>


</template>

<script>
  export default{
    name: 'CardItem',
    props: {
      onerooms: Object,
    }
  }
</script>

<style>
  .items{
   margin: 50px 0; 
  }
  .roomImg{
    width: 100%;
  }
  .title{
    margin: 20px 0
  }
</style>