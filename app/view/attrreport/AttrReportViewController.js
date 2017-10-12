Ext.define('AttributeUI.view.attrreport.AttrReportViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.attrreport',

    onAfterRender: function(){
        this.attrCriteriaForm = this.lookupReference('attrCriteriaForm');
        this.xtypeField = this.lookupReference('xtypeField');
        this.rolesTagField = this.lookupReference('rolesTagField');
        this.requiredField = this.lookupReference('requiredField');
        this.hiddenField = this.lookupReference('hiddenField');
        this.isDependentField = this.lookupReference('isDependentField');
        this.isQuoteAttributeField = this.lookupReference('isQuoteAttributeField');
        this.checkroleforinitiallyhiddenField = this.lookupReference('checkroleforinitiallyhiddenField');
        this.versionNumberfield = this.lookupReference('versionNumberfield');
        this.columnTagfield = this.lookupReference('columnTagfield');

        this.attrListStore = Ext.getStore('attrlist');

        this.filterField = Ext.getCmp('filterField');
    },

    onGenerateCsvButton: function(){
        //unfilter store first
        this.filterField.setValue('');

        //get criteria
        var criteria = this._getCriteria();
        var columns = this._getCsvColumns();
        var totalAttr = 0;

        var me = this;
        var csvContent = "data:text/csv;charset=utf-8";
        for(var i = 0; i < columns.length; ++i)
            csvContent += ("," + columns[i]);
        csvContent += "\n";

        this.attrListStore.each(function(record){
            var recordStr = me._passCriteria(record, criteria, columns);
            if(recordStr)
            {
                totalAttr++;
                csvContent += (recordStr + "\n");
            }
        });
        csvContent += ("Total Attributes: " + totalAttr);

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Attribute_Report.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    },

    _getCriteria: function(){
        var criteria = this.attrCriteriaForm.getForm().getFieldValues();
        //console.log(criteria);
        return criteria;
    },

    _getCsvColumns: function(){
        return this.columnTagfield.getValue();
    },

    _passCriteria: function(record, criteria, columns){
        if(!this._examineCriteria(record, criteria))
            return false;

        var recordStr = "";
        for(var i = 0; i < columns.length; ++i)
        {
            if(i != 0)
                recordStr += ",";
            var value = record.get(columns[i]);
            if(value instanceof Array)
            {
                if(value.length == 0)
                    recordStr += "none";
                else
                {
                    var valueStr = "";
                    valueStr += value[0];
                    for(var j = 1; j < value.length; ++j)
                        valueStr += ("; " + value[j]);
                    recordStr += valueStr;
                }
            }
            else
                recordStr += value;
        }
        return recordStr;
    },

    _examineCriteria: function(record, criteria){
        for(var key in criteria)
        {
            var recordValue = record.get(key);
            if(key == 'columns')
                continue;
            if(criteria[key] instanceof Array)
            {
                if(criteria[key].length == 0)
                    continue;

                if(!recordValue)
                    return false;
                if(recordValue instanceof Array)
                {
                    var recordValueInCriteria = false;
                    for(var i = 0; i < recordValue.length; ++i)
                        if(criteria[key].indexOf(recordValue[i]) != -1)
                        {
                            recordValueInCriteria = true;
                            break;
                        }
                    if(!recordValueInCriteria)
                        return false;
                }
                else
                {
                    if(criteria[key].indexOf(recordValue) == -1)
                        return false;
                }
            }
            else
            {
                if(criteria[key] != recordValue)
                    return false;
            }
        }
        return true;
    },

    onResetButtonClick: function(){
        this.attrCriteriaForm.reset();
    }
});