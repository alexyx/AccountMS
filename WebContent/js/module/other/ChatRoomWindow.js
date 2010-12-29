
AccountMS.ChatRoomWindow = Ext.extend(Ext.app.Module, {
    id:'chatroom-win',
    init : function(){
        this.launcher = {
            text: '聊天室',
            iconCls:'icon-grid',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('chatroom-win');
        if(!win){
            win = desktop.createWindow({
                id: 'chatroom-win',
                title:'聊天室',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                shim:false,
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit'
            });
        }
        win.show();
    }
});