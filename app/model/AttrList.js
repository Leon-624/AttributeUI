Ext.define('AttributeUI.model.AttrList', {
	extend: 'Ext.data.Model',

	fields: [
		//{name: 'setFieldDefinitions_PK', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'label', type: 'string'},
		{name: 'xtype', type: 'string'},
		'roles',
		{name: 'required', type: 'boolean'},
		{name: 'hidden', type: 'boolean'},
		{name: 'isDependent', type: 'boolean'},
		{name: 'isQuoteAttribute', type: 'boolean'},
		{name: 'checkroleforinitiallyhidden', type: 'boolean'},
		{name: 'items', type: 'string'},
		'config',
		{name: 'createdBy', type: 'string'},
		{name: 'modifiedBy', type: 'string'},
		{name: 'version', type: 'int'}
	],
	idProperty: 'setFieldDefinitions_PK'

});