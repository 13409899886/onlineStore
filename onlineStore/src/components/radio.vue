<template>
  <div class="radioBox">
  		<ul>
  			<li  v-for="(item,index) in radiolist" @click="change(index)" :class="{active:index==nowIndex}">{{item.text}}</li>
  		</ul>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
    	selectOn:"",
    	nowIndex:0,
    	isShow:false,
    	radiolist:[
    		{
    			text:"一个月",
    			value:"1"
    		},
    		{
    			text:"半年",
    			value:"3"
    		},
    		{
    			text:"一年",
    			value:"2"
    		},
    	]
    }
  },
  methods:{
  	change(index){
  		this.nowIndex=index;
  		this.$emit("onchange",this.radiolist[this.nowIndex].text)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.radioBox{margin-top: 15px;}
	ul{overflow: hidden;}
	li{margin-left: 15px; padding: 5px 15px; border: 1px solid #ddd;float: left; }
	li.active,li:hover{background: #42B983; color: #fff;}
</style>
