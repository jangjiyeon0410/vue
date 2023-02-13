<template>
  <div v-for="(a,i) in 3" :key="i" class="card" style="width: 18rem;">
    <img :src="require(`@/assets/dwight${a}.jpg`)" class="card-img-top" alt="">
    <div class="card-body">
      <router-link :to="{ path: '/detail/' + i }"
      class="btn btn-primary">Go somewhere</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'mainPage',
}
</script>

<style>
  .card{
    margin: 20px;
  }
</style>