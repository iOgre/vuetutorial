<template lang="pug">
div
  p
    button(@click="counter++") Increase
    button(@click="counter--") Decrease
  p
    button(@click="secondCounter++") Increase Second

  p {{ counter }} | {{ secondCounter }}
  p {{ result() }} | {{ output }}
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        secondCounter : 0
      }
    },
    methods: {
      result() {
        console.log('method')
        return this.counter > 5 ? "Greater than five" : this.counter == 5 ? "Five" : "Less than five"
      }
    },
    computed: {
      output() {
        console.log('computed')
        return this.counter > 5 ? "Greater than five" : this.counter == 5 ? "Five" : "Less than five"
      }
    },
    watch: {
      counter() {
        var vm = this;
        setTimeout(function() {
          vm.counter = 0;
          console.log("counter reset")
        }, 2000);
      }
    }
  }
</script>
<style>
</style>
