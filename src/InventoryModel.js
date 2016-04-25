define(['events','jquery','underscore', 'backbone'], function(events, $, _, Backbone) {
    'use strict';

    return Backbone.Model.extend( {
        defaults: {
            inventory: null
        },

        addItem: function(item) {

            this.set('inventory', item);

        },

        removeItem: function() {

            this.set('inventory', '');

        }

        });


});