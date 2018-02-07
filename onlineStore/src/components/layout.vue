<template>
  <div>
		<div class="app-header">
			<img :src="logoUrl" class="logoPic"/>
			<div class="app-header-right">
				<ul>
					<li @click="logPop">登陆</li>
					<li @click="regPop">注册</li>
					<li @click="aboutPop">关于</li>
				</ul>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			footer
		</div>
		<my-dialog :show="isLogShow" @onClose="onClose('isLogShow')" >
    	<login></login>
    </my-dialog>
    <my-dialog :show="isRegShow" @onClose="onClose('isRegShow')" >
    	<p>reg</p>
    </my-dialog>
    <my-dialog :show="isAboutShow" @onClose="onClose('isAboutShow')" >
    	<p>about</p>
    </my-dialog>
  </div>
</template>

<script>
	import Dialog from "./dialog"
	import Login from "./login"
	export default {
  data () {
    return {
    	logoUrl:require("../assets/logo.png"),
    	isLogShow:false,
    	isRegShow:false,
    	isAboutShow:false,
    }
  },
  components:{
  	myDialog:Dialog,
  	Login
  },
  methods:{
  	logPop(){
  		this.isLogShow=true
  	},
  	regPop(){
  		this.isRegShow=true
  	},
  	aboutPop(){
  		this.isAboutShow=true
  	},
  	onClose(attr){
  		console.log("onClose")
  		this[attr]=false
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	*{box-sizing: border-box;}
	.app-header{padding: 15px; background: #ddd;}
	.logoPic{width: 60px;}
	.app-header-right{float: right;}
	.app-header-right li{float: left; padding: 0 15px; cursor:pointer;line-height: 60px;}
	.app-footer{text-align: center;line-height: 60px; font-size: 40px; background: #ddd;}
	.app-content{width: 1000px;padding: 30px 0; margin: auto;}
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    font-size: 14px;
}
ul{list-style: none;}
body {
    line-height:1; color: #333; font-size: 12px;
}

:focus {
	outline: 1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    text-decoration:none;
    color: #333;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
</style>
