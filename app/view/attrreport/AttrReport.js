Ext.define('AttributeUI.view.attrreport.AttrReport', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.attrreport',

    controller: 'attrreport',

    layout: 'auto',

    title: "Report",

    initComponent: function(){
        me = this;
        this.dockedItems = [
        ];
    	this.items = [
    		{
    			xtype: 'panel',
                title: "Criteria",
                flex: 1,
                height: '100%',
                layout: 'anchor',
    			scrollable: true,
    			items: [
                    {
                        xtype: 'form',
                        reference: 'attrCriteriaForm',
                        anchor: '100% 100%',
                        bodyPadding: 20,
                        scrollable: true,
                        items: [
                            {
                                xtype: 'tagfield',
                                reference: 'xtypeField',
                                name: 'xtype',
                                fieldLabel: 'Xtype',
                                multiSelect: true,
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
                                            valueField: "vsc",
                                            displayField: 'ROLE_VSC'
                                        },
                                        {
                                            valueField: "prov",
                                            displayField: 'ROLE_PROV'
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
                                xtype: 'checkboxfield',
                                reference: 'requiredField',
                                name: 'required',
                                fieldLabel: 'Required',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'hiddenField',
                                name: 'hidden',
                                fieldLabel: 'Hidden',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'isDependentField',
                                name: 'isDependent',
                                fieldLabel: 'Is Dependent',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'isQuoteAttributeField',
                                name: 'isQuoteAttribute',
                                fieldLabel: 'Is Quote Attribute',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'checkroleforinitiallyhiddenField',
                                name: 'checkroleforinitiallyhidden',
                                fieldLabel: 'Check Role for Initially Hidden',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'numberfield',
                                reference: 'versionNumberfield',
                                fieldLabel: 'Version',
                                name: 'version',
                                maxValue: 10,
                                minValue: 1,
                                value: 1,
                                editable: true,
                                allowBlank: true,
                                hideTrigger: false,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false
                            },
                            {
                                xtype: 'tagfield',
                                reference: 'columnTagfield',
                                name: 'columns',
                                fieldLabel: 'CSV Columns',
                                multiSelect: true,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: "name",
                                            displayField: 'Name'
                                        },
                                        {
                                            valueField: "label",
                                            displayField: 'Label'
                                        },
                                        {
                                            valueField: "roles",
                                            displayField: 'Roles'
                                        },
                                        {
                                            valueField: "xtype",
                                            displayField: 'Xtype'
                                        },
                                        {
                                            valueField: "required",
                                            displayField: 'Required'
                                        },
                                        {
                                            valueField: "hidden",
                                            displayField: 'Hidden'
                                        },
                                        {
                                            valueField: "isDependent",
                                            displayField: 'Is Dependent'
                                        },
                                        {
                                            valueField: "isQuoteAttribute",
                                            displayField: 'Is Quote Attribute'
                                        },
                                        {
                                            valueField: "checkroleforinitiallyhidden",
                                            displayField: 'Check Role for Initially Hidden'
                                        },
                                        {
                                            valueField: "version",
                                            displayField: 'Version'
                                        }
                                    ]
                                },
                                value: ['name', 'label', 'roles'],
                                displayField: 'displayField',
                                valueField: 'valueField',
                                allowBlank: false
                            }
                        ],
                        buttons: [
                            {
                                text: 'Reset Criteria',
                                reference: 'resetButton',
                                formBind: false,
                                handler: 'onResetButtonClick'
                            },
                            {
                                text: 'Generate CSV',
                                reference: 'generateCsvButton',
                                formBind: true,
                                handler: 'onGenerateCsvButton'
                            }
                        ]
                    }
                ]
    		}
    	];

    	this.callParent(arguments);
    },

    listeners: {
    	afterrender: 'onAfterRender'
    }

});