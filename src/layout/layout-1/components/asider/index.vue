<template>
	<aside>
	<h1 style="padding-left:20px;margin-top:20px;">条件输入</h1>
    <i-form :model="formItem" label-position="left" :label-width="55" style="padding:20px 10px 0 20px;">
        <Form-item label="制冷剂">
            <Select v-model="formItem.Cryogen1">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </Form-item>
        <Form-item>
            <Select v-model="formItem.Cryogen2">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </Form-item>
        <Form-item label="条件对">
            <Select v-model="formItem.ConditionalPair">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </Form-item>
        <Form-item label="输入值1">
        	<i-input :value.sync="formItem.val1" style="width:130px;"></i-input>
        	<Select v-model="formItem.unit1" style="width:80px;">
                <Option value="beijing">bar</Option>
                <Option value="shanghai">℃</Option>
                <Option value="shenzhen">pa</Option>
            </Select>
            
        </Form-item>
        <Form-item label="输入值2">
        	<i-input :value.sync="formItem.val2" style="width:130px;"></i-input>
        	<Select v-model="formItem.unit2" style="width:80px;">
                <Option value="beijing">bar</Option>
                <Option value="shanghai">℃</Option>
                <Option value="shenzhen">pa</Option>
            </Select>
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

export default {
	components: {
		
	},
	data() {
		return {
			formItem: {
                input1: '',
                input2: '',
                input3: '',
                Cryogen1:'',
                Cryogen2:'',
                ConditionalPair:'',
                val1:'',
                unit1:'',
                val2:'',
                unit2:'',
            },
            color4: '#2D8CF0',
		}
	},
	mounted(){
		
			console.log(this.$router.options.routes)
	},
	methods: {
		handleselect: function (a, b) {
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