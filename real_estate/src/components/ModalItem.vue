<template>
  <div class="black-bg" v-if="isModalOpen==true">
		<div class="white-bg">
			<h4>{{ onerooms[clicked].title }}</h4>
			<img :src="onerooms[clicked].image" alt="" style="width: 100%" />
			<p>{{ onerooms[clicked].content }}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model.number="month">
      <!-- <textarea v-model="month"></textarea>
      <select v-model="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select> -->
			<p>{{month}}개월 선택함: {{ onerooms[clicked].price * month }} 원</p>

			<button @click="$emit('closeModal')">X</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ModalItem',
  data(){
    return {
      month : 1
    }
  },
  watch: {
    month(a){  //a, b 모두 입력된 데이터, a는 변경전 데이터, b는 변경 후 데이터
      const spaceTab = /\s/g;
      if(a>=13){
        alert('13 이상 입력하지 마세요.')
      }else if(isNaN(a) || a.match(spaceTab)){
        {
          alert('숫자만 입력하세요')
          this.month = 1
        }
     }
    }
  },
  props:{
    onerooms: Array,
    clicked: Number,
    isModalOpen: Boolean,
  },
}
</script>

<style>

</style>