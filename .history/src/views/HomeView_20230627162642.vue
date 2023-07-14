<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      0
    </div>
    <div class="buttons">
      <button>+</button>
      <button>-</button>
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
}
</style>

