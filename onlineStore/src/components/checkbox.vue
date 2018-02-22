<template>
  <div class="checkBox">
  		<ul>
  			<li  v-for="(item,index) in radiolist" @click="change(index)" :class="{active:nowIndex.indexOf(index)!==-1}">{{item.text}}</li>
  		</ul>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
    	selectOn:"",
    	nowIndex:[0],
    	isShow:false,
    	radiolist:[
    		{
    			text:"中国",
    			value:"1"
    		},
    		{
    			text:"日本",
    			value:"3"
    		},
    		{
    			text:"德国",
    			value:"2"
    		},
    	]
    }
  },
  methods:{
  	change(index){
  		if(this.nowIndex.indexOf(index)!==-1){
  			var Index=this.nowIndex.indexOf(index)
  			console.log(Index)
			this.nowIndex.splice(Index,1)
			
  		}else{
  			this.nowIndex.push(index)
  		}
  		this.$emit("onchange",this.nowIndex)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.checkBox{margin-top: 15px;}
	ul{overflow: hidden;}
	li{margin-left: 15px; padding: 5px 15px; border: 1px solid #ddd;float: left; }
	li.active,li:hover{background: #42B983; color: #fff;}
</style>
