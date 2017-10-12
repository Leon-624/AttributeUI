/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

var global = {};
//global.urlPrefix = "../../";
global.urlPrefix = "../Application/v1/";

//Url to POST and GET
global.urlPost = global.urlPrefix + "Set/dv/listitem";
global.urlGet = global.urlPrefix + "Set/dv/definitions";
global.urlReload = global.urlPrefix + "Set/dv/reload";
global.urlDelete = global.urlPrefix + "Set/dv/listitem";


Ext.define('AttributeUI.Application', {
    extend: 'Ext.app.Application',
    
    name: 'AttributeUI',
    
    launch: function () {
        this.preSetup();

        Ext.create('Ext.container.Viewport', {
            autoScroll: true,
            layout: 'anchor',
            items: [
                {
                    xtype: 'viewporttab',
                    anchor: '100% 100%'
                }
            ]
        });
    },

    requires: [
        'AttributeUI.view.viewport.ViewportTab',
        'AttributeUI.view.viewport.ViewportTabViewController',

        'AttributeUI.view.attrlist.AttrList',
        'AttributeUI.view.attrlist.AttrListViewController',
        'AttributeUI.view.attrlist.AttrListViewModel',
        'AttributeUI.model.AttrList',

        'AttributeUI.view.attrdetail.AttrDetail',
        'AttributeUI.view.attrdetail.AttrDetailViewController',

        'AttributeUI.view.attrreport.AttrReport',
        'AttributeUI.view.attrreport.AttrReportViewController'
    ],

    preSetup: function(){
        global.toast = function(text){
            Ext.toast({
                html: text,
                height: 20,
                shadow: true,
                slideInDuration: 500,
                slideBackDuration: 1000,
                bodyStyle: {
                    background: '#ffe066'
                }
            });
        };
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
