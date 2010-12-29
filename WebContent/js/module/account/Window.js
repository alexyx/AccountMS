
Ext.ns('AccountMS.module.account');

AccountMS.module.account.Window = Ext.extend(Ext.app.Module, {
	// 此模块ID
    id:'account-win',
    
    /**
     * 初始化方法
     */
    init : function(){
        this.launcher = {
            text: '账号管理',
            iconCls:'icon-grid',
            handler : this.createWindow,
            scope: this
        };
    },

	/**
	 * 创建 Window 窗体
	 */
    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('account-win');
        if(!win){
            win = desktop.createWindow({
                id: 'account-win',
                title:'账号管理',
                width:1000,
                height: 530,
                iconCls: 'icon-grid',
                shim:false,
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                border: false,
                items:{
                	xtype: 'accountGrid'
                }
            });
        }
        win.show();
    }
});