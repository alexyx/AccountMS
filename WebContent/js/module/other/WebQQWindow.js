/**
 * 
 */

AccountMS.WebQQWindow = Ext.extend(Ext.app.Module, {
    id:'webqq-win',
    init : function(){
        this.launcher = {
            text: 'WebQQ',
            iconCls:'icon-grid',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('webqq-win');
        if(!win){
            win = desktop.createWindow({
                id: 'webqq-win',
                title:'WebQQ',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                shim:false,
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                html: '<iframe id="frame1" src="http://web2.qq.com" frameborder="0" width="100%" height="100%"></iframe>'
            });
        }
        win.show();
    }
});
 
