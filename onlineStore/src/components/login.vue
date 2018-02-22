<template>
  <div class="">
  	<div v-if="userErr.statu">{{this.userErr.statu}}</div>
  	<input type="text" v-model="username" @click.stop=""/>
  	<input type="text" v-model="password" @click.stop=""/>
  	<button type="button" @click.stop="onlogin" >登陆</button>
  </div>
</template>

<script>
export default {
	
  data () {
    return {
    	username:"",
    	password:"",
    	userErr:{
    		statu:false,
    		msg:""
    	}
    }
  },
  components:{
  
  },
  methods:{
  	onlogin(){
  		if(this.username!=""&&this.password!=""&&!this.userErr.statu){
//			this.$http.post("api/login").then((data)=>{
//			})
  			this.$emit("has-log")
  		}
  	}
  },
  watch:{
  	username(){
  		if(!/@/g.test(this.username)){
  			this.userErr.statu=true
  			this.userErr.statu="不包含@"
  		}else{
  			this.userErr.statu=false
  		}
  	},
  	password(){
  		if(!/^\w{1,6}$/g.test(this.password)){
  			this.userErr.statu=true
  			this.userErr.statu="非六位"
  		}else{
  			this.userErr.statu=false
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
