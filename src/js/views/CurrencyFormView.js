'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/Currency',
        'collections/CurrencyCollection',
        'text!/js/templates/form_view.html'
    ],
    function ($, _, Backbone, Currency, CurrencyCollection, template) {
        var CurrencyFormView = Backbone.View.extend({
            tagName : 'div',
            id : 'currency-form',
            collection : CurrencyCollection,
            model : Currency,
            events : {
                'click #addCurr' : 'addCurr'
            },
            render : function () {
                this.$el.html(this.template());
                return this;
            },
            initialize : function () {
                this.template = _.template(template);
                return this;
            },
            addCurr : function () {
                var id = this.$el.find('#curr-id').val(),
                    desc = this.$el.find('#curr-desc').val(),
                    curr,
                    that = this;

                this.addDummyCurrency(id, function () {
                    that.collection.create({
                        _id : id,
                        description : desc,
                        last_updated_by : 'andrew',
                        last_updated_date : that.getTime()
                    });
                    that.displayMessage('Currency Added');
                }, that.displayMessage('Currency Already Exists'));
            },
            getTime : function () {
                var date = new Date(),
                    time = date.getYear() + "-" + date.getMonth()
                        + "-" + date.getDate() + "T" + date.getHours() + ":"
                        + date.getMinutes() + ":" + date.getSeconds() + "z";
                return time;
            },
            addDummyCurrency : function (id, succcess, error) {
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/currencies',
                    dataType : 'json',
                    data : '{"_id": "' + id + '",'
                        + '"description": "-",'
                        + '"last_updated_by": "-",'
                        + '"last_updated_date": "-"}',
                    contentType : "application/json;charset=utf-8",
                    success : function (data) {
                        succcess();
                    },
                    crossDomain : true,
                    error : function (data) {
                        error();
                    }
                });
            },
            displayMessage : function (msg) {
                var msgDiv = this.$el.find('#message'),
                    label = $($('<label class="msg">' + msg + '</label>'));

                msgDiv.html('');
                label.hide()
                    .appendTo(msgDiv)
                    .fadeIn(1000)
                    .fadeOut(1000);
            },
            show : function () {
                this.$el.show();
            },
            hide : function () {
                this.$el.hide();
            }
        });

        return CurrencyFormView;
    }
);