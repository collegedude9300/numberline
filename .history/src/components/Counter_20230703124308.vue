<template>
<div
:style="{color: $store.state.colorCode}"
class="counter">
  {{ $store.state.counter }}
</div>
</template>
<script>
export default {
  name: 'Counter',
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
  }
}