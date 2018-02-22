<template>
  <div class="selectBox">
  	<div class="selection" @click="toggle">{{selectList[nowIndex].text}}</div>
  	<div class="selectionList" v-if="isShow">
  		<ul>
  			<li v-for="(item,index) in selectList" @click="change(index)" >{{item.text}}</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
    	selectOn:"",
    	nowIndex:0,
    	isShow:false,
    	selectList:[
    		{
    			text:"中华人民",
    			value:"1"
    		},
    		{
    			text:"美国",
    			value:"3"
    		},
    		{
    			text:"日本",
    			value:"2"
    		},
    	]
    }
  },
  methods:{
  	change(index){
  		this.nowIndex=index,
  		this.toggle()
  		this.$emit("onchange",this.selectList[this.nowIndex].text)
  	},
  	toggle(){
  		this.isShow=!this.isShow
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.selectBox{
		position:relative; padding:5px 15px ; border: 1px solid #ddd;max-width: 100px;
	}
	ul{overflow: hidden;}
	.selection{
		position: relative;		padding-right: 15px;overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;max-width: 100%;overflow: hidden;
	}
	.selection:before{content: ""; position: absolute;right: 5px;top: 50%; transform: translateY(-50%); width: 0; height: 0;border: 5px solid transparent; border-top-color:#ddd;}
	.selectionList{position: absolute;top: 30px;left: 0px;min-width: 100%;background: #fff;}
	.selectionList li:hover{background: #f0f0f0;}
</style>
