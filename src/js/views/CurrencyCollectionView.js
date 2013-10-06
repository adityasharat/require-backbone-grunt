'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/Currency',
        'collections/CurrencyCollection',
        'views/CurrencyView',
        'text!/js/templates/currency_collection_view.html'
    ],
    function ($, _, Backbone, Currency, CurrencyCollection, CurrencyView, template) {
        var CurrencyCollectionView = Backbone.View.extend({
            collection : CurrencyCollection,
            tagName : 'div',
            id : 'currency-list',
            render : function () {
                return this;
            },
            initialize : function () {
                this.template = _.template(template);

                this.$el.html(this.template);
                this.$table = this.$el.find('#currency-table');

                this.listenTo(this.collection, 'add', this.addOne);
                this.listenTo(this.collection, 'reset', this.addAll);

                this.collection.fetch({reset : true});

                return this;
            },
            addOne : function (curr) {
                console.log('adding: ' + curr.get('_id'));
                var view = new CurrencyView({model : curr});
                this.$table.append(view.render().el);
            },
            addAll : function () {
                // add all currencies
                //var $tableHead = this.$el.find('.table-head');
                //this.$table.html($tableHead);
                this.collection.each(this.addOne, this);
            },
            show : function () {
                this.$el.show();
            },
            hide : function () {
                this.$el.hide();
            }
        });
        return CurrencyCollectionView;
    }
);