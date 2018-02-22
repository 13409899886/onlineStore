<template>
  <div class="numberBox">
  	<button @click="btn(minus)">-</button>
  	<input type="text" />
  	<button>+</button>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
    	
    }
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.numberBox{margin-top: 15px;}
</style>
