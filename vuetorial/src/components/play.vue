<template lang="pug">
div
  .demo(@click="attachRed = !attachRed", :class="divClasses")
  .demo(@click="attachRed = !attachRed", :class="{red: attachRed}")
  .demo(:class="[color, {roundify: !roundify}]", @click="roundify = !roundify")
  .demo
  hr
  input(v-model="color")
  hr


</template>

<script>
  export default {
    data() {
      return {
        attachRed : false,
        color : 'green',
        roundify : false
      }
    },
    computed: {
      divClasses() {
        return {
          red: this.attachRed,
          blue: !this.attachRed
        }
      }
    }
  }
</script>
<style>
  .roundify {
    border-radius: 50%
  }
  .demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }
  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
  .green {
    background-color: green;
  }
</style>
