<template>
	<div class="s-header">
		<img class="s-header__logo" :src='sysInfo.sysLogo'>
		</img>
		<i-select :model.sync="model1" style="width:200px">
	        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
	    </i-select>
		<!-- <span class="s-header__sysname">{{sysInfo.sysName}}</span> -->
		<span class="s-header__tools">
		</span>
	</div>
</template>

<script>
import logo from './assets/logo.png';

export default {
	components: {
		
	},
	data() {
		return {
			sysInfo: {
				sysLogo: logo,
				sysName: '云智冷计算系统',
			},
			cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
		}
	},
	methods: {
		ToMonitor(){
			
			// projectApi.getAllProjectList({
			// 	ProvincesId:'',
			//     CitiesId:'',
			//     projectName:'',
			//     ProjectTypeId:'',
			//     pType:''
			// }).then((res)=>{
			// 	if(res.success){
			// 		this.projectList = res.Data.List;
			// 		var ProjectId = this.projectList[0].ProjectId;
			// 		this.$router.push({
			// 	        path: '/Monitor', query: {
			// 	          proId: ProjectId,
			// 	        }
			// 	    });
			// 	}
				
			// });
			
		}
	},
	mounted() {
		
	}
}
</script>

<style scoped lang="scss">
.s-header {
	height: 60px;
	line-height: 60px;
	.s-header__logo {
		margin: 10px 22px 10px 31px;
		display: block;
		float: left;
		height:38px;
	}
	.s-header__sysname {
		font-size: 18px;
	}
	.s-header__tools {
		float: right;
	}
}
</style>