<template>
  <div class="home">
    <h1>Number Line</h1>
    <img alt="Vue logo" src="../assets/schedule.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="buttons">
      <button @click ="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  }
}
</script>
<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
  text-align: center;
}
.buttons button{
font-size: 40px;
width: 100px;
margin: 0 10px;

}
</style>

