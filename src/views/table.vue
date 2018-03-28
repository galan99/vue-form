<!--Table 模板-->
<template>
    <div class="conbox">
        <h1 style="margin-bottom: 15px">基础表格模板(每一列都已定义固定内容)</h1>
        <h6 style="margin-bottom: 15px"> tips: 表格每一行可以设置相应宽度（单位为px），当页面缩放数据过多时，下面可以出现横向滚动 </h6>
        <el-table :data="tableData1" border style="width: 100%">
            <el-table-column prop="accountid" label="大R账号ID" width="180"></el-table-column>
            <el-table-column prop="account" label="大R账号" width="180"></el-table-column>
            <el-table-column prop="sex" label="性别" width="120"></el-table-column>
            <el-table-column prop="times" label="信息送达次数" width="200"></el-table-column>
            <el-table-column prop="custom" label="专属客服" width="180"></el-table-column>
            <el-table-column prop="userstate" label="用户状态" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="120"></el-table-column>
            <el-table-column label="操作" width="330">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="small" type="warning" @click="handleDisable(scope.$index, scope.row)">禁用
                    </el-button>
                    <el-button size="small" type="info" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <h1 style="margin-bottom: 15px;margin-top: 30px">动态表格模板(动态生成每一列和相应数据内容)</h1>
        <el-table :data="tableData2" border style="width: 100%">
            <el-table-column
                v-for="col in dataList2"
                :prop="col.prop" :label="col.label" :key="col.key">
            </el-table-column>
        </el-table>
        <!-- 这种方式没法保证数据统一性，排除 -->
        <!--<el-table :data="tableData1" border style="width: 100%">
            <el-table-column :key='value' v-for='(value,index) in tablecolumn1' :label="value">
                <template scope="scope">
                    {{scope.row.list[index].value}}
                </template>
            </el-table-column>
        </el-table>-->

        <h1 style="margin-bottom: 15px;margin-top: 30px">加入多选框，实现批量操作功能，loading功能</h1>
        <el-table v-loading="load_data" element-loading-text="拼命加载中" :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="70">
            </el-table-column>
            <el-table-column
                v-for="col in dataList3"
                :prop="col.prop" :label="col.label" :key="col.key">
            </el-table-column>
            <el-table-column label="操作" width="330">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="small" type="warning" @click="handleDisable(scope.$index, scope.row)">禁用
                    </el-button>
                    <el-button size="small" type="info" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="botbar clearfix">
            <el-button
                type="danger"
                icon="delete"
                size="small"
                :disabled="batch_select.length === 0"
                @click="on_batch_del"
                slot="handler">
                <span>批量删除</span>
            </el-button>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="sizes, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>

    </div>
</template>
<script type="text/babel">
    export default {
        data: function () {
            return {
                tableData1: [{
                    accountid: '1234',
                    account: '王小虎',
                    sex: '男',
                    times: '1',
                    custom: '客服',
                    userstate: '七日流失',
                    state: '启用'
                }, {
                    accountid: '1234',
                    account: '王小虎',
                    sex: '男',
                    times: '1',
                    custom: '客服',
                    userstate: '七日流失',
                    state: '启用'
                }, {
                    accountid: '1234',
                    account: '王小虎',
                    sex: '男',
                    times: '1',
                    custom: '客服',
                    userstate: '七日流失',
                    state: '启用'
                }, {
                    accountid: '1234',
                    account: '王小虎',
                    sex: '男',
                    times: '1',
                    custom: '客服',
                    userstate: '七日流失',
                    state: '启用'
                }]

                , dataList2: [
                    {label: '日期', prop: 'date'},
                    {label: '名称', prop: 'name'},
                    {label: '其他', prop: 'other'}
                ], tableData2: [{
                    date: '1234',
                    name: '王小虎',
                    other: '其他'
                }]


                , dataList3: [
                    {label: '日期', prop: 'date',key:'1'},
                    {label: '名称', prop: 'name',key:'2'},
                    {label: '其他', prop: 'other',key:'3'}
                ], tableData3: [{
                    date: '1234',
                    name: '王小虎',
                    other: '其他'
                },{
                    date: '1234',
                    name: '王小虎',
                    other: '其他'
                },{
                    date: '1234',
                    name: '王小虎',
                    other: '其他'
                }],
                //批量选择数组
                batch_select: new Array(),
                //当前页码
                currentPage: 1,
                //数据总条目
                total: 0,
                //每页显示多少条数据
                length: 15,
                //请求时的loading效果
                load_data: true,

            }
        },
        created(){
            // 页面创建时执行方法
            this.get_table_data()
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            }, handleDelete(index, row) {
                console.log(index, row);
            }, handleDisable(index, row){
                console.log(index, row);
            }, handleDetail(index, row){
                console.log(index, row);
            },handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            }, handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            // 批量选择
            handleSelectionChange(val) {
                this.batch_select = val;
            },
            // 批量删除
            on_batch_del(){
                this.$confirm('此操作将批量删除选择数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    alert("操作成功！");
                    /*this.$http.post(port_table.batch_del, {
                        params: this.batch_select
                    })
                        .then(({data:{msg}}) => {
                            this.get_table_data()
                            this.$message({
                                message: msg,
                                type: 'success'
                            })
                        })
                        .catch(({status, statusText}) => {
                            this.$message({
                                message: '操作失败！错误原因 ' + statusText + ' 状态码 ' + status,
                                type: 'error'
                            })
                        })*/
                }).catch(() => {
                })
            },
            //获取数据
            get_table_data(){
                this.load_data = false;

                /*this.load_data = true;
                setTimeout(function () {
                    this.load_data = false;
                    console.log(this.load_data);
                },1000);*/
                /*this.$http.get(port_table.list, {
                    params: {
                        page: this.currentPage,
                        length: this.length
                    }
                })
                    .then(({data:{data, page, total}}) => {
                        this.table_data = data
                        this.currentPage = parseInt(page)
                        this.total = parseInt(total)
                        this.load_data = false
                    })
                    .catch(({status, statusText}) => {
                        this.$message({
                            message: '操作失败！错误原因 ' + statusText + ' 状态码 ' + status,
                            type: 'error'
                        })
                    })*/
            }

        }
    }
</script>
<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .el-table td, .el-table th {
        padding: 0;
    }

    .el-pagination{
        float: right;
    }
</style>

