Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HomePage = Clazz.extend(Clazz.WidgetWithTemplate, {
	name : "home",
	templateUrl : "../template/home.tmp",
	
	initialize : function(config){
	},

	bindUI : function(){
		
	},

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},
	
	postRender : function(element){
		
	},
});
