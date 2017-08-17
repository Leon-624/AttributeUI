Ext.define('AttributeUI.view.attrdetail.AttrDetailViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.attrdetail',

    onAfterRender: function(){
        this.attrDetailForm = this.lookupReference('attrDetailForm');
        this.jsonPanelCmpt = this.lookupReference('jsonPanelCmpt');
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
            if(values[key] === null || values[key] === '' || values[key].length === 0)
                continue;
            else
                postObj[key] = values[key];
        }
        if(postObj.items)
            postObj.items = JSON.parse(postObj.items);
        if(postObj.config)
            postObj.config = JSON.parse(postObj.config);
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
            url: global.postUrl,
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

    onResetButtonClick: function(){
        this.attrDetailForm.reset(true);
    }
    
});