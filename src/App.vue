<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.clearfix{
    overflow: hidden;
}
.toolbar hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
*{padding:0;margin:0;}
.header{
    background-color: #222c3d;
}
.login-wrap{
    background: #324157;
}
.plugins-tips{
    background: #eef1f6;
}
.plugins-tips a{
    color: #20a0ff;
}
.el-upload--text em {
    color: #20a0ff;
}
.pure-button{
    background: #20a0ff;
}
* {
    margin: 0;
    padding: 0;
}

html, body, #app, .wrapper {
    width: 100%;
    height: 100%;
    min-width: 1350px;
    overflow-y: hidden;
}

body {
    font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}

a {
    text-decoration: none
}

.content {
    background: none repeat scroll 0 0 #f3f3f4;
    position: absolute;
    left: 250px;
    right: 0;
    top: 80px;
    bottom: 0;
    width: auto;
    padding: 25px;
    box-sizing: border-box;
    min-width: 1100px;
    overflow: auto;
}

.ibox-content {
    background-color: #fff;
    color: inherit;
    padding: 15px 20px 20px;
    border-color: #e7eaec;
    -webkit-border-image: none;
    -o-border-image: none;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
}

.crumbs {
    margin-bottom: 20px;
}

.pagination {
    margin: 20px 0;
    text-align: right;
}

.plugins-tips {
    padding: 20px 10px;
    margin-bottom: 20px;
}

.el-button + .el-tooltip {
    margin-left: 10px;
}

.el-table td, .el-table th {
    padding: 5px 5px;
}

.el-table tr:hover {
    background: #f6faff;
}

.mgb20 {
    margin-bottom: 20px;
}

.move-enter-active, .move-leave-active {
    transition: opacity .5s;
}

.move-enter, .move-leave {
    opacity: 0;
}

/*BaseForm*/
.form-box {
    width: 600px;
}

.form-box .line {
    text-align: center;
}

.el-time-panel__content::after, .el-time-panel__content::before {
    margin-top: -7px;
}

/*Readme*/
.ms-doc .el-checkbox__input.is-disabled + .el-checkbox__label {
    color: #333;
    cursor: pointer;
}

/*Upload*/
.pure-button {
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 3px;
}

.g-core-image-corp-container .info-aside {
    height: 45px;
}

.el-upload--text {
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.el-upload--text img{
    width:100%;
}
.icon-uploader .el-upload--text {
    width: 100px;
    height: 100px;
    line-height: 90px;
    padding:5px;
}

.upload-video .el-upload--text {
    width: auto;
    height: auto;
    line-height: 34px;
}

.el-upload--text .el-icon-upload {
    font-size: 67px;
    color: #97a8be;
    margin: 40px 0 16px;
    line-height: 50px;
}

.el-upload--text {
    color: #97a8be;
    font-size: 14px;
    text-align: center;
}

.el-upload--text em {
    font-style: normal;
}

/*VueEditor*/
.ql-container {
    min-height: 400px;
}

.ql-snow .ql-tooltip {
    transform: translateX(117.5px) translateY(10px) !important;
}

.editor-btn {
    margin-top: 20px;
}
.el-upload-list__item-preview{display:none !important;}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 6px;
    height: 10px;
    background-color: #ffffff;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #ffffff;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #226ec2;
}
.editGoods .el-dialog--tiny{
    width:950px;
    min-width:950px;
}
</style>
