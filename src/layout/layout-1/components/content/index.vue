<template>
<div>
	<aside class="asider12">
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
        	<i-input :value.sync="formItem.val1" v-model.sync="formItem.val1" style="width:130px;"></i-input>
            <i-select v-model.sync="formItem.unit1" style="width:80px;">
                <i-option v-for="item in unitList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Form-item>
        <Form-item :label="lable2">
        	<i-input :value.sync="formItem.val2"  v-model.sync="formItem.val2" style="width:130px;"></i-input>
            <i-select v-model.sync="formItem.unit2" style="width:80px;">
                <i-option v-for="item in unitList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Form-item>
        <Form-item label="备注名">
            <i-input :value.sync="formItem.MemoName" v-model.sync="formItem.MemoName"></i-input>
        </Form-item>
        <Form-item label="样式">
            <Select v-model="formItem.style" style="width:80px;">
                <Option value="solid">solid</Option>
                <Option value="dotted">dotted</Option>
                <Option value="double">double</Option>
            </Select>
            
            <ColorPicker v-model="color4" recommend />
        	
        </Form-item>
        
        <FormItem>
            <Button type="primary" @click="search">查询</Button>
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
	<div class="content12">
		<div class="ComputingPlatform_content">
		    <Tabs type="card">
		        <TabPane label="Table">
		          <div class="TableHead">
		            <Tooltip content="邮件导出" placement="bottom" :transfer="true">
		                 <i class="iconfont icon-xinfeng"></i>
		            </Tooltip>
		             <Tooltip content="excel导出" placement="bottom" :transfer="true" style="position:relative;top:-10px;">
		                 <i class="iconfont icon-excel-export"  style="font-size:34px;"></i>
		            </Tooltip>
		            <Tooltip content="pdf导出" placement="bottom" :transfer="true">
		                 <i class="iconfont icon-daochupdf"></i>
		            </Tooltip>
		          </div>
              
		          <Table border :columns="columns1" :data="outputTable">
		          </Table>
		          <div style="float:right;margin:10px 0;">
		             <Page :total="100" size="small" show-total show-elevator show-sizer></Page>
		          </div>
		         
		        </TabPane>
		        <TabPane label="Chart">标签二的内容</TabPane>
		    </Tabs>
   
 		 </div>
	</div>
  
</div>    
</template>
<script>
import accountApi from '../../../../api/account.js'
export default {
  data() {
    return {
        columns1: [
              {
                  title: 'Remarks',
                  key: 'name',
                  className:'SerialNumber'
              },
              {
                  title: 'NO.',
                  type:"index",
                  width:50,
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'Style',
                  key: 'style',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'Fluid',
                  key: 'Fluid',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'Phase',
                  key: 'Phase',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'T Temperature',
                  key: 'Temperature',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'P Pressure',
                  key: 'Pressure',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'D[kg/m3] Density',
                  key: 'Density',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: ' v[m³/kg] Specific volume',
                  key: 'Specific Volume',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'H [J/kg] Enthalpy',
                  key: 'Enthalpy',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'S[J/kg/K] Entropy',
                  key: 'Entropy',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'O[J/kg] Specific heat at constant volume',
                  key: 'Specific Heat at constant volume',
                  align:'center',
                  className:'SerialNumber'
              },
               {
                  title: 'C[J/kg] Specific heat at constant pressure',
                  key: 'Specific Heat at constant pressure',
                  align:'center',
                  className:'SerialNumber'
              },
               {
                  title: 'U[J/kg] Internal energy',
                  key: 'internal energy',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'V[Pa-s] Dynamic viscosity',
                  key: 'Viscosity',
                  align:'center',
                  className:'SerialNumber'
              },
              {
                  title: 'Thermal Conductivity',
                  key: 'Thermal Conductivity',
                  align:'center',
                  className:'SerialNumber'
              },
              
              {
                  title: '操作',
                  key: 'age',
                  width:100,
                  className:'SerialNumber',
                  align:'center',
                  render: (h, params) => {
                    return h('div', [
                        h('i', {
                            class:'iconfont icon-bianji',
                            style: {
                                marginRight: '5px',
                                cursor:'pointer'
                            },
                            on: {
                                click: () => {
                                  console.log(params);
                                    // this.show(params.index)
                                }
                            }
                        }, ''),
                        h('i', {
                            class:'iconfont icon-xuanxiangkuangqueding',
                            style: {
                                marginRight: '5px',
                                cursor:'pointer'
                            },
                            on: {
                                click: () => {
                                    //this.remove(params.index)
                                }
                            }
                        },),
                        h('i', {
                            class:'iconfont icon-delete2',
                            style: {
                                cursor:'pointer'
                            },
                            on: {
                                click: () => {
                                    //this.remove(params.index)
                                    console.log(params)
                                    var index = params.index; 
                                    this.outputTable.splice(index, 1);
                                }
                            }
                        }, ),
                        
                    ]);
                  }
              },

          ],
        outputTable: [],
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
                RefrigerantType:'',
                style:'',
                MemoName:'',
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
  	console.log('content');
  },
  methods: {
    	search: function () {
        var val1 = this.lable1;
        var val2 = this.lable2;
        var tableItem = {};
        tableItem['name'] = this.formItem.MemoName;
        tableItem['style'] = this.formItem.style;
        // var array=[];
        // array.push('1');
        // array[val1]='2';
        // console.log(array);
    			accountApi.pointstate('/v1/pointstate?'+this.formItem.unit1+'='+this.formItem.val1+'&'+this.formItem.unit2+'='+this.formItem.val2+'&fluids='+this.formItem.Cryogen)
          .then((res)=>{
              res.map((item,index)=>{
                tableItem[item.key] = item.value;
              })
              this.outputTable.push(tableItem);
                console.log(tableItem) // formItem.MemoName
              
            })
    		
    		
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
        }
		
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
$color-primary: #20a0ff; //#18c79c    
$leftWidth:300px;
$marginLeftWidth:301px;
$headHeight:0;
.asider12 {
	position: absolute;
	left: 0;
	top: $headHeight;
	width: $leftWidth;
	bottom: 0;
	background:#fff;
	// padding-top: 8px;
	border-right: 1px solid #E3E5E9;
	overflow-y: auto;
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

.content12 {
	position: absolute;
	left: $marginLeftWidth;
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
.ComputingPlatform_content{
  background:#fff;
  padding:24px;
  margin:0 20px;
  .TableHead{
    overflow:hidden;
    .icon-excel-export,.icon-exceldaoru{
          font-size:22px;
        }
    i{
      margin:0 10px;
      font-size:22px;
    }
    .ivu-tooltip{
      float:right;
    }
    
  }
   .SerialNumber{
    padding:0;
    .ivu-table-cell{
      padding:0 2px;
    }
   }
}
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


 

