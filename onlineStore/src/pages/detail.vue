<template>
  <div class="layout">
   	
   	<div class="side side-left">
    	<img :src="productList[productActive].Url"/>
    	<div class="side-block">
	    		<ul >
	    			<!--<li  :class="[{active:index==productActive}]" >-->
	    				<router-link v-for="(item,index) in productList" tag="li" :to="{path:'/detail/'+item.Href}" @click.native="productClick(index)">
	    						{{item.name}}
	    				</router-link>
	    			<!--</li>-->
	    		</ul>
    	</div>
    	
    </div>
    <div class="side-right">
    	<keep-alive>
    		<router-view>2312</router-view>
    	</keep-alive>
    </div>
  </div>
</template>

<script>
	
export default {
  data () {
    return {
    	productActive:0,
    	productList:[
	    			{
	    				name:"91助手",
	    				Url:"../../static/logo.png",
	    				Href:"detail0"
	    			},
	    			{
	    				name:"产品助手",
	    				Url:"../../static/jz18.png",
	    				Href:"detail1"
	    			},
	    			{
	    				name:"语音识别",
	    				Url:"../../static/logo.png",
	    				Href:"detail2"
	    			}
	    		]
    }
  },
  components:{
  },
  mounted:function(){
//	let Url=this.$route.path
//	let URl=Url.slice("/detail")
//	console.log(URl)
	},
  methods:{
  	productClick(index){
  		console.log("1323")
  		this.productActive=index;
  		console.log(this.productActive)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.router-link-active{background: #42B983;color: #fff;}
	.side{float: left;}
	.side-left{width: 300px;background: #fff;}
	.layout{overflow: hidden;line-height: 1.5; }
	.side-left h2{background: #42B983; color: #fff; padding: 10px;}
		.side-left h3{padding-left: 10px;}
	.side-left ul{border-bottom: 1px solid #ddd; padding-left: 15px;}
	.side-left ul.last{border-bottom: none;}
	.hot{color: #fff; background: red;}
	.side-right{margin-left: 30px;}
	img{width: 50px;display: block;margin: 0 auto}
	li{margin-bottom: 10px;}	
	li.active,li:hover{background: #42B983; color:#fff;}
	.side-right {margin-left: 310px;  min-height: 150px;background: #fff;}
</style>
