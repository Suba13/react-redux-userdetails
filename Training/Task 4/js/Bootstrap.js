$(document).ready(function(){
	
	Clazz.navigationController = new Clazz.NavigationController({
	    mainContainer : "widget\\:page"
	});
	
	
	var page;
		page = new Clazz.com.test.widget.HomePage();

	Clazz.navigationController.push(page);
	var header = new Clazz.com.test.widget.HomePage();
	var headerListener = new Clazz.com.test.HeaderListener({
		"header": header
	});
	header.onClickHeader.add(headerListener.changeColor, headerListener);
	header.render();
	
});




