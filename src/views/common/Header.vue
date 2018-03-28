<template>
    <div class="header">
        <div class="logo">
            <img src="../../assets/img/logo.png">
        </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" :src=userimg>
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="mdfpassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script type="text/babel">
    export default {
        data() {
            return {
                username: 'admin',
                userimg: ''
            }
        },
        created(){
            //this.username = localStorage.getItem('username');
            this.userimg = require("../../assets/img/me.jpg");
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    
                } else if (command == 'mdfpassword') {
                    // 跳转到修改密码页面
                }
            }
        }
    }
</script>
<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        .logo {
            float: left;
            width: 250px;
            text-align: center;
            img {
                width: 80px;
                vertical-align: top;
            }
        }
        .p-layout-collapse {
            float: left;
            width: 70px;
            cursor: pointer;
            background-color: hsla(0, 0%, 100%, .1);
            text-align: center;
            color: #fff;
            .fa {
                display: inline-block;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                &:before {
                    content: "\f0c9";
                }
            }
        }

        .user-info {
            float: right;
            padding-right: 50px;
            font-size: 16px;
            color: #fff;
            .el-dropdown-link {
                position: relative;
                display: inline-block;
                padding-left: 50px;
                color: #fff;
                cursor: pointer;
                vertical-align: middle;
            }
            .user-logo {
                position: absolute;
                left: 0;
                top: 15px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
