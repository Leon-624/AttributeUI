Ext.define('AttributeUI.view.attrdetail.AttrDetailViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.attrdetail',

    /*
    items flow: items -> itemsedit -> json
    */

    onAfterRender: function(){
        this.attrDetailForm = this.lookupReference('attrDetailForm');
        this.itemsEditFieldContainer = this.lookupReference('itemsEditFieldContainer');
        this.defaultValueTextfield = this.lookupReference('defaultValueTextfield');
        this.jsonPanelCmpt = this.lookupReference('jsonPanelCmpt');
        this.nameTextField = this.lookupReference('nameTextField');
        this.versionNumberfield = this.lookupReference('versionNumberfield');
    },

    onResize: function(){
        //console.log("resize");
    },

    onshowJsonButtonClick: function(){
        var postObj = this.getFormPostObj();
        this.printObjAsJson(postObj);
        return postObj;
    },

    getFormPostObj: function(){
        var values = this.attrDetailForm.getForm().getFieldValues();

        var postObj = {};
        for(var key in values)
        {
            if(key === 'items')
                continue;   //items processed separately, using itemsedit
            if(key.startsWith('textfield'))
                continue;   //skip textfield noise
            if(values[key] === null || values[key] === '' || values[key].length === 0)
                continue;
            else
                postObj[key] = values[key];
        }
        if(postObj.config)
            postObj.config = JSON.parse(postObj.config);

        //process itemedit
        var postItems = [];
        if(this.defaultValueTextfield.getValue() != '')
            postItems.push({defaultValue: this.defaultValueTextfield.getValue()});
        var childItemsLen = this.itemsEditFieldContainer.items.getCount();
        for(var i = 1; i < childItemsLen - 1; ++i)
        {
            var currChildItem = this.itemsEditFieldContainer.items.getAt(i),
                currName = currChildItem.items.getAt(0).getValue(),
                currLabel = currChildItem.items.getAt(2).getValue();
            if(currName != '' || currLabel != '')
            {
                postItems.push({
                    name: currName,
                    label: currLabel
                });
            }
        }
        if(postItems.length > 0)
            postObj['items'] = postItems;

        return postObj;
    },

    printObjAsJson: function(obj){
        var jsonStr = JSON.stringify(obj, null, 2);
        this.jsonPanelCmpt.setHtml("<pre>" + jsonStr + "</pre>");
    },

    onUpsertButtonClick: function(){
        var postObj = this.onshowJsonButtonClick();

        var me = this;
        Ext.Ajax.request({
            url: global.urlPost,
            method: 'POST',
            proxy:{
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json'
                }
            },
            jsonData: postObj,
            callback: function(options, success, response){
                console.log(response);
                Ext.Msg.show({
                    title:'Server Response',
                    message: response.responseText
                });
            }
        });
    },

    onDeleteButtonClick: function(){
        var me = this;
        var deleteUrl = global.urlDelete + "?attrname=" + me.nameTextField.getValue()
         + "&version=" + me.versionNumberfield.getValue();
        Ext.Ajax.request({
            url: deleteUrl,
            method: 'DELETE',
            proxy:{
                reader: {
                    type: 'json'
                }
            },
            callback: function(options, success, response){
                Ext.Msg.show({
                    title:'Server Response',
                    message: response.responseText
                });
            }
        });
    },

    onResetButtonClick: function(){
        this.attrDetailForm.reset(true);
        this.onItemsEditRefresh({});
        this.onshowJsonButtonClick();
    },

    onJsonPanelCmptRefresh: function(){
        this.onshowJsonButtonClick();
    },

    onItemsChange: function(itemsTextarea, newValue, oldValue){
        this.itemsEditFieldContainer.fireEvent('refresh', newValue);
    },

    onItemsEditRefresh: function(items){
        var itemsObj = {};
        if(!Ext.Object.isEmpty(items))
            itemsObj = JSON.parse(items);

        //Destroy all child items except first (defaultValue) and last (button to add row)
        //To delete certain child items in items collection:
        //store all childs to delete in another array -> remove their reference in items collection -> destroy each of them in array
        //Do not delete directly on items collection; unexpected behaviors.
        var childItemsLen = this.itemsEditFieldContainer.items.getCount();
        var childItemsToDelete = [];
        for(var i = 1; i < childItemsLen - 1; ++i)
        {
            var currChildItem = this.itemsEditFieldContainer.items.getAt(i);
            childItemsToDelete.push(currChildItem);
        }
        if(childItemsLen > 2)
            this.itemsEditFieldContainer.items.removeRange(1, childItemsLen - 2);
        for(var i = 0; i < childItemsToDelete.length; ++i)
        {
            childItemsToDelete[i].destroy();
        }

        this.defaultValueTextfield.setValue('');

        //Start to add name-text pairs from itemsObj
        for(var key in itemsObj)
        {
            if(key === 'defaultValue')
            {
                this.defaultValueTextfield.setValue(itemsObj[key]);
            }
            else
            {
                this.insertNameLabelPair(key, itemsObj[key].text);
            }
        }
        this.insertNameLabelPair('', '');   //Always an additional another empty pair
    },

    onAddPairButtonClick: function(){
        this.insertNameLabelPair('', '');
    },

    //Insert pair at last - 1 position (last is the button)
    insertNameLabelPair: function(name, label){
        var indexToInsert = this.itemsEditFieldContainer.items.getCount() - 1;
        this.itemsEditFieldContainer.items.insert(indexToInsert, Ext.create({
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    labelWidth: 50,
                    value: name,
                    allowBlank: true
                },
                {
                    xtype: 'splitter',
                    width: 30
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Label',
                    labelWidth: 50,
                    value: label,
                    allowBlank: true
                },
                {
                    xtype: 'tbspacer',
                    width: 30
                },
                {
                    xtype: 'button',
                    text: 'Copy Name->Label',
                    handler: function(button){
                        var parentRow = button.up('fieldcontainer'),
                            name = parentRow.items.getAt(0).getValue();
                        parentRow.items.getAt(2).setValue(name);
                    }
                }
            ]
        }));
        this.itemsEditFieldContainer.updateLayout();
    },

    onNameToLabelClick: function(button){
        var parentRow = button.up('fieldcontainer'),
            name = parentRow.items.getAt(0).getValue();
        parentRow.items.getAt(2).setValue(name);
    }
    
});