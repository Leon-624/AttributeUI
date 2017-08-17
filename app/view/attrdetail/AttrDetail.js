Ext.define('AttributeUI.view.attrdetail.AttrDetail', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.attrdetail',

    controller: 'attrdetail',

    layout: 'hbox',

    title: "Detail",

    initComponent: function(){
        me = this;
        this.dockedItems = [
        ];
    	this.items = [
    		{
    			xtype: 'panel',
                title: "Detail",
                flex: 1,
                height: '100%',
                layout: 'anchor',
    			scrollable: true,
    			items: [
                    {
                        xtype: 'form',
                        reference: 'attrDetailForm',
                        anchor: '100% 100%',
                        bodyPadding: 20,
                        scrollable: true,
                        items: [
                            {
                                xtype: 'numberfield',
                                reference: 'pkNumberfield',
                                fieldLabel: 'Definitions_PK',
                                name: 'setFieldDefinitions_PK',
                                allowBlank: true,
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false
                            },
                            {
                                xtype: 'textfield',
                                reference: 'nameTextField',
                                fieldLabel: 'Name',
                                name: 'name',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                reference: 'labelTextField',
                                fieldLabel: 'Label',
                                name: 'label',
                                allowBlank: true
                            },
                            {
                                xtype: 'combobox',
                                reference: 'xtypeField',
                                name: 'xtype',
                                fieldLabel: 'Xtype',
                                multiSelect: false,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: 'setbuttonfield',
                                            displayField: 'setbuttonfield'
                                        },
                                        {
                                            valueField: 'setcheckboxfield',
                                            displayField: 'setcheckboxfield'
                                        },
                                        {
                                            valueField: 'setcomboboxfield',
                                            displayField: 'setcomboboxfield'
                                        },
                                        {
                                            valueField: 'setnumberfield',
                                            displayField: 'setnumberfield'
                                        },
                                        {
                                            valueField: 'setradiofield',
                                            displayField: 'setradiofield'
                                        },
                                        {
                                            valueField: 'setsegmentedbuttonfield',
                                            displayField: 'setsegmentedbuttonfield'
                                        },
                                        {
                                            valueField: 'settablefield',
                                            displayField: 'settablefield'
                                        },
                                        {
                                            valueField: 'settextfield',
                                            displayField: 'settextfield'
                                        },
                                        {
                                            valueField: 'setthreestatebuttonfield',
                                            displayField: 'setthreestatebuttonfield'
                                        },
                                        {
                                            valueField: 'setlistfield',
                                            displayField: 'setlistfield'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                allowBlank: false
                            },
                            {
                                xtype: 'combobox',
                                reference: 'requiredField',
                                name: 'required',
                                fieldLabel: 'Required',
                                multiSelect: false,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: false,
                                            displayField: 'False'
                                        },
                                        {
                                            valueField: true,
                                            displayField: 'True'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                allowBlank: true
                            },
                            {
                                xtype: 'combobox',
                                reference: 'hiddenField',
                                name: 'hidden',
                                fieldLabel: 'Hidden',
                                multiSelect: false,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: false,
                                            displayField: 'False'
                                        },
                                        {
                                            valueField: true,
                                            displayField: 'True'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                allowBlank: true
                            },
                            {
                                xtype: 'tagfield',
                                reference: 'rolesTagField',
                                name: 'roles',
                                fieldLabel: 'Roles',
                                multiSelect: true,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: "se",
                                            displayField: 'ROLE_SE'
                                        },
                                        {
                                            valueField: "ccm",
                                            displayField: 'ROLE_CCM'
                                        },
                                        {
                                            valueField: "tde",
                                            displayField: 'ROLE_TDE'
                                        },
                                        {
                                            valueField: "np&i",
                                            displayField: 'ROLE_NPI'
                                        },
                                        {
                                            valueField: "all",
                                            displayField: 'ROLE_ALL'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                allowBlank: true
                            },
                            {
                                xtype: 'textareafield',
                                reference: 'itemsTextField',
                                fieldLabel: 'Items',
                                name: 'items',
                                grow: true,
                                sortable: false,
                                allowBlank: true
                            },
                            {
                                xtype: 'textareafield',
                                reference: 'configTextField',
                                fieldLabel: 'Config',
                                name: 'config',
                                grow: true,
                                sortable: false,
                                allowBlank: true
                            },
                            {
                                xtype: 'numberfield',
                                reference: 'versionNumberfield',
                                fieldLabel: 'Version',
                                name: 'version',
                                allowBlank: true,
                                hideTrigger: false,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false
                            }
                        ],
                        buttons: [
                            {
                                text: 'Reset',
                                reference: 'resetButton',
                                formBind: false,
                                handler: 'onResetButtonClick'
                            },
                            {
                                text: 'Show JSON',
                                reference: 'showJsonButton',
                                formBind: false,
                                handler: 'onshowJsonButtonClick'
                            },
                            {
                                text: 'Upsert',
                                reference: 'upsertButton',
                                formBind: true,
                                handler: 'onUpsertButtonClick'
                            }
                        ]
                    }
                ]
    		},
            {
                xtype: 'panel',
                title: 'JSON',
                reference: 'jsonPanel',
                flex: 1,
                height: '100%',
                layout: 'fit',
                items: [
                    {
                        xtype: 'component',
                        reference: 'jsonPanelCmpt',
                        id: 'jsonPanelCmpt',
                        scrollable: true,
                        padding: '10 10 10 15',
                        border: '0 0 0 2',
                        style: {
                            borderColor: '#66ccff',
                            borderStyle: 'solid'
                        },
                        html: '<h3>Use "Show JSON" button to display JSON of current attribute.</h3>',
                        listeners: {
                            refresh: 'onJsonPanelCmptRefresh'
                        }
                    }
                ]
            }
    	];

    	this.callParent(arguments);
    },

    listeners: {
    	afterrender: 'onAfterRender',
        resize: 'onResize'
    }

});