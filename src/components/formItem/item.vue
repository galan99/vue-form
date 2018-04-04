<template>
    <el-form-item :rules="Rules" :label="item.text" :prop="item.name" v-if="canShow" class="myform" ref="inputitem">      
        <!--文本输入框-->
        <el-input 
            v-if="item.xtype==='textField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            type="input" 
            :placeholder="item.placeholder" 
            :disabled="item.disabled">
        </el-input>
        <!--内容输入框-->
        <el-input 
            v-else-if="item.xtype==='textareaField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            type="textarea" 
            :placeholder="item.placeholder" 
            :disabled="item.disabled" 
            :rows="3">
        </el-input>
        <!--数字输入框-->
        <el-input-number 
            v-else-if="item.xtype==='numberField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            type="textarea" 
            :placeholder="item.placeholder" 
            :disabled="item.disabled"
            :min="item.minLendth" 
            :max="item.maxLength">   
        </el-input-number>
        <!--下拉框-->
        <el-select 
            v-else-if="item.xtype==='selectField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            :disabled="item.disabled" 
            :placeholder="item.placeholder">
                <el-option 
                    v-for="o in item.data || ajaxOptions" 
                    :key="o.value" 
                    :label="o.text" 
                    :value="o.value" 
                    :disabled="o.disabled">
                </el-option>
        </el-select>
        <!--单选框-->
        <el-radio-group
            v-else-if="item.xtype==='radioField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            :placeholder="item.placeholder">
            <el-radio
                v-for="o in item.data"
                :key='o.value'
                :label="o.text">
            {{o.label}}
            </el-radio>
        </el-radio-group>
        <!--复选框-->
        <el-checkbox-group 
            v-else-if="item.xtype==='checkField'" 
            v-model="item.value" 
            @input="value => $emit('input', value)" 
            :placeholder="item.placeholder">
            <el-checkbox
                v-for="o in item.data"
                :key='o.value'
                :label="o.text">
            {{o.label}}
            </el-checkbox>
        </el-checkbox-group>
        <!--单张图片上传-->
        <el-upload 
            v-else-if="item.xtype==='imageField'" 
            class="avatar-uploader"
            :action="item.url"
            :show-file-list="false"           
            :on-success="handleAvatarSuccess">
            <img v-if="item.value" :src="item.value" style="width:100%;" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!--多张图片上传-->
        <div v-else-if="item.xtype==='imagesField'" class="img-list">
            <div class="img-content" v-for="(list,index) in item.value">
                <img :src="list">
                <div class="del">
                    <i @click="imgListRemove(list,index)" class="el-icon-delete"></i>
                </div>
            </div>
            <el-upload
                class="more-up"              
                :action="item.url"
                list-type="picture-card"
                :show-file-list="false"
                :on-success="imgListSuccess">
                <i class="el-icon-plus"></i>           
            </el-upload>
        </div>
        <!--文件上传-->
        <el-upload
            v-else-if="item.xtype==='fileField'"
            class="upload-test"
            :action="item.url"
            :show-file-list="false"         
            :on-success="handleAvatarSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" v-if="item.value" class="fileupload">
                {{item.value}}
                <i @click="fileRemove" class="el-icon-circle-close"></i>
            </div>
        </el-upload>
        <!--日期框2018-03-26-->
        <el-date-picker
            v-else-if="item.xtype==='dateField'"
            v-model="item.value"
            type="date"
            @input="(res) =>{ return dateChange(res,item.value,'day')}"
            :placeholder="item.placeholder">
        </el-date-picker>
        <!--日期框2018-03-26 18:00:00-->
        <el-date-picker
            v-else-if="item.xtype==='dateTimeField'"
            v-model="item.value"
            type="datetime"
            @input="(res) =>{ return dateChange(res,item.value,'second')}"
            :placeholder="item.placeholder">
        </el-date-picker> 
        <!--富文本框-->
        <Ueditor 
            v-else-if="item.xtype==='htmlEditorField'"
            @ready="(res) => {return editorReady(res,item.value)}">
        </Ueditor>
    </el-form-item>
</template>
<script type="text/babel">
    import {Ajax} from '../../utils'

    export default {
      props: {
        item: {
          type: Object,
          required: true
        },
      },
      data() {
        return {
            ajaxOptions: [],          
        }
      },
      watch: {
        item: {
          handler: function (val, oldVal) {           
            if(val.xtype === 'htmlEditorField'){
                this.$refs.inputitem.$children.forEach((list)=>{
                    if(list.instance){
                       this.editorReady (list.instance,val.value) 
                    }
                })               
            }
          },
          deep: true
        },
      },
      computed: {
        //验证规则
        Rules() {
            /*const rules = this.item.rules
            if (rules === undefined) return undefined           
            rules.forEach(rule => {   
                R.push(rule)
            })*/
            const R = []
            if( this.item.required ){
                let rulesMore = {
                    "required": true,
                    "message": this.item.text+"不能为空",
                    "trigger": "blur",
                }
                if( this.item.xtype === 'checkField' ){
                    rulesMore["type"] = "array";
                }
                if( this.item.xtype === 'numberField' ){
                    rulesMore["type"] = "number";
                }
                if( this.item.xtype === 'dateField' ){
                    rulesMore["trigger"] = "change";
                }
                R.push(rulesMore)
            } else {
                return undefined
            }
            
            return R
        },
        canShow() {
            return true          
            return this.item.xtype==='textField' || this.item.xtype==='textareaField' || this.item.xtype==='numberField' 
            || this.item.xtype==='selectField' || this.item.xtype==='radioField' || this.item.xtype==='checkField' 
            || this.item.xtype==='fileField' || this.item.xtype==='dateField' || this.item.xtype==='htmlEditorField'
        },      
      },
      created() {
        const { access, xtype, url} = this.item
        if (access == 'ajax') {
            this.$get(this.$url+''+url, {}).then((res) => {
                let result = res.data;
                if (result.code == 0) {
                    this.ajaxOptions = result.data
                } else {
                    this.$message.error(result.msg);
                }
            }).catch((err) => {
                this.$message.error('请求出错，请稍候再试');
            });
        }      
      },
      methods: {
        //富文本初始化
        editorReady (instance,value) {
            if (value) {
                let content = value;
                instance.setContent(content.toString());
            } else {
                instance.setContent('');
            }
            instance.addListener('contentChange', () => {
                this.$emit('input', instance.getContent())
            });
        },
        //删除上传文件
        fileRemove(){
            this.item.value = '';
            this.$emit('input', this.item.value)
        },
        //上传图片成功
        handleAvatarSuccess(res){
            if(res.code != 0){
                this.$message.error(res.msg);
                return false
            }
            this.item.value = res.data.url           
            this.$emit('input', res.data.url)
        },
        //多图删除
        imgListRemove(val, index) {
            this.item.value.splice(index,1)
            this.$emit('input', this.item.value)
        },
        //多图上传
        imgListSuccess(res) {
            if(res.code != 0){
                this.$message.error(res.msg);
                return false
            }
            this.item.value.push(res.data.url)
            this.$emit('input', this.item.value)
        },
        //日期组件格式化
        dateChange(res,val,type) {
            let time = '';
            if(val) {
                let date = new Date(val);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); 
                time = Y + M + D;
                if(type != 'day'){
                    time = Y + M + D + h + m + s;
                }
            }         
            this.$emit('input', time)
        },
      }
    }
</script>
<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .avatar-uploader-icon {
        font-size: 40px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .img-list{
        overflow: hidden;
        .more-up{
            float: left;
            margin:5px 20px 20px 0;
        }
        .img-content{
            float: left;
            position:relative;
            width: 148px;
            height: 148px;
            line-height: 148px;
            margin:5px 20px 20px 0;
            border:1px solid #d1dbe5;
            border-radius: 6px;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
            img{
                max-width:100%;
                max-height: 100%;
                vertical-align: middle;
            }
            .del{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height: 100%;
                color:#fff;                
                font-size: 20px;
                opacity: 0;              
                transition: all .3s;
                background-color: rgba(0, 0, 0, .5);
                .el-icon-delete{
                    cursor: pointer;
                }
            }
            &:hover{
                .del{
                    opacity: 1;
                }                
            }
        }
    }
    .fileupload{
        vertical-align: middle;
        .el-icon-circle-close{
            font-size:22px;
            margin-left:10px;
            color:red;
            cursor: pointer;
            vertical-align: middle;
        }
    }
    
</style>
<style lang="less" type="text/less" rel="stylesheet/less">
    .myform{
        .edui-default{
            width:auto!important;
            position: relative!important;
        }
    }
    .upload-test{
        .el-upload--text{
            width: auto;
            height: auto;
            line-height: 1;
            border:none;
        }
    }
</style>
