<template>
  <div class="home">
    <h1>Number Line</h1>
    <img alt="Vue logo" src="../assets/schedule.png">
<counter/>
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
              v-model="colorCode"
              placeholder="Enter color code" 
              type ="text"
          >
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  computed:
  {
    colorCode:
    {
      get()
      {
        return this.$store.state.colorCode;
      },
      set(newValue)
      {
        this.$store.dispatch('setColorCode', newValue);
      }
    }
  },
  components:{
    'counter': require('@/components/Counter.vue').default
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

