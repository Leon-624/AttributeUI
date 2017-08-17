Ext.define('AttributeUI.view.attrlist.AttrListViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.attrlist',

    data: {
        title: 'List'
    },

    stores: {
    	attrlist: {
    		model: 'AttributeUI.model.AttrList',
    		storeId: 'attrlist',
			autoLoad: false,

			sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                },
                {
                    property: 'roles',
                    direction: 'ASC'
                }
     		],

            proxy: {
                type: 'ajax',
                api: {
                    create: 'hehe/create',
                    read: 'hehe/create',
                    update: 'hehe/update',
                    destroy: 'hehe/destroy'
                },
                reader: {
                    type: 'json'
                    //successProperty: 'success',
                    //rootProperty: 'designList'
                }
            }
    	}
    }

});
