/**
 * 
 */

AccountMS.GoogleWindow = Ext.extend(Ext.app.Module, {
    id:'google-win',
    init : function(){
        this.launcher = {
            text: 'Google',
            iconCls:'icon-grid',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('google-win');
        if(!win){
            win = desktop.createWindow({
                id: 'google-win',
                title:'Google',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                shim:false,
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                html: '<iframe id="frame1" src="http://www.google.co.uk" frameborder="0" width="100%" height="100%"></iframe>'
            });
        }
        win.show();
    }
});