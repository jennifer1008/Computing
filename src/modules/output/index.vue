
<template>
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
          <Table border :columns="columns1" :data="data1">
          </Table>
          <div style="float:right;margin:10px 0;">
             <Page :total="100" size="small" show-total show-elevator show-sizer></Page>
          </div>
         
        </TabPane>
        <TabPane label="Chart">标签二的内容</TabPane>
    </Tabs>
   
  </div>
    
</template>
<script>

export default {
  data() {
    return {
        columns1: [
              {
                  title: 'Remarks',
                  key: 'name'
              },
              {
                  title: 'NO.',
                  type:"index"
              },
              {
                  title: 'Style',
                  key: 'age',
              },
              {
                  title: 'Fluid',
                  key: 'age',
              },
              {
                  title: 'Phase',
                  key: 'age',
              },
              {
                  title: 'T Temperature',
                  key: 'age',
              },
              {
                  title: 'P Pressure',
                  key: 'age',
              },
              {
                  title: 'D[kg/m3] Density',
                  key: 'age',
              },
              {
                  title: ' v[m³/kg] Specific volume',
                  key: 'age',
              },
              {
                  title: 'H [J/kg] Enthalpy',
                  key: 'age',
              },
              {
                  title: 'S[J/kg/K] Entropy',
                  key: 'age',
              },
              {
                  title: 'O[J/kg] Specific heat at constant volume',
                  key: 'age',
              },
               {
                  title: 'C[J/kg] Specific heat at constant pressure',
                  key: 'age',
              },
               {
                  title: 'U[J/kg] Internal energy',
                  key: 'age',
              },
              {
                  title: 'V[Pa-s] Dynamic viscosity',
                  key: 'age',
              },
              {
                  title: '操作',
                  key: 'age',
                  width:100,
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
                                }
                            }
                        }, ),
                        
                    ]);
                  }
              },

          ],
          data1: [
              {
                  name: '压缩机吸气',
                  age: 18,
                  address: 'New York No. 1 Lake Park',
                  date: '2016-10-03'
              },
              {
                  name: 'Jim Green',
                  age: 24,
                  address: 'London No. 1 Lake Park',
                  date: '2016-10-01'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-02'
              },
              {
                  name: 'Jon Snow',
                  age: 26,
                  address: 'Ottawa No. 2 Lake Park',
                  date: '2016-10-04'
              }
          ]
    }
  },
  mounted(){
  },
  methods: {
    
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.ComputingPlatform_content{
  background:#fff;
  padding:24px;
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
   
}
</style>


 

