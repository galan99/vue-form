<!--左侧导航，三层循环 -->
<template>
    <!--v-loading.fullscreen.lock="fullscreenLoading"-->
    <div class="sidebar" >
        <el-menu ref="slider" 
            :default-active="onRoutes" 
            class="el-menu-vertical-demo" 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened 
            router 
            @select="handleSelect">
            <template  v-for="item1 in permissionMenus">
                <template v-if="item1._child">
                    <el-submenu :index="item1.id">
                        <template slot="title">{{item1.name}}</template>
                        <template v-for="item2 in item1._child">
                            <template v-if="item2._child">
                                <el-submenu :index="item2.id">
                                    <template slot="title">{{item2.name}}</template>
                                    <el-menu-item v-if="item1.render != 0" :index="item3.front_route" v-for="item3 in item2._child" :key="item3.id">
                                        {{item3.name}}
                                    </el-menu-item>
                                    <el-menu-item 
                                        v-if="item1.render == 0"  
                                        v-for="item3 in item2._child"
                                        :key="item3.id"
                                        :index="encodeURIComponent(item3.route)" 
                                        :route="{path:'/auto',query:{anrouter:encodeURIComponent(item3.route)}}"
                                    >
                                        {{item3.name}}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item v-if="item1.render != 0" :index="item2.front_route">
                                    {{item2.name}}
                                </el-menu-item>
                                <el-menu-item v-if="item1.render == 0" :index="encodeURIComponent(item2.route)" :route="{path:'/auto',query:{anrouter:encodeURIComponent(item2.route)}}">
                                    {{item2.name}}
                                </el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item v-if="item1.render != 0" :index="item1.front_route" >{{item1.name}}</el-menu-item>
                    <el-menu-item v-if="item1.render == 0" :index="encodeURIComponent(item1.route)" :route="{path:'/auto',query:{anrouter:encodeURIComponent(item1.route)}}">{{item1.name}}</el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>


<script type="text/babel">
    export default {
        data: function () {
            return {
                permissionMenus: [],
                fullscreenLoading:false,
                onRoutes:this.$route.path.replace('/', ''),
            }
        }, 
        watch: {
            '$route' (to, from) {
                if(this.$route.query.anrouter){
                    this.onRoutes = this.$route.query.anrouter;
                }else{
                    this.onRoutes = this.$route.path.replace('/', '')
                }
            }
        },
        created(){
            let oldrouter = [
                {
                    data:"首页",
                    depth:0,
                    front_route:"home",
                    id:"50",
                    name:"首页",
                    parent:"0",
                    route:"/site/index",
                    sort:"0",
                    status:"1",
                    statusText:"显示",
                },
                {
                    data:"常规页面",
                    depth:0,
                    front_route:"",
                    id:"246",
                    name:"常规页面",
                    parent:"0",
                    route:"/im/im-group-inform/*",
                    sort:"10",
                    status:"1",
                    statusText:"显示",
                    _child: [
                        {
                            data:"测试",
                            depth:1,
                            front_route:"other",
                            id:"247",
                            name:"列表",
                            parent:"246",
                            route:"/forum/common-config/list",
                            sort:"12",
                            status:"1",
                            statusText:"显示",
                        },
                    ]
                },
                {
                    data:"动态表单测试1",
                    depth:0,
                    front_route:"/post/test?v",
                    id:"3",
                    name:"动态表单测试1",
                    parent:"0",
                    route:"/post/test?v",
                    sort:"0",
                    status:"1",
                    statusText:"显示",
                    render:"0", //0=不渲染，1=渲染
                },
                {
                    data:"动态表单测试2",
                    depth:0,
                    front_route:"",
                    id:"44",
                    name:"动态表单测试2",
                    parent:"0",
                    route:"/im/im-group-inform/*",
                    sort:"10",
                    status:"1",
                    statusText:"显示",
                    render:"0", //0=不渲染，1=渲染
                    _child: [
                        {
                            data:"动态表单二级",
                            depth:1,
                            front_route:"/get/test?v=546",
                            id:"45",
                            name:"动态表单二级",
                            parent:"44",
                            route:"/get/test?v=546",
                            sort:"0",
                            status:"1",
                            statusText:"显示",                            
                            render:"0", //0=不渲染，1=渲染
                        },
                    ]
                },
            ];

            this.permissionMenus = oldrouter;
        }, 
        computed: {
            permissionMenus1: function(){

            },
        }, 
        methods: {
            handleSelect(val){
                let name = '';
                this.permissionMenus.forEach((first) => {
                    if(first._child){
                        first._child.forEach((two) => {
                            if(two._child){
                                two._child.forEach((three) => {
                                    if(val == three.front_route){
                                        name = three.name;
                                    }
                                })
                            }else{
                                if(val == two.front_route){
                                    name = two.name;
                                }
                            }
                        })
                    }else{
                        if(val == first.front_route){
                            name = first.name;
                        }
                    }
                })
            },
        },
    }
</script>

<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 80px;
        bottom: 0;
        background: #324157;
        overflow-y: auto;
        ul {
            height: 100%;
        }
    }
</style>
