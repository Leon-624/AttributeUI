Ext.define('AttributeUI.view.attrlist.AttrList', {
	extend: 'Ext.grid.Panel',

	alias: 'widget.attrlist',

	controller: 'attrlist',
	viewModel: 'attrlist',

	bind: {
		title: '{title}'
	},

	initComponent: function(){
		var me = this;
		this.store = this.getViewModel().getStore("attrlist");
		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'combobox',
						reference: 'filterField',
						name: 'filterField',
						fieldLabel: 'Name Filter',
						multiSelect: false,
						queryMode: 'local',
						store: me.store,
						displayField: 'name',
						valueField: 'name',
						allowBlank: true,
						listeners: {
							change: 'onFilterFieldChange'
						}
					},
					{
						xtype: 'tbfill'
					},
					{
						xtype: 'combobox',
						reference: 'versionSel',
						fieldLabel: 'Version',
						labelWidth: 80,
						forceSelection: false,
						store: {
							data: [
								{
									valueField: 1,
									displayField: '1'
								},
								{
									valueField: 2,
									displayField: '2'
								}
							]
						},
						displayField: 'displayField',
						valueField: 'valueField',
						value: 2
					},
					{
						xtype: 'button',
						text: 'Load/Refresh',
                        reference: 'loadAttrlistButton',
                        handler: 'onLoadAttrlistButtonClick'
					}
				]
			}
		];
		this.columns = [
			{
				text: 'Name',
				dataIndex: 'name',
				sortable: true,
				hideable: false,
				draggable: true,
				flex: 1
			},
			{
				text: 'Label',
				dataIndex: 'label',
				sortable: true,
				hideable: true,
				draggable: true,
				flex: 1
			},
			{
				text: 'Xtype',
				dataIndex: 'xtype',
				sortable: true,
				hideable: true,
				draggable: true,
				flex: 1
			},
			{
				text: 'Roles',
				dataIndex: 'roles',
				sortable: true,
				hideable: true,
				draggable: true,
				flex: 1
			},
			{
				text: 'Version',
				dataIndex: 'version',
				sortable: true,
				hideable: true,
				draggable: true,
				flex: 0.5
			},
			{
				text: 'Action',
				xtype: 'widgetcolumn',
				sortable: false,
				hideable: false,
				draggable: true,
				stopSelection: false,
				flex: 1,
				widget: {
					xtype: 'button',
					text: 'Details',
					style: 'background-color:#29a329',
					listeners: {
						mouseover: 'onActionButtonMouseOver',
						mouseout: 'onActionButtonMouseOut',
						focus: 'onActionButtonFocus',
						click: 'onActionButtonClick'
					}
				}
			}
		];
		this.callParent(arguments);
	},

	listeners:{
		afterrender: 'onAfterRender'
	}

});