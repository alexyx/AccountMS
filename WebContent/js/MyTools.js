/**
 * 
 */

Ext.namespace("tools.Msg");

/**
 * 
 * @param {Object} response
 */
tools.Msg.alter = function(response){
	
	if(response.status == 200){
		var json = Ext.decode(response.responseText);
		
	}else{
		
	}
	
}

tools.Msg.alterSuccess = function(){
	
}