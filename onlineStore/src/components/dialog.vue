<template>
  <div class="mask" v-if="show" @click.stop="onClose">
  	<transition name="fade">
	  	<div class="content" v-if="show" >
	  		<a href="javascript:;" >&times;</a>
	  		<div>
	  			<slot></slot>
	  		</div>
	  	</div>
  	</transition>
  </div>
</template>

<script>
export default {
	props:{
		"show":{
			type:Boolean,
			default:false
		}
	},
  data () {
    return {
    }
  },
  components:{
  },
  methods:{
  	onClose(){
  		this.$emit("onClose")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
	.fade-enter-active,.fade-leave-enter{
		transition: all 1s;
	}
	.fade-enter{
		transform: translateY(-500px);
	}
	.mask{position: fixed;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.3); z-index: 1000;}
	.mask .content{width: 50%;max-height: 50%; padding: 15px;position: absolute;top: 50%; left: 50%; background: #fff; transform: translate(-50%, -50% ); overflow: auto;}
</style>
