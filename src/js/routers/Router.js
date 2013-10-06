'use strict';

var define = define;

define(['backbone'], function (Backbone) {
    // Currency Router
    var CurrencyRouter = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },
        setFilter: function (param) {
            if (param === 'form') {
                console.log('form route');
                this.table.hide();
                this.form.show();
            } else {
                console.log('table route');
                this.form.hide();
                this.table.show();
            }
        }
    });
    return CurrencyRouter;
});
