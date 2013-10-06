// indent = 0 used for all js files

'use strict';
var window,
    define = define;

var currency;

require.config({
    shim : {
        underscore : {
            exports: '_'
        },
        backbone : {
            deps : [ 'underscore', 'jquery' ],
            exports : 'Backbone'
        },
        handlebars : {
            exports : 'Handlebars'
        }
    },
    paths : {
        jquery : '../lib/jquery',   // follows define pattern
        underscore : '../lib/underscore',
        backbone : '../lib/backbone',
        text : '../lib/text',       // follows define pattern
        handlebars : '../lib/handlebars'
    }
});

require(
    [
        'jquery',
        'backbone',
        'views/AppView',
        'routers/Router'
    ],
    function ($, Backbone, AppView, CurrencyRouter) {

        $.ajaxSetup({
            headers: {
                'Authorization' : "Basic " + window.btoa('andrew:test'),
                'Content-Type' : 'application/json'
            }
        });

        var router = new CurrencyRouter();

        var app = new AppView();
        app.render().$el.appendTo($('#wrapper'));

        router.form = app.currencyFormView;
        router.table = app.currencyCollectionView;

        Backbone.history.start();
    }
);