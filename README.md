# vue2动态表单

> 根据字段，自动生成表单，表单内容依赖element-ui,支持表单验证

# 预览

[在线预览](static/admin.gif)

# 使用

```java (type)

<template>
    <my-item
        v-for="(item,index) in formItemList"
        :key="item.name"          
        :item="item"
        v-model= "editForm[item.name]">
    </my-item>
</template>

<script type="text/babel">
	data: function () {
            return {
                editForm: {},   //动态渲染表单
                formItemList: [
                    {
                      "xtype": "textField",
                      "text": "文本",                     
                      "name": "name",
                      "value": "名字1",
                      "disabled": false,
                      "placeholder": "请输入一些文本",
                      "required":false,                   
                    },
                    {
                      "xtype": "selectField",
                      "text": "账号",                    
                      "name": "satus",
                      "value": "B",
                      "disabled": false,
                      "placeholder": "请输入一些文本",
                      "required":true,
                      "access": "local",
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
                      "xtype": "textField",
                      "text": "文本什么的",                      
                      "name": "password",
                      "value": "123456",
                      "disabled": false,
                      "placeholder": "请输入一些文本",
                      "required":true, 
                    },
                    {
                      "xtype": "fileField",
                      "text": "图片",                      
                      "name": "pic",
                      "value": "http://192.168.4.124:930/news/201801/5a687461aeccc.png?width=628&height=906",
                      "disabled": false,
                      "placeholder": "请上传图片",
                      "required":true, 
                    },
                    {
                      "xtype": "dateField",
                      "text": "开始日期",                      
                      "name": "time",
                      "value": "",
                      "disabled": false,
                      "placeholder": "请选择日期",
                      "required":true, 
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
                             
            }
        },
</script>
```


# 功能开发

- [x] 常用验证规则
- [x] 为下拉框options，复选框checkbox配置Ajax接口
- [x] 富文本支持
- [x] 图片上传
- [x] 表格
- [x] hightchart组件
- [ ] 省/市/区级联快捷配置
- [ ] 为文本框配置自定义验证规则


