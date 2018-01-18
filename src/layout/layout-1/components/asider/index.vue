<template>
	<aside>
	<h1 style="padding-left:20px;margin-top:20px;">条件输入</h1>
    <i-form :model="formItem" label-position="left" :label-width="55" style="padding:20px 10px 0 20px;">
        <Form-item label="制冷剂">
            <i-select v-model.sync="formItem.RefrigerantType" @on-change="RefrigerantTypeChange">
                <i-option v-for="item in RefrigerantTypeList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Form-item>
        <Form-item>
            <i-select v-model.sync="formItem.Cryogen">
                <i-option v-for="item in CryogenList" :value="item">{{item}}</i-option>
            </i-select>
        </Form-item>
        <Form-item label="条件对">
            <i-select v-model.sync="formItem.ConditionalPair" @on-change="ConditionalPairChange">
                <i-option v-for="item in ConditionalPairList" :value="item.value+'/'+item.label">{{ item.label }}</i-option>
            </i-select>
            
        </Form-item>
        <Form-item :label="lable1">
        	<i-input :value.sync="formItem.val1" style="width:130px;"></i-input>
            <i-select v-model.sync="formItem.unit1" style="width:80px;">
                <i-option v-for="item in unitList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Form-item>
        <Form-item :label="lable2">
        	<i-input :value.sync="formItem.val2" style="width:130px;"></i-input>
            <i-select v-model.sync="formItem.unit2" style="width:80px;">
                <i-option v-for="item in unitList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Form-item>
        <Form-item label="备注名">
            <i-input :value.sync="formItem.input3"></i-input>
        </Form-item>
        <Form-item label="样式">
            <Select v-model="formItem.Cryogen" style="width:80px;">
                <Option value="beijing">solid</Option>
                <Option value="shanghai">dotted</Option>
                <Option value="shenzhen">double</Option>
            </Select>
            
            <ColorPicker v-model="color4" recommend />
        	
        </Form-item>
        
        <FormItem>
            <Button type="primary">查询</Button>
            <Button type="ghost" style="margin-left: 8px">复位</Button>
        </FormItem>
    </i-form>
	 <div>	
		<h3 style="padding-left:20px;margin-top:20px;">查询历史</h3>
		<ul>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	 </div>  
	</aside>
</template>

<script>
import accountApi from '../../../../api/account.js'
export default {
	components: {
		
	},
	data() {
		return {
			formItem: {
                input1: '',
                input2: '',
                input3: '',
                Cryogen:'',
                Cryogen2:'',
                ConditionalPair:'',
                val1:'',
                unit1:'',
                val2:'',
                unit2:'',
                RefrigerantType:''
            },
            lable1:'输入值1',
            lable2:'输入值2',
            color4: '#2D8CF0',
            RefrigerantTypeList:[{
                value:1,
                label:'纯制冷剂'
            },
            {
                value:2,
                label:'混合制冷剂'
            }],
            CryogenList:[],
            ConditionalPairList:[{
                value:'T/P',
                label:'温度/压力'
            },
            {
                value:'T/D',
                label:'温度/密度'
            },
            {
                value:'T/Q',
                label:'温度/干度'
            },
            {
                value:'T/S',
                label:'温度/熵'
            },
            {
                value:'P/D',
                label:'压力/密度'
            },
            {
                value:'P/Q',
                label:'压力/干度'
            },
            {
                value:'P/H',
                label:'压力/焓'
            },
            {
                value:'P/S',
                label:'压力/熵'
            },
            {
                value:'H/S',
                label:'焓/熵'
            }],
            unitList:[{
                value:'T',
                label:'K'
            },
            {
                value:'P',
                label:'pa'
            },{
                value:'D',
                label:'kg/立方米'
            },
            {
                value:'Q',
                label:'0～1'
            },{
                value:'H',
                label:'J/KG'
            },{
                value:'S',
                label:'J/KG/K'
            }]
		}
	},
	mounted(){
		
			// console.log(this.$router.options.routes)
	},
	methods: {
		handleselect: function (a, b) {
		},
        RefrigerantTypeChange(value){
            if(value===1){
                accountApi.purefluids().then((res)=>{
                    this.CryogenList = res;
                })
            }else{
                accountApi.mixfluids().then((res)=>{
                    this.CryogenList = res;
                })
            }
        },
        ConditionalPairChange(value){
            this.lable2 = value.split('/')[3]+'值';
            this.lable1 = value.split('/')[2]+'值';
            this.unitList.map((item,index)=>{
                if(item.value==value.split('/')[0]){
                    this.formItem.unit1 = item.value;
                }else if(item.value==value.split('/')[1]){
                    this.formItem.unit2 = item.value;
                } 
            })
        },
		handleopen() {
			
		},
		handleclose() {
			//console.log('handleclose');
		},
		isShow(ownermodules) {
			if (ownermodules) {
				return (ownermodules.indexOf('myProject') > -1);
			} else {
				return true;
			}
		}
	}
}
</script>

<style  lang="scss">
.ivu-form{
	.ivu-form-item{
		margin-bottom:12px;
		.ivu-form-item-label{
			font-size:14px;
			padding:10px 0;
		}
	}

}

</style>