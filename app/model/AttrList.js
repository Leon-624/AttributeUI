Ext.define('AttributeUI.model.AttrList', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'setFieldDefinitions_PK', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'label', type: 'string'},
		{name: 'xtype', type: 'string'},
		{name: 'required', type: 'boolean'},
		{name: 'hidden', type: 'boolean'},
		'roles',
		{name: 'items', type: 'string'},
		'config',
		{name: 'version', type: 'int'}
	],
	idProperty: 'setFieldDefinitions_PK'

});