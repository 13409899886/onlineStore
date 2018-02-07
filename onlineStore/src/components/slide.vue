<template>
  <div class="" @mousemove="cleartimer" @mouseout="slideAuto">
    <div class="slide" :style="'backgroundImage:url('+slideList[slideIndex].Url+')'">
    	<ul class="pagination">
    		<li @click="goto(pre)">&lt;</li>
    		<li v-for="(item ,index) in slideList" :class="[{'active':index==slideIndex}]" @click="goto(index)">{{index+1}}</li>
    		<li @click="goto(next)">&gt;</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
  		slideList:{
  			type:Array,
  			default:[]
  		}
  	},
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      slideIndex:0,
      img:require("../assets/logo.png"),
    }
  },
  computed:{
  	pre(){
  		if(this.slideIndex>0){
  			return this.slideIndex-1
  		}else{
  			return this.slideList.length-1
  		}
  		
  	},
  	next(){
  		if(this.slideIndex<this.slideList.length-1){
  			return this.slideIndex+1
  		}else{
  			return 0
  		}
  	}
  },
  methods:{
  	goto(index){
  		this.slideIndex=index
  	},
  	slideAuto(){
  		this.timer=setInterval(()=>{
  			this.goto(this.next)
  		},2000)
  	},
  	cleartimer(){
  		clearInterval(this.timer)
  	}
  },
  mounted(){
  	this.slideAuto()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pagination{overflow: hidden;position: absolute;right: 15px; bottom: 10px;}
	.slide{width: 500px; height: 300px; background: url("../assets/banner1.jpg") no-repeat center center; background-size: cover;position: relative;}
	.pagination li{
		float: left; 
		margin-right:10px ;
    border-radius: 100%;
     color: #ffff;
     cursor: pointer;
    }
    .pagination li.active, .pagination li:hover{
    	color : #42B983 ;
    }
</style>
