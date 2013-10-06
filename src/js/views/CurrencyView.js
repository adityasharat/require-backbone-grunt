'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/Currency',
        'text!/js/templates/currency_view.html'

    ],
    function ($, _, Backbone, Currency, template) {
        var CurrencyView = Backbone.View.extend({
            tagName : 'tr',
            model : Currency,
            events : {
                'click .delete' : 'del'
            },
            render : function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            initialize : function () {
                this.template = _.template(template);
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'destroy', this.remove);
                return this;
            },
            del : function () {
                console.log('deleting currency : ' + this.model.get('_id'));
                this.model.destroy();
                console.log(this.model);
            }
        });

        return CurrencyView;
    }
);