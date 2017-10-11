Ext.define("AttributeUI.view.viewport.ViewportTabViewController", {
	extend: 'Ext.app.ViewController',

	alias: 'controller.viewporttab',

	onAfterRender: function(tabpanel){
		/*this.userButton = this.lookupReference('userButton');
		this.userLogMenuItem = this.lookupReference('userLogMenuItem');
		this.userSignUpMenuItem = this.lookupReference('userSignUpMenuItem');
		//center tab position
		this.centerTabPosition(this.getView().getWidth());
		//set up user context
		this.userContext = globalContextManager.getUserContext();
		//register userButton to userContext, as userContext affects userButton's appearance;
		//when user context changes, userButton will be notified by event 'userContextChange'
		this.userContext.register(this.userButton);
		this.setUpUserButtonAppearance();*/
	},

	onResize: function(tabpanel, width, height){
		//this.centerTabPosition(width);
	},

	centerTabPosition: function(width){
		//this.userButton.setMargin('0 0 0 ' + (width/2 - 180));
	}

});