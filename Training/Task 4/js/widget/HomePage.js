Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HomePage = Clazz.extend(Clazz.WidgetWithTemplate, {
	name : "home",
	templateUrl : "../template/home.tmp",
	defaultContainer : "widget\\:page",
	projectName : null,
	projectId : null,
	
	initialize : function(){
		this.onClickHeader = new signals.Signal();
	},

	changeColor : function(color){
		$('#b').hide();
	},

	bindUI : function(){
		var self = this;
		$('#b').click(function(){
			self.onClickHeader.dispatch();
		});
	},

	preRender : function(whereToRender, renderFunction){
		var self = this;
		var api = new Clazz.com.test.widget.API();
		api.request(function(response){
			self.projectName = response.projectName;
			self.projectId = response.projectId;
			self.data = {"staffingSkillList":response.staffingSkillList, "projectName":self.projectName, "projectId":self.projectId, "score" : 6}
			renderFunction(self.data, whereToRender);
		});
	},
	
	postRender : function(element){
		
	},
});
