$(document).ready(function(){
	
	Clazz.navigationController = new Clazz.NavigationController({
	    mainContainer : "widget\\:page"
	});
	
	
	var page;
		page = new Clazz.com.test.widget.HomePage();

	Clazz.navigationController.push(page);
	
});




