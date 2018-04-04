<!--自动 模板-->
<template>
    <div>
        <!--面包屑-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item 
                    v-for="(item,index) in crumbs"
                    :key="index" 
                    v-if="index>0" 
                    :to="item.href==null ? '':{path:'/auto',query:{anrouter:encodeURIComponent(item.href)}}">
                    {{item.title}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ibox-content">
            <!--搜索条件-->
            <el-form :inline="true" class="demo-form-inline toolbar" ref="searchIpt"> 
                <my-item
                    v-for="(item,index) in searchList"
                    :key="item.name"          
                    :item="item">
                </my-item>
                <el-form-item>                    
                    <template v-for="item in formUi.items">
                        <!--搜索-->
                        <el-button  
                            type="primary"
                            v-if="item.xtype=='submitButton'" 
                            @click="handleSearch">
                            {{item.text}}
                        </el-button>
                        <!--创建-->
                        <el-button 
                            type="primary"
                            v-if="item.xtype=='promptButton'" 
                            @click="handleBuild(item.promptData.form)">
                            {{item.text}}
                        </el-button>                       
                    </template>               
                </el-form-item>
                <hr/>
            </el-form>

            <!--图表-->
            <template v-if="pluginUi">
                <template v-for="item in pluginUi.items" v-if="charBtn">                    
                    <vue-highcharts
                        v-if="item.xtype=='highchartsField'"
                        :Highcharts="Highcharts" 
                        :options="chartOpt1" 
                        ref="lineCharts">
                    </vue-highcharts>                  
                </template>
            </template>

            <!--表格-->
            <el-table v-loading="load_data" element-loading-text="拼命加载中" :data="items" border style="width: 100%" v-if="gridUi.columns">
                  <el-table-column
                        v-for="item in gridUi.columns" 
                        :prop="item.dataIndex" 
                        :label="item.text"
                        :key="item.id"
                        :sortable="item.sortable == 'true'"                         
                        min-width="100">
                        <template slot-scope="scope">
                            <div :style="{textAlign:item.align}">
                                <el-popover trigger="hover" placement="top" v-if="item.xtype=='image'">
                                    <img :src="scope.row[item.dataIndex]" class="limitImg" v-if="scope.row[item.dataIndex]">
                                    <span slot="reference" class="name-wrapper">
                                        <img :src="scope.row[item.dataIndex]" class="IM" v-if="scope.row[item.dataIndex]">
                                    </span>
                                </el-popover>
                                <div class="imageslist" v-if="item.xtype=='images'">
                                    <el-popover trigger="hover" placement="top" v-for="list in scope.row[item.dataIndex]" :key="list">
                                        <img :src="list" class="limitImg" v-if="list">
                                        <span slot="reference" class="name-wrapper">
                                            <img :src="list" class="IM" v-if="list">
                                        </span>
                                    </el-popover>
                                </div>
                                <div v-else-if="item.xtype=='html'" v-html="scope.row[item.dataIndex]"></div>
                                <div v-else-if="item.xtype=='video'">
                                    <video :src="scope.row[item.dataIndex]" controls="controls" width="360" height="180"></video>
                                </div>
                                <div v-else>{{scope.row[item.dataIndex] | setLength(item.length)}}</div>
                            </div>
                        </template>                      
                    </el-table-column>
                  <el-table-column label="操作" min-width="240" width="240" v-if="gridUi.operation.length">
                      <template slot-scope="scope">
                          <template v-for="item in gridUi.operation">
                              <!--编辑-->
                              <el-button 
                                  size="small" 
                                  type="primary"
                                  v-if="item.xtype=='promptButton'" 
                                  @click="handleEdit(item.promptData.form,scope.row)">
                                  {{item.text}}
                              </el-button>
                              <!--删除-->
                              <el-button 
                                  size="small" 
                                  type="danger"
                                  v-if="item.xtype=='deleteButton'" 
                                  @click="handleDelete(item.url, scope.row)">
                                  {{item.text}}
                              </el-button>
                              <!--跳转-->
                              <el-button 
                                  size="small" 
                                  type="success"
                                  v-if="item.xtype=='jumpButton'" 
                                  @click="handleJump(scope.row)">
                                  {{item.text}}
                              </el-button>
                          </template>
                      </template>
                  </el-table-column>
              </el-table>
              <div class="botbar clearfix">
                  <el-pagination
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :page-sizes="pageSizeArray"
                      :page-size="pageSize"
                      layout="sizes, prev, pager, next"
                      :total="totalPage">
                  </el-pagination>
              </div>
        </div>
             
        <!--编辑、创建-->
        <el-dialog :title="title" :visible.sync="editActivityMessage" @close="closelog('form-preview')">
            <el-form class="demo-ruleForm" :model="editForm" label-width="120px" size='small' ref="form-preview">
                <my-item
                    v-for="(item,index) in formItemList"
                    :key="item.name"          
                    :item="item"
                    v-model= "editForm[item.name]">
                </my-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSave('form-preview')">确 定</el-button>
                    <el-button @click="editActivityMessage = false">取 消</el-button>
                </el-form-item>         
            </el-form>
        </el-dialog>
    </div>
</template>
<script type="text/babel">
    import VueHighcharts from 'vue2-highcharts'
    import {Ajax} from '../utils'

    export default {
        components: {
            VueHighcharts
        },       
        data: function () {
            return {
                searchList:[],//搜索表单
                formItemList: [
                    {
                      "xtype": "checkField",
                      "text": "多选框",
                      "name": "check",
                      "value": ["C"],                     
                      "disabled": false,
                      "placeholder": "请输入一些文本",
                      "required":true, 
                      "data":[
                        {
                            "label":'选项一',
                            "value":"A",
                        },
                        {
                            "label":'选项二',
                            "value":"B",
                        },
                        {
                            "label":'选项三',
                            "value":"C",
                        },
                      ],                    
                    },    
                    {
                      "xtype": "htmlEditorField",
                      "text": "這是富文本",                      
                      "name": "ueditortext",
                      "value": "<p>這是段落</p><a href=''>這是超鏈接</a>",
                      "disabled": false,
                      "placeholder": "请输入一些文本內容",
                      "required":true, 
                    },
                ],//编辑和添加表单
                load_data: false,// 请求时的loading效果
                editActivityMessage: false,// 编辑弹窗状态
                pageSizeArray : this.$pageSizeArray,  //翻页类型列表
                totalPage: 10,                        // 总页数
                curPage: 1,                           // 当前页
                pageSize: 10,                         // 每页展示条目数
                sort : 1,
                editForm: {},   //动态渲染表单
                items: [],      //table列表数据
                charBtn:false,//图表更新开关
                pluginUi:'',//插件列表
                gridUi:'',//表格ui
                formUi:'',//搜索表单ui
                routerUrl:decodeURIComponent(this.$route.query.anrouter),//渲染ui地址
                tableUrl:'',//渲染table数据地址
                editjson:{},//编辑、添加的数据以及请求url,请求方式 
                title:'编辑',//编辑标题
                crumbs:[],//面包屑
                chartOpt1: {
                    chart: {
                        type: 'spline'                              // 图表类型
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        valuePrefix: '',                         // 提示值前缀
                        valueSuffix: '',                         // 提示值后缀
                        crosshairs: true,                         // 设置准星线样式
                        shared: true                              // 共享的提示框*/
                    },
                    credits: {                                     // 去除版权
                        enabled: false
                    },
                    legend: {                                      // 设置主标题位置
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#666666',
                                lineWidth: 1
                            }
                        }
                    },
                    xAxis: {
                        categories: []
                    },
                    yAxis: {
                        title: {
                            text: '收入额度'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '元';
                            }
                        }
                    },
                    series: [{
                        name: '',
                        data: []
                    }]
                },//图表数据               
            }
        },
        filters: {
            //限制table字段长度
            setLength: function(value,length){
                if(length){
                    value = value.substring(0,length)+'...'
                }
                return value
            }
        },
        created(){          
            this.getUi()
            
            /*Ajax('get','/api/table',{}).then(function(data){
              console.log(data)
            })*/
        },
        methods:{
            //重置表单数据
            setDefaultValue() {                               
                const formData = { ...this.editForm }
                this.formItemList.forEach(item => {
                    const { name, value} = item;
                    if (formData[name] === undefined || formData[name] === null) {

                    }
                    formData[name] = value
                    this.editForm[name] = value
                    if (item.id) {
                        this.editForm.id = item.id
                    }
                })

                this.$emit('input', { ...formData })
            },
            //渲染页面ui
            async getUi(){
                const result = await Ajax('get','/api/table',{});
                console.log(result)
                if(result.data){
                    this.gridUi = result.data[0].grid; //表格ui
                    this.formUi = result.data[0].form; //搜索ui
                    this.tableUrl = this.gridUi.url //this.gridUi.url;
                    this.crumbs = result.data[0].breadCrumb; //面包屑


                    //匹配搜索表单
                    if(this.formUi.items.length){
                        this.searchList = [];
                        this.formUi.items.forEach(val => {
                            if(val.xtype==='textField' || val.xtype==='selectField' || val.xtype==='dateField'){
                                this.searchList.push(val)
                            }
                        })
                        this.getBlockList()                              
                    }
                }
            },
            //获取table列表
            getBlockList() {
                this.load_data = true;
                let postData = {
                    page: this.curPage,                  // 分页开始值，默认为0
                    pageSize: this.pageSize,             // 返回的数量, 默认15
                    sort: this.sort,                     // 排序方法，0为'ASC', 1为'DESC'
                };
                this.searchList.forEach((val) => {
                    postData[val.name] = val.value;
                })
                this.$get('/wandao/app').then((res) => {
                  let data = res.data;
                  console.log(data)
                  if(data.code==0){
                    this.items =  data.data.items;
                    this.totalPage = data.data.count;
                  }
                }).catch((res) => {
                  this.$message.error('请求出错，请稍候再试');
                })
                this.load_data = false;
            },
            //获取图表数据
            async getChartList() {
                let postData = {};
                this.searchList.forEach((val) => {
                    postData[val.name] = val.value;
                })
                if(this.$route.query.id){
                    postData.id = this.$route.query.id;
                }
                const data = await Ajax('get',this.$url+this.chartUi.url,postData);
                if(data.code == 0){
                    this.chartOpt1.xAxis.categories = data.data.unit;
                    this.chartOpt1.series = data.data.list;
                    this.chartOpt1.yAxis.title.text = data.data.left_title;

                    this.$nextTick(function () {
                        this.charBtn = true;
                    })
                }
            },                      
            //搜索
            handleSearch() {
                this.getBlockList();
            },
            //编辑
            handleEdit(json, data) {
                this.title = '编辑';
                json.items.forEach((value) => {
                    Object.keys(data).forEach((key) => {
                        if(value.dataIndex == key){
                            value.value = data[key]
                            value.id = data.id
                        }
                    })
                })                         
                this.editjson = json;
                this.formItemList = this.editjson.items;
                this.setDefaultValue()
                this.editActivityMessage = true;
            },
            //创建
            handleBuild(json) {               
                if(this.editjson.items){
                    this.editjson.items.forEach((val) => {
                        val.value = '';
                    })
                }
                this.title = '添加';
                this.editjson = json;
                this.formItemList = this.editjson.items;
                this.setDefaultValue()     
                this.editActivityMessage = true;             
            },
            //导出
            handleExport(){

            },
            //清空表单数据
            closelog(formName){
                this.$refs[formName].resetFields();
                this.editForm = {};
            }, 
            //（编辑、添加）保存
            handleSave(formName) {
                let that = this;               
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const data = await Ajax(this.editjson.method, this.$url+this.editjson.url, this.editForm);
                        if (data.code == 0) {
                            this.$message(data.msg);
                            this.editActivityMessage = false;
                            this.$refs[formName].resetFields();                 // 重置数据
                            this.getBlockList();
                        }
                    }                      
                });
            },            
            //删除
            handleDelete(url, row) {
                this.$confirm('确认要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$post(this.$url+url+'?id='+row.id).then((res) => {
                        let result = res.data;
                        this.$message(result.msg);
                        this.getBlockList();
                    }).catch((err) => {
                        this.$message.error("请求出错，请稍候再试");
                    });
                })
            },
            //跳转
            handleJump(index, row){
                console.log(row)
                this.$router.push({path:'/auto',query:{anrouter:encodeURIComponent(row.href)}})
            },
            //翻页
            handleCurrentChange(val) {
                this.curPage = val;
                this.getBlockList();
            }, 
            handleSizeChange(val) {
                this.pageSize = val;
                this.getBlockList();
            },
        }
    }
</script>
<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .el-pagination {
        float: right;
    }
    .IM{
        width: 50px;
        height: 50px;
    }

    .imageslist .IM{
        margin-right:8px;
    }

    .limitImg {
        max-width: 250px;
        max-height: 250px;
    }
    .videobox{
        text-align:center;
        width:360px;
        height:180px;
        overflow:hidden;
        img{
            width:100%;
        }
    } 
</style>
<style lang="less" type="text/less" rel="stylesheet/less">
    .ibox-content{
        .toolbar{
           .myform{
                margin:10px 10px 0 0;
            }
            .el-button{
                margin-top:10px;
                margin-left:35px;
                &:first-child{
                    margin-left:0;
                }
            }
        }
    }
</style>

