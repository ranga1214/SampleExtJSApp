Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.grid.Panel'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [

       {
           xtype: 'gridpanel',
           stateful: true,
           stateId:'model-cars-grid',
           width: 650,
           height: 350,
           title: 'Ext JS Grid - Stateful - Server',
           store: 'ModelCars',

           columns: [
                {
                    text: 'Id',
                    hidden: true, 
                    dataIndex: 'id',
                    stateId: 'col-id'
                },

                {
                    text: 'Name',
                    sortable: true, 
                    dataIndex: 'name',
                    flex: 3,
                    stateId: 'col-name'
                },
                {
                    text: 'Vendor',
                    sortable: true,
                    dataIndex: 'vendor',
                    flex: 2,
                    stateId: 'col-vendor'
                },
                {
                    text: 'Category',
                    sortable: true,
                    dataIndex: 'category',
                    flex: 2,
                    stateId: 'col-category'
                }
           ]
       }
    ]
});
