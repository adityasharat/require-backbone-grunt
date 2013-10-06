'use strict';
var define = define;

define(
    [
        'backbone',
        'models/Currency',
    ],
    function (Backbone, Currency) {
        var CurrencyCollection = Backbone.Collection.extend({
            url : 'http://localhost:3000/currencies',
            model: Currency
        });
        return CurrencyCollection;
    }
);