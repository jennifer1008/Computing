<template>
	<div class="freezer-container">
		<header12 class="header12">
		</header12>
		<div class="content" v-on:click='closeProEdit' id="projectContent">
			<content12> </content12>
		</div>
	</div>
</template>

<script>

import header12 from './components/header/index.vue';
// import asider12 from './components/asider/index.vue';
import content12 from './components/content/index.vue';
import busConst from '../../busConst.js';
import Emitter from '../../mixins/emitter.js';
export default {
	mixins: [Emitter],
	data() {
		return {
			isEdit:false,
			asiderShow:true,
		}
	},
	componentName: 'FRProGroupIndex',
	components: {
		header12: header12,
		content12: content12,
	},
	mounted() {
		this.listenEvent();
		document.title = '云智冷计算系统';
		var projectAside = document.getElementById('projectAside');
    	var projectContent = document.getElementById('projectContent');
	},
	methods: {
		listenEvent(){
			this.$on(busConst.project__edit, (data) => {
		        
		    });
		},
		closeProEdit(){
			// this.broadcast('FRProGroup', busConst.project__edit, {
		 //        Edit:this.isEdit
		 //    });
		},
		slideLeft(){
			this.asiderShow = !this.asiderShow;
			projectAside.style.left = '-166px';
      		projectContent.style.left = '40px';
		},
		slideRight(){
			this.asiderShow = !this.asiderShow;
			projectAside.style.left = '0';
      		projectContent.style.left = '205px';
		}

	}
}
</script>

<style lang="scss">
$color-primary: #20a0ff; //#18c79c    
$leftWidth:300px;
$marginLeftWidth:301px;
$headHeight:61px;
.freezer-container {
	width: 100%;
	height: 100%;
}

.header12 {
	position: absolute;
	height: $headHeight;
	left: 0;
	right: 0;
	top: 0;
	border-bottom: 1px solid #E1E4E8;
}



.content {
	position: absolute;
	left: 0;
	right: 0;
	top: $headHeight;
	bottom: 0;
	overflow-y: auto;
	background: #F0F2F5;
	&::-webkit-scrollbar-track {
		background-color: #F5F5F5;
		border-radius: 50%;
	}
	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		background-color: #F5F5F5;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #808080;
	}
}
</style>