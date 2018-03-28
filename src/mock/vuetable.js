export const vuetable = [
    {
        path: '/api/table',
        data: {
            "code": 0,
            "msg": "操作成功",
            "data": [{
                "type": "list",
                "breadCrumb": [{
                    "title": "首页",
                    "href": "/"
                }, {
                    "title": "角色列表",
                    "href": null
                }],
                "form": {
                    "url": "/role/list",
                    "method": "post",
                    "timeout": "3",
                    "items": [{
                        "text": "名称",
                        "xtype": "textField",
                        "value": "",
                        "name": "name"
                    }, {
                        "text": "测试下拉(与数据无关)",
                        "xtype": "selectField",
                        "value": "",
                        "name": "is_free",
                        "access": "local",
                        "url": "/wandao/app/test-select",
                        "data":[{"value":1,"text":"游戏"},{"value":2,"text":"官方论坛"}],
                    }, {
                        "text": "开始日期",
                        "xtype": "dateField",
                        "value": "",
                        "name": "start_time"
                    }, {
                        "text": "结束日期",
                        "xtype": "dateField",
                        "value": "",
                        "name": "end_time"
                    }, {
                        "text": "最小分数",
                        "xtype": "numberField",
                        "value": "",
                        "name": "min_score"
                    }, {
                        "text": "最大分数",
                        "xtype": "numberField",
                        "value": "",
                        "name": "max_score"
                    }, {
                        "text": "状态",
                        "xtype": "radioField",
                        "value": "",
                        "name": "status",
                        "access": "local",
                        "data": [{
                            "value": "1",
                            "text": "已审核"
                        }, {
                            "value": "2",
                            "text": "未审核"
                        }]
                    }, {
                        "text": "查询",
                        "name": "submit",
                        "xtype": "submitButton",
                        "value": ""
                    }, {
                        "id": "1",
                        "text": "创建",
                        "xtype": "promptButton",
                        "value": "",
                        "promptData": {
                            "type": "create",
                            "form": {
                                "url": "/role/create",
                                "method": "post",
                                "timeout": "3",
                                "items": [{
                                    "text": "角色名称",
                                    "xtype": "textField",
                                    "name": "name",
                                    "value": "",
                                    "required": "true"
                                }, {
                                    "text": "描述",
                                    "xtype": "textField",
                                    "name": "description",
                                    "value": "",
                                    "required": "true"
                                }, {
                                    "text": "测试下拉(与数据无关)",
                                    "xtype": "selectField",
                                    "value": "",
                                    "name": "is_free",
                                    "access": "local",
                                    "url": "/wandao/app/test-select",
                                    "data":[{"value":1,"text":"游戏"},{"value":2,"text":"官方论坛"}],
                                }]
                            }
                        }
                    }]
                },
                "grid": {
                    "url": "/wandao/app11",
                    "columns": [{
                        "text": "名称",
                        "dataIndex": "id",
                        "xtype": "text",
                        "sortable": "false"
                    }, {
                        "text": "描述",
                        "dataIndex": "description",
                        "xtype": "text",
                        "sortable": "false"
                    }, {
                        "text": "创建时间",
                        "dataIndex": "created_at",
                        "xtype": "text",
                        "sortable": "true"
                    }],
                    "operation": [{
                        "id": "1",
                        "text": "编辑",
                        "xtype": "promptButton",
                        "value": "",
                        "promptData": {
                            "type": "edit",
                            "form": {
                                "url": "/role/update",
                                "method": "post",
                                "timeout": "3",
                                "items": [
                                    {
                                        "text": "商品名称",
                                        "xtype": "textField",
                                        "name": "name",
                                        "dataIndex": "name",
                                        "value": "",
                                        "required": "true"
                                    }, 
                                    {
                                        "text": "商品描述",
                                        "xtype": "textField",
                                        "name": "description",
                                        "dataIndex": "description",
                                        "value": "",
                                        "required": "true"
                                    },
                                    {
                                        "text": "下拉框",
                                        "xtype": "selectField",
                                        "name": "select",
                                        "dataIndex": "select",
                                        "value": "",
                                        "required": "true",
                                        "access": "local",
                                        "data":[
                                            {"value":1,"text":"游戏"},
                                            {"value":2,"text":"官方论坛"}
                                        ]
                                    },
                                    {
                                        "text": "图片",
                                        "xtype": "fileField",
                                        "name": "pic",
                                        "dataIndex": "pic",
                                        "value": "",
                                        "required": "true",
                                        "url":'/wpk/file/upload'
                                    },                                   
                                    {
                                        "text": "富文本",
                                        "xtype": "htmlEditorField",
                                        "name": "html",
                                        "dataIndex": "html",
                                        "value": "",
                                        "required": "true"
                                    },
                                ]
                            }
                        }
                    }]
                }
            }]
        }
    },

]