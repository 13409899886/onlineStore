<template>
  <div class="layout">
    <div class="side side-left">
    	<div class="side-block">
    		<h2>全部</h2>
    		<template v-for="item in productList">
    			<h3>{{item.title}}</h3>
	    		<ul :class="{last:item.last}">
	    			<li v-for="item in item.list"><a href="#">{{item.name}}</a><span v-if="item.hot" class="hot">HOT</span></li>
	    		</ul>
    		</template>
    	</div>
    	<div class="side-block">
    		<h2>最新消息</h2>
    		<template >
	    		<ul class="last">
	    			<li v-for="item in newsList"><a href="#">{{item.name}}</a><span v-if="item.hot" class="hot">HOT</span></li>
	    		</ul>
    		</template>
    	</div>
    </div>
    <div class="side side-right">
    	<slide :slideList="slideList"></slide>
    	<div class="product-grid">
    		<div class="grid" v-for="item in buyList">
    			<div class="product-picture" :style="'backgroundImage:url('+item.picUrl+')'"></div>
    			<div class="product-intro">
    				<h3>{{item.title}}</h3>
						<a href="#" class="btn">购买</a>
    			</div>
    		</div>
    	</div>
    </div>
    
  </div>
</template>

<script>
	import Slide from "../components/slide"
	
export default {
  data () {
    return {
    	slideList:[
      	{
      		Url:require("../assets/banner1.jpg")
      	},
      	{
      		Url:require("../assets/jz18.png")
      	}
      ],
    	buyList:[
    		{
    			title:"小霸王",
    			picUrl:"xiaobawang.jpg"
    		},
    		{
    			title:"步步高学习机",
    			picUrl:"xuexiji.jpg"
    		},
    		{
    			title:"oppo照亮你的美",
    			picUrl:"oppo.jpg"
    		},
    		{
    			title:"vivo 让你的耳朵怀孕",
    			picUrl:"vivo.jpg"
    		},
    	],
    	
    	newsList:[
    		{
    				name:"数据统计",
    				hot:false
    			},
    			{
    				name:"流量预测",
    				hot:false
    			},
    			{
    				name:"数据分析",
    				hot:false
    			}
    	],
    	productList:[
	    	{
	    		title:"pc产品",
	    		list:[
	    			{
	    				name:"数据统计",
	    				hot:true
	    			},
	    			{
	    				name:"流量分析",
	    				hot:false
	    			},
	    			{
	    				name:"广告发布",
	    				hot:true
	    			}
	    		]
	    	},
	    	{
	    		title:"移动产品",
	    		last:true,
	    		list:[
	    			{
	    				name:"91助手",
	    				hot:false
	    			},
	    			{
	    				name:"产品助手",
	    				hot:false
	    			},
	    			{
	    				name:"语音识别",
	    				hot:true
	    			}
	    		]
	    	}
    	]
    }
  },
  components:{
  	Slide
  },
  mounted:function(){
  	for(var i=0; i<this.buyList.length;i++){
			this.buyList[i].picUrl=require("../assets/"+this.buyList[i].picUrl)
  	}
	},
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.side{float: left;}
	.side-left{width: 300px;}
	.layout{overflow: hidden;line-height: 1.5; }
	.side-left h2{background: #42B983; color: #fff; padding: 10px;}
		.side-left h3{padding-left: 10px;}
	.side-left ul{border-bottom: 1px solid #ddd; padding-left: 15px;}
	.side-left ul.last{border-bottom: none;}
	.hot{color: #fff; background: red;}
	.side-right{margin-left: 30px;}
	.product-grid{overflow: hidden;padding: 10px; width: 670px;}
	.grid{width: 250px;float: left;border: 1px solid #d8d8d8; border-radius: 5px; padding: 10px; margin-bottom: 15px;margin-right: 15px;display: flex;}
	.grid > div{}
	.product-grid .product-picture{background-repeat: no-repeat; background-position: center center; background-size: cover; width: 100px; height: 100px; /*background-image: url(../../build/logo.png);*/ margin-right: 15px;}
	.product-grid a.btn{padding: 5px 15px; background: #42B983; color: #fff; display: block;max-width: 100px; margin-top: 30px;}
	
	
</style>
