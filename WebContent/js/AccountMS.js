AccountMS = new Ext.app.App({
	
	// ExtJS Desktop 初始化方法
	init :function(){
		//初始化 Extjs 提示功能
		Ext.QuickTips.init();
		//Ajax 方式请求 server 当前用户是否登 Google 账户
		AccountMS.module.user.Login();
	},
	
	// ExtJS Desktop 插件获取当前应用程序功能模块接口
	getModules : function(){
		return [
			new AccountMS.module.account.Window()
			//new AccountMS.ChatRoomWindow(),
			//new AccountMS.GoogleWindow()
			//new WAMS.WebQQWindow()
		];
	},
	// 开始菜单配置跟选项
    getStartConfig : function(){
        return {
            title: '所有程序',
            iconCls: 'bogus',
            toolItems: [{
                text:'设置',
                iconCls:'settings',
                scope:this,
                handler: function(){
                	Ext.Msg.show({
                		animEl: Ext.getBody(),
				    	title: '温馨提示',
				    	msg: '此功能模块正在建设中!',
				    	icon: Ext.Msg.INFO,
				    	buttons: Ext.Msg.OK
                	});
                }
            },'-',{
                text:'锁定',
                iconCls:'logout',
                scope:this,
                handler: function(){
                	Ext.Msg.show({
                		animEl: Ext.getBody(),
				    	title: '温馨提示',
				    	msg: '此功能模块正在建设中!',
				    	icon: Ext.Msg.INFO,
				    	buttons: Ext.Msg.OK
                	});
                }
            }]
        };
    }
});
