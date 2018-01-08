/**
 * 定义全局事件常量
 */
// 命名方式 使用 namespace_controller

export default {
    // 项目组改变
    proG_Changed: 'proG_Changed',
    // 变量组更新
    unitGroups_Update: 'unitGroups_Update',
    // 单个变量添加
    singleVariable_Add: 'singleVariable_Add',
    unit_bindVariable_showDialog: 'unit_bindVariable_showDialog',
    unit_bindVariable_closeDialog: 'unit_bindVariable_closeDialog',
    //项目预览
    project__preview: 'project__preview',
    //项目预览下的变量预览
    project__variable__preview: 'project__variable__preview',
    //批量添加
    batchVariable_Add: 'batchVariable_Add',
    //采集任务添加
    task_AddOrEdit: 'task_AddOrEdit',
    //项目左侧菜单
    project__edit: 'project__edit',
    //单元左侧菜单
    unit__edit: 'unit__edit',
    //单元变量组删除后表格刷新
    unit__delete: 'unit__delete' ,  
    //添加用户
    user__add:'user__add',
    //角色预览
    role__preview:'role__preview',
    //角色添加或编辑
    role_Add:'role_Add',
    //购买项目ID
    MyProjectId__buy:'MyProjectId__buy',
    //分配项目ID
    MyProjectId__add:'MyProjectId__add',
    //分配项目ID预览
    MyProjectId__preview:'MyProjectId__preview',
    //分配项目ID角色编辑
    MyProjectId__roleEdit:'MyProjectId__roleEdit',
    //分配项目ID角色编辑修改用户角色
    MyProjectId__userRoleEdit:'MyProjectId__userRoleEdit',
    //用户认证
    User__upGrate:'User__upGrate',
    //用户认证信息
    User__AuthenticationInfo:'User__AuthenticationInfo',
    //新建报警和编辑报警
    alarm_Add: 'alarm_Add',
    //选择变量
    choseVariable:'choseVariable',
    //插入变量
    insertVariable:'insertVariable',
    //报警部分导出数据
    ExportData:'ExportData',
    //查看报警
    CheckAlarm:'CheckAlarm',
    //历史数据
    historyData__ExportData:'historyData__ExportData',
    //添加报警组
    AlarmGroup_Update:'AlarmGroup_Update',
    //数据曲线
    DataCurve:'DataCurve'
 }