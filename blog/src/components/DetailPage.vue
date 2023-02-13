<template>
  <!-- {{$route.params.randomName}}
  $route -> 라우터에 대한 모든 정보
  params -> 파라미터들
  randomName -> router.js에 적은 /이름 -->


  <h4>상세페이지</h4>
    <h5>{{ blogPost[$route.params.randomName].title}}</h5>
    <p>{{ blogPost[$route.params.randomName].content}}</p>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'detailPage',
  props: {
    blogPost: Array
  }
}
</script>

<style>

</style>