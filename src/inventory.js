
define(['events'], function(events) {
    'use strict';


    var inventory = {

        myInventory: [],

        addItem: function(myItem) {

            this.myInventory.push(myItem);
            events.publish('addedItem', myItem);

            return true;

        },

        removeItem: function(myItem) {

            var i = 0;
            
            for( i = 0; i < this.myInventory.length; i++) {
                if( this.myInventory[i].upc == myItem.upc) {
                    this.myInventory[i].quantity -= 1;
                    return true;
                }
            }

            return false;

        },

        listItems: function() {

            return this.myInventory;

        },

        clearInventory: function() {
            this.myInventory = [];
        },

        getQuantity: function(upc) {
            var i = 0;
            for( i = 0; i < this.myInventory.length; i++) {
                if (this.myInventory[i].upc === upc) {
                    return this.myInventory[i].quantity;
                }
            }
        },

        getItem: function(upc) {
            var i = 0;

            for(i = 0; i < this.myInventory.length; i++) {
                if(this.myInventory[i].upc == upc) {
                    return this.myInventory[i];
                }
            }
        },


        addItemAfterDelay: function(delay, callback) {
            var timeoutDelay = Array.prototype.shift.call(arguments);
            var callback = Array.prototype.shift.call(arguments);
            var operands = arguments;

            setTimeout( function() {
                callback(inventory.addItem.apply(this, operands));
            }, timeoutDelay);
        }


    };

    console.log('My Inventory App');

    return inventory;
})