/*
路由: wandao_app_evaluate_more-list

调用方式：
this.axios.get('/wandao/app').then((res) =>{
    console.log(res.data);
    let result = res.data;
    this.items =  result.data.items;
}).catch((err) =>{
    console.log(err);
});

*/

export const wandaoList = [
    {
        path: '/wandao/app',
        data: {
				"code": 0,
				"msg": "操作成功",
				"data": {
					"count": 10,
					"curPage": 1,
					"totalPage": 1,
					"pageSize": 10,
					"items": [{
						"type": "角色",
						"name": "role_2",
						"description": "role_desc_2_edit",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-26 15:26:47",
						"updated_at": "2018-03-26 19:56:39",
						"id": "role_2",
						"select":1,
						"html":"<p>这是p标签1111</p><a href=''>超链接</a>",
						"pic":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg",
						"image":["https://www.baidu.com/img/bd_logo1.png","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg",]
					}, {
						"type": "角色",
						"name": "role_1",
						"description": "role_desc_1",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-26 15:07:15",
						"updated_at": "2018-03-26 15:07:15",
						"id": "role_1",
						"select":2,
						"html":"这是文本<h2>标题</h2>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":[]
					}, {
						"type": "角色",
						"name": "这是名称",
						"description": "678",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-26 11:11:35",
						"updated_at": "2018-03-26 11:11:47",
						"id": "这是名称",
						"select":1,
						"html":"<p>这是p标签3333</p><a href=''>超链接</a>",
						"pic":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg",
						"image":["https://www.baidu.com/img/bd_logo1.png","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg","https://www.baidu.com/img/bd_logo1.png"]
					}, {
						"type": "角色",
						"name": "4444",
						"description": "4444desc",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-23 21:05:41",
						"updated_at": "2018-03-26 11:11:30",
						"id": "4444",
						"select":2,
						"html":"这是文本<h2>标题</h2>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":[]
					}, {
						"type": "角色",
						"name": "测试18——sw",
						"description": "描述133311_oo",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-23 20:36:55",
						"updated_at": "2018-03-23 21:05:20",
						"id": "测试18——sw",
						"select":2,
						"html":"<p>这是p标签5555555555555</p><a href=''>超链接</a>",
						"pic":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg",
						"image":["https://www.baidu.com/img/bd_logo1.png","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905236512,3898515116&fm=27&gp=0.jpg",]
					}, {
						"type": "角色",
						"name": "77666",
						"description": "567",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-23 20:31:07",
						"updated_at": "2018-03-23 20:31:07",
						"id": "77",
						"select":1,
						"html":"这是文本<h2>标题</h2>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":["https://www.baidu.com/img/bd_logo1.png","https://www.baidu.com/img/bd_logo1.png",]
					}, {
						"type": "角色",
						"name": "test菜单77",
						"description": "test菜单12343",
						"ruleName": null,
						"data": null,
						"created_at": "2018-03-23 20:04:28",
						"updated_at": "2018-03-23 20:51:43",
						"id": "test菜单",
						"select":1,
						"html":"<p>这是p标签77777</p><a href=''>超</a>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":[]
					}, {
						"type": "角色",
						"name": "testzhou111",
						"description": "testzhou",
						"ruleName": null,
						"data": null,
						"created_at": "2018-01-27 15:48:18",
						"updated_at": "2018-01-27 17:14:13",
						"id": "testzhou111",
						"select":2,
						"html":"<p>这是p标签88888</p><a href=''>超链接88</a>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":["https://www.baidu.com/img/bd_logo1.png",]
					}, {
						"type": "角色",
						"name": "一起玩用户",
						"description": "一起玩普通用户权限1",
						"ruleName": null,
						"data": null,
						"created_at": "2017-09-27 19:05:06",
						"updated_at": "2018-01-27 13:03:43",
						"id": "一起玩用户",
						"select":1,
						"html":"<p>这是p标签9999999</p><a href=''>超链接9999</a>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":[]
					}, {
						"type": "角色",
						"name": "SDK管理员",
						"description": "SDK管理员",
						"ruleName": null,
						"data": null,
						"created_at": "2017-08-25 14:15:28",
						"updated_at": "2017-08-25 14:15:28",
						"id": "SDK管理员",
						"select":2,
						"html":"<p>这是p标签000000000</p><a href=''>超链接发风哥好风格化规范化风哥哈风格化发</a>",
						"pic":"https://www.baidu.com/img/bd_logo1.png",
						"image":[]
					}],
					"next": 0
				}
        }
    }
]
