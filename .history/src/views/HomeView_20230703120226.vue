<template>
  <div class="home">
    <h1>Number Line</h1>
    <img alt="Vue logo" src="../assets/schedule.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
        <sup>2 </sup> =
      {{ $store.getters.counterSquared }}
    </div>
     <div class="buttons">
      <button @click ="$store.dispatch('increaseCounter')">+</button>
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      </div>
      <div>
          <input 
              placeholder="Enter color code" 
              type ="text"
          >
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
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

