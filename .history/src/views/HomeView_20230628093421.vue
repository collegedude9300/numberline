<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ counter }}
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
  data(){
    return{
      counter: 0
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

