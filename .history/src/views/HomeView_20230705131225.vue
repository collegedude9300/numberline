<template>
  <div class="home">
    <h1>Number Line</h1>
    <img alt="Vue logo" src="../assets/schedule.png">
      <counter />
      <counter-squared />
      <buttons />
      <color-code/>
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
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'buttons': require('@/components/Buttons.vue').default,
    'color-code': require('@/components/ColorCode.vue').default
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

