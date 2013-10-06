'use strict';
var define = define;

define(['backbone'], function (Backbone) {
    var Currency = Backbone.Model.extend({
        urlRoot : 'http://localhost:3000/currencies',
        idAttribute: '_id',
        defaults : {
            description : '',
            last_updated_by : '',
            last_updated_date : ''
        },
        initialize : function () {
            console.log('A new currency created');
        }
    });

    return Currency;
});