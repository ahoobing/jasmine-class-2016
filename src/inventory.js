
define(['events','jquery'], function(events, $) {
    'use strict';

    var myInventory = [];

    var inventory = {


        addItem: function(myItem, finished) {


            $.get('http://numbersapi.com/421/trivia', function(fact) {

                myItem.fact = fact;

                myInventory.push(myItem);
                events.publish('addedItem', myItem);

                console.log('fact = ' + fact);
                finished(true);
            });




        },

        removeItem: function(myItem) {

            var i = 0;
            
            for( i = 0; i < myInventory.length; i++) {
                if( myInventory[i].upc == myItem.upc) {
                    myInventory[i].quantity -= 1;
                    return true;
                }
            }

            return false;

        },

        listItems: function() {

            return myInventory;

        },

        clearInventory: function() {
            myInventory = [];
        },

        getQuantity: function(upc) {
            var i = 0;
            for( i = 0; i < myInventory.length; i++) {
                if (myInventory[i].upc === upc) {
                    return myInventory[i].quantity;
                }
            }
        },

        getItem: function(upc) {
            var i = 0;

            for(i = 0; i < myInventory.length; i++) {
                if(myInventory[i].upc == upc) {
                    return myInventory[i];
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