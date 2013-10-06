'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'collections/CurrencyCollection',
        'views/CurrencyCollectionView',
        'views/CurrencyFormView',
        'text!/js/templates/app_view.html'
    ],
    function ($, _, Backbone, CurrencyCollection, CurrencyCollectionView, CurrencyFormView, template) {
        var AppView = Backbone.View.extend({
            tagName : 'div',
            id : 'currency-app',
            render : function () {
                this.$el.html(this.template());
                this.$el.append(this.currencyCollectionView.render().$el);
                this.$el.append(this.currencyFormView.render().$el);
                return this;
            },
            initialize : function () {
                this.template = _.template(template);
                this.currencyCollection = new CurrencyCollection();

                this.currencyCollectionView = new CurrencyCollectionView({
                    collection : this.currencyCollection
                });
                this.currencyFormView = new CurrencyFormView({
                    collection: this.currencyCollection
                });

                return this;
            }
        });
        return AppView;
    }
);