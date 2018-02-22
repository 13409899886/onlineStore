<template>
  <div class="">
   	<Select @onchange="pop"></Select>
   	<radio @onchange="pop"></radio>
   	<Checkbox  @onchange="pop"></Checkbox>
   	<number @onchange="pop"></number>
  </div>
</template>

<script>
import Select from "../../components/select"	
import Radio from "../../components/radio"	
import Checkbox from "../../components/checkbox"
import Number from "../../components/number"
export default {
  data () {
    return {
    
    }
  },
  components:{
  	Select,Radio,Checkbox,Number
  },
  mounted:function(){
  	
	},
  methods:{
  	pop(val){
  		console.log(val)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
