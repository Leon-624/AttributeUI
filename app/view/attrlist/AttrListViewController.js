Ext.define("AttributeUI.view.attrlist.AttrListViewController", {
	extend: 'Ext.app.ViewController',

	alias: 'controller.attrlist',

	onAfterRender: function(gridPanel){
		this.attrlistStore = this.getViewModel().getStore('attrlist');
		this.versionSel = this.lookupReference('versionSel');
	},

	onLoadAttrlistButtonClick: function(){
		var version = this.versionSel.getValue();
		this.loadAttrListStore(version);
	},

	loadAttrListStore: function(version){
		var proxy = this.attrlistStore.getProxy();
		proxy.getApi().read = global.urlGet + "?version=" + version;

		var me = this;
		this.attrlistStore.load({
			callback: function(records, operation, success){
				if(success)
				{
					var recordCount = records.length;
					global.toast(recordCount + " attributes loaded");
				}
				else
				{
					global.toast("Load: something is wrong...");
				}
			}
		});
	},

	onReloadAttrlistButtonClick: function(){
		Ext.Ajax.request({
			url: global.urlReload,
			method: 'GET',
			callback: function(options, success, response){
				console.log(response);
				if(response.responseText === 'true')
				{
					global.toast("Reload response: succeeded");
				}
				else
				{
					global.toast("Reload: something is wrong...");
				}
			}
		});
		global.toast("Reload signal sent... Waiting for response");
	},

	onFilterFieldChange: function(field, newValue, oldValue){
		this.attrlistStore.clearFilter();
		if(newValue)
		{
			this.attrlistStore.addFilter([
				{
					property: 'name',
        			value: newValue
				}
			]);
		}
	},

	onActionButtonClick: function(button, event){
		button.setStyle('backgroundColor', '#ff9900');

		var rowIndex = button.up('gridview').indexOf(button.el.up('table')),
			record = this.attrlistStore.getAt(rowIndex);
		if(typeof record.get('config') !== 'string')	//only stringify once
			record.set('config', JSON.stringify(record.get('config')));

		button.up('viewporttab').setActiveTab(1);
		var attrdetailPage = (Ext.ComponentQuery.query('attrdetail'))[0];
		var detailPageForm = attrdetailPage.down('form');
		detailPageForm.reset(true);	//unbind record set by loadRecord
		detailPageForm.loadRecord(record);
		(Ext.ComponentQuery.query('#jsonPanelCmpt'))[0].fireEvent('refresh');
	},

	onActionButtonMouseOver: function(button){
		button.setStyle('backgroundColor', '#ff9900');
	},

	onActionButtonMouseOut: function(button){
		button.setStyle('backgroundColor', '#29a329');
	},

	onActionButtonFocus: function(button){
		button.setStyle('backgroundColor', '#e65c00');
	}
});