Ext.define('AttributeUI.view.viewport.ViewportTab', {
	extend: 'Ext.tab.Panel',

	alias: 'widget.viewporttab',

	controller: 'viewporttab',

	layout: 'anchor',

	title: 'Attribute Controlling UI',
	titleAlign: 'left',
	tabBarHeaderPosition: 1,

	tabBar: {
		tabStretchMax: true,
		height: 40
	},

	items: [
		{
			xtype: 'attrlist',
			anchor: '100% 100%'
		},
		{
			xtype: 'attrdetail',
			anchor: '100% 100%'
		}
		/*{
			xtype: 'design',
			anchor: '100% 100%'
		},
		{
			xtype: 'help',
			anchor: '100% 100%'
		}*/
	],

	tools: [
		/*{
			//userButton's appearance will be set up upon render
			xtype: 'splitbutton',
			reference: 'userButton',
			text: 'Guest',
			padding: '2 5 2 5',
			margin: '0 0 0 0',	//margin will be set up upon render or resize to center the tab
			menu: {
				xtype: 'menu',
				plain: true,
				items: [
					{
						text: 'Log In',
						index: 0,
						reference: 'userLogMenuItem'
					},
                	{
                		text: 'Sign Up',
                		index: 1,
                		reference: 'userSignUpMenuItem'
                	}
				],
				listeners: {
					click: 'onUserMenuClick'
				}
			},
			listeners: {
				mouseover: 'onUserButtonMouseOver',
				mouseout: 'onUserButtonMouseOut',
				userContextChange: 'onUserContextChange'
			}
		}*/
	],

	initComponent: function(){
		this.callParent(arguments);
	},

	listeners: {
		afterrender: 'onAfterRender',
		resize: 'onResize'
	}

});