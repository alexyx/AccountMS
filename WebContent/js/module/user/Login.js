Ext.ns('AccountMS.module.user');

AccountMS.module.user.Login = function(){

	var loginWin = new Ext.Window({
		title: '登录 - Account',
		modal: true,
		closable: false,
		animCollapse: false,
		animateTarget: Ext.getBody(),
		height: 250,
		width: 450,
		border: false,
		layout: 'fit',
		items:[{
			xtype: 'form',
			id: 'loginForm',
			bodyBorder: false,
			labelWidth: 140,
			labelAlign: 'right',
			padding: "60px 8px 30px 8px",
			//margins: { top: 20, right: 5, bottom: 5, left: 20 },
			items: [{
				xtype:'fieldset',
				title: '用户信息',

				items:[{
					fieldLabel: '用户名',
					xtype: 'textfield',
					value: 'alex',
					name: 'userName'
				},{
					fieldLabel: '密码',
					xtype: 'textfield',
					value: '123456',
					inputType: 'password',
					name: 'password'
				}]
			}]
		}],
		buttons:[{
			text: '登录',
			handler: function(but, event){
				//获取 form 表单
				var form = loginWin.get('loginForm').getForm();
				form.submit({
					clientValidation: true,
					url: 'user',
					success: function(form, action) {
						loginWin.hide();
						Ext.get('ux-taskbar').slideIn('b');
					},
					failure: function(form, action){
						if(action.result.staruts == "INFO"){
							Ext.Msg.show({
								title: '温馨提示',
								msg: action.result.msg,
								icon: Ext.Msg.INFO,
								buttons: Ext.Msg.OK
							});
						}else if(action.result.staruts == "ERROR"){
							Ext.Msg.show({
								title: '错误提示',
								msg: action.result.msg,
								icon: Ext.Msg.ERROR,
								buttons: Ext.Msg.OK
							});
						}else if(action.result.staruts == "WARNING"){
							Ext.Msg.show({
								title: '异常提示',
								msg: action.result.msg,
								icon: Ext.Msg.WARNING,
								buttons: Ext.Msg.OK
							});
						}else{
							Ext.Msg.show({
								title: '未知异常',
								msg: action.result.msg,
								icon: Ext.Msg.WARNING,
								buttons: Ext.Msg.OK
							});
						}
					}
				});
			}
		}]
	});

	Ext.Ajax.request({
		url: 'user',
		success: function(response, opts){
			var json = Ext.decode(response.responseText);
			//console.dir(json);
			if(!json.success){
				//loginWin.show();
				loginWin.show();
				Ext.get('ux-taskbar').slideOut('b');

//				Ext.Msg.show({
//					title: '温馨提示',
//					msg: '请登录您的 google 帐户!',
//					icon: Ext.Msg.INFO,
//					buttons: Ext.Msg.OK,
//					fn: function(){
//						document.location.replace("index.html");
//					}
//				});
			}
		},
		failure: function(response, opts){
			Ext.Msg.alert("Error tips", "Error code : " + response.status);
		}
	});
}