Ext.ns('AccountMS.module.account');

AccountMS.module.account.Grid = function(){
	this.proxy = new Ext.data.HttpProxy({
		api: {
			read: {url: 'action/basic/accountLoad', method: 'post'},
			create: {url: 'action/basic/accountCreate', method: 'post'},
			update: {url: 'action/basic/accountUpdate', method: 'post'},
			destroy: {url: 'action/basic/accountDelete', method: 'post'}
		}
	});

	this.reader = new Ext.data.JsonReader({
	    successProperty: 'success',
	    messageProperty: 'msg',
	    totalProperty: 'total',
	    idProperty: 'id',
	    root: 'data'
	}, [
	    {name: 'id'},
	    {name: 'url'},
	    {name: 'webSiteName', allowBlank: false},
	    {name: 'userName', allowBlank: false},
	    {name: 'password', allowBlank: false},
	    {name: 'type'},
	    {name: 'mail'},
	    {name: 'descText'},
	    {name: 'lastAlterPassDate', type: 'date'},
	    {name: 'registerDate', type: 'date'}
	]);
	
	this.writer = new Ext.data.JsonWriter({
	    encode: false
	});
	
	this.store = new Ext.data.Store({
		id: 'accountStore',
		//restful: true,
		//autoSave: true,
		proxy: this.proxy,
		reader: this.reader,
		writer: this.writer
	});
	
	this.bbar = new Ext.PagingToolbar({
		store: this.store
	});
	
	this.tbar = [{
        text: '添加',
        iconCls: 'silk-add',
        handler: function(btn, ev) {
	        var u = new this.store.recordType({
	        	id: '',
	        	url: 'http://',
	        	webSiteName: '',
	        	userName: '',
	        	password: '',
	        	type: '',
	        	mail: '',
	        	descText: '',
	        	lastAlterPassDate: new Date().clearTime(),
	        	registerDate: new Date().clearTime()
	        });
	        this.stopEditing();
	        this.getStore().insert(0, u);
	        this.startEditing(0, 2);
	    },
        scope: this
    }, '-', {
        text: '删除',
        iconCls: 'silk-delete',
        handler: function(btn, ev) {
	        var index = this.getSelectionModel().getSelectedCell();
	        if (!index) {
	            return false;
	        }
	        var rec = this.store.getAt(index[0]);
	        this.store.remove(rec);
	    },
        scope: this
    }, '-',{
    	text: '保存',
        iconCls: 'silk-delete',
        handler: function(btn, ev) {
	        this.store.save();
	    },
        scope: this
    }];
    var textfield = new Ext.form.TextField({maxLength: 40});
    var emailfield = new Ext.form.TextField({vtype: 'email'});
    var urlfield = new Ext.form.TextField({vtype: 'url'});
    var dataField = new Ext.form.DateField({maxLength: 120});
    
    var losePass = function(val){
    	var pretendPass = "";
    	for(i=0; i< val.toString().length; i++){
    		pretendPass += "*";
    	}
    	return pretendPass;
    }
    
    var loseDesc = function(val){
    	
    	if(val.toString().length > 6){
    		return (val.toString().slice(0,8) + "...");
    	}else{
    		return val;
    	}
    }
    this.columns = [
    	new Ext.grid.RowNumberer({header: "序列", width: 35}),
		{dataIndex: 'id', header: '编号', width: 60, sortable: true},
	    {dataIndex: 'url',header: '网址', width: 180, sortable: true, editor: urlfield },
	    {dataIndex: 'webSiteName', header: '名称', width: 160, sortable: true, editor: textfield },
		{dataIndex: 'userName', header: '账户名', width: 180, sortable: true, editor: textfield },
		{dataIndex: 'password', header: '密码', width: 120, sortable: true, editor: textfield,  renderer:losePass},
		{dataIndex: 'type', header: '账户类型', width: 130, sortable: true, editor: textfield },
		{dataIndex: 'mail', header: '关联信箱', width: 180, sortable: true, editor: emailfield},
		{dataIndex: 'descText', header: '描述', width: 180, sortable: true, editor: new Ext.form.TextArea(), renderer: loseDesc},
		{dataIndex: 'lastAlterPassDate', header: '修改日期', width: 130, sortable: true, xtype: 'datecolumn', format: 'Y年m月d日', editor: dataField},
		{dataIndex: 'registerDate', header: '注册日期', width: 130, sortable: true, xtype: 'datecolumn', format: 'Y年m月d日', editor: dataField }
	]
	AccountMS.module.account.Grid.superclass.constructor.call(this, {
		id: 'accountGrid',
		forceValidation: true,
		clicksToEdit: 1,
		viewConfig: {forceFit: true }
	});
	this.getBottomToolbar().changePage(1);
}
Ext.extend(AccountMS.module.account.Grid, Ext.grid.EditorGridPanel, {
});

Ext.reg('accountGrid', AccountMS.module.account.Grid);